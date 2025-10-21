#!/usr/bin/env python3
"""
Offline trainer for context-aware vocab classifiers.

The script:
 1. loads labelled sentences that contain the target word;
 2. extracts windowed token features (prev/next/window up to N tokens);
 3. trains a logistic regression classifier (balanced);
 4. exports weights into tools/menu_classifier/output/context_models.json.
"""

from __future__ import annotations

import argparse
import json
import math
import sys
from collections import Counter, defaultdict
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, Iterable, List, Tuple

import jieba.posseg as pseg  # type: ignore
import numpy as np  # type: ignore
from sklearn.feature_extraction import DictVectorizer  # type: ignore
from sklearn.linear_model import LogisticRegression  # type: ignore


@dataclass
class Example:
    text: str
    label: str
    source: str | None = None


@dataclass
class ContextWindow:
    features: Dict[str, float]
    label: str
    pos_counts: Counter
    raw_context: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Train a lightweight classifier for a vocab context.")
    parser.add_argument(
        "--input",
        default=Path(__file__).parent / "data" / "menu_contexts.jsonl",
        type=Path,
        help="JSONL file with fields: label, text, (optional) source.",
    )
    parser.add_argument(
        "--target",
        default="菜單",
        help="Target vocab to search for.",
    )
    parser.add_argument(
        "--positive-label",
        default="technology",
        help="Label treated as the positive/highlight class.",
    )
    parser.add_argument(
        "--window",
        type=int,
        default=3,
        help="Number of tokens to include before/after the target word.",
    )
    parser.add_argument(
        "--max-features",
        type=int,
        default=120,
        help="Export at most N features (sorted by |weight|).",
    )
    parser.add_argument(
        "--threshold",
        type=float,
        default=0.5,
        help="Probability threshold for accepting the positive class.",
    )
    parser.add_argument(
        "--uncertain-min",
        type=float,
        default=-0.5,
        help="Lower bound (logit score) for the uncertain band.",
    )
    parser.add_argument(
        "--uncertain-max",
        type=float,
        default=0.5,
        help="Upper bound (logit score) for the uncertain band.",
    )
    parser.add_argument(
        "--version",
        type=int,
        default=1,
        help="Version number stored alongside the classifier payload.",
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(__file__).parent / "output" / "context_models.json",
        help="Output JSON file (merged if already present).",
    )
    return parser.parse_args()


def load_examples(path: Path) -> List[Example]:
    examples: List[Example] = []
    if not path.exists():
        raise FileNotFoundError(f"Input corpus not found: {path}")
    with path.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if not line:
                continue
            data = json.loads(line)
            text = data.get("text", "").strip()
            label = data.get("label")
            if not text or not label:
                continue
            examples.append(Example(text=text, label=str(label), source=data.get("source")))
    return examples


def extract_context_windows(
    examples: Iterable[Example],
    target: str,
    window: int,
) -> Tuple[List[ContextWindow], Counter, Dict[str, Counter]]:
    windows: List[ContextWindow] = []
    label_counts: Counter = Counter()
    pos_by_label: Dict[str, Counter] = defaultdict(Counter)

    for example in examples:
        tokens = list(pseg.cut(example.text))
        if not tokens:
            continue
        target_indices = [
            idx for idx, token in enumerate(tokens) if token.word == target
        ]
        if not target_indices:
            continue

        for idx in target_indices:
            label_counts[example.label] += 1
            context_tokens = build_token_window(tokens, idx, window)
            if not context_tokens:
                continue

            pos_counter = Counter(tok.flag for tok in context_tokens["window_tokens"])
            pos_by_label[example.label].update(pos_counter)

            feature_dict = build_feature_dict(context_tokens)
            windows.append(
                ContextWindow(
                    features=feature_dict,
                    label=example.label,
                    pos_counts=pos_counter,
                    raw_context=context_tokens["raw"],
                )
            )

    return windows, label_counts, pos_by_label


def build_token_window(tokens, index: int, window: int) -> Dict[str, List]:
    if index < 0 or index >= len(tokens):
        return {}
    window = max(1, min(int(window), 6))

    prev_tokens = []
    for i in range(index - 1, -1, -1):
        token = tokens[i]
        if token.word.strip():
            prev_tokens.append(token)
        if len(prev_tokens) >= window:
            break

    next_tokens = []
    for i in range(index + 1, len(tokens)):
        token = tokens[i]
        if token.word.strip():
            next_tokens.append(token)
        if len(next_tokens) >= window:
            break

    if not prev_tokens and not next_tokens:
        return {}

    prev_tokens = prev_tokens[:window]
    next_tokens = next_tokens[:window]
    window_tokens = list(reversed(prev_tokens)) + next_tokens

    raw_context = "{}[{}]{}".format(
        "".join(tok.word for tok in reversed(prev_tokens)),
        tokens[index].word,
        "".join(tok.word for tok in next_tokens),
    )

    return {
        "prev": prev_tokens,
        "next": next_tokens,
        "window_tokens": window_tokens,
        "raw": raw_context,
    }


def build_feature_dict(context_tokens: Dict[str, List]) -> Dict[str, float]:
    features: Dict[str, float] = {}

    for offset, token in enumerate(context_tokens.get("prev", []), start=1):
        key = f"token:prev:{offset}:{token.word}"
        features[key] = 1.0

    for offset, token in enumerate(context_tokens.get("next", []), start=1):
        key = f"token:next:{offset}:{token.word}"
        features[key] = 1.0

    for token in context_tokens.get("window_tokens", []):
        key = f"token:window:{token.word}"
        features[key] = 1.0

    return features


def train_classifier(
    contexts: List[ContextWindow],
    positive_label: str,
) -> Tuple[LogisticRegression, DictVectorizer, np.ndarray]:
    if not contexts:
        raise ValueError("No training contexts available.")

    vectorizer = DictVectorizer(sparse=True)
    X = vectorizer.fit_transform([ctx.features for ctx in contexts])
    labels = [ctx.label for ctx in contexts]
    unique_labels = sorted(set(labels))
    if len(unique_labels) != 2:
        raise ValueError(f"Expected binary labels, got {unique_labels}")
    if positive_label not in unique_labels:
        raise ValueError(f"Positive label '{positive_label}' not in labels {unique_labels}")

    y = np.array([1 if label == positive_label else 0 for label in labels], dtype=np.int32)

    model = LogisticRegression(
        solver="liblinear",
        class_weight="balanced",
        max_iter=400,
    )
    model.fit(X, y)

    decision_scores = model.decision_function(X)
    return model, vectorizer, decision_scores


def export_payload(
    args: argparse.Namespace,
    contexts: List[ContextWindow],
    model: LogisticRegression,
    vectorizer: DictVectorizer,
    decision_scores: np.ndarray,
    label_counts: Counter,
    pos_by_label: Dict[str, Counter],
) -> Dict:
    feature_names = vectorizer.get_feature_names_out()
    weights = model.coef_[0]
    intercept = float(model.intercept_[0])

    pairs = sorted(
        zip(feature_names, weights),
        key=lambda item: abs(item[1]),
        reverse=True,
    )
    selected = pairs[: args.max_features]
    exported_features = {
        name: round(float(weight), 6)
        for name, weight in selected
        if not math.isclose(weight, 0.0, abs_tol=1e-6)
    }

    probabilities = model.predict_proba(vectorizer.transform([ctx.features for ctx in contexts]))[:, 1]
    y_true = np.array([1 if ctx.label == args.positive_label else 0 for ctx in contexts], dtype=np.int32)
    y_pred = (probabilities >= args.threshold).astype(np.int32)
    accuracy = float((y_true == y_pred).mean())

    payload = {
        args.target: {
            "classifier": {
                "strategy": "logreg",
                "version": args.version,
                "window": int(args.window),
                "bias": round(intercept, 6),
                "threshold": float(args.threshold),
                "features": exported_features,
                "labels": sorted(label_counts.keys()),
                "positiveLabel": args.positive_label,
                "featureNorm": "binary",
                "requireSegments": True,
                "allowUnknown": True,
                "metadata": {
                    "trainedAt": datetime.now(timezone.utc).isoformat(),
                    "samples": len(contexts),
                    "classDistribution": dict(label_counts),
                    "posFrequencies": {
                        label: dict(counter) for label, counter in pos_by_label.items()
                    },
                    "metrics": {
                        "accuracy": round(accuracy, 4),
                        "meanDecisionScore": round(float(decision_scores.mean()), 4),
                        "stdDecisionScore": round(float(decision_scores.std()), 4),
                    },
                    "source": str(args.input),
                },
            },
            "uncertainRange": {
                "min": float(args.uncertain_min),
                "max": float(args.uncertain_max),
            },
        }
    }
    return payload


def merge_existing(output_path: Path, payload: Dict) -> Dict:
    if output_path.exists():
        with output_path.open("r", encoding="utf-8") as handle:
            existing = json.load(handle)
    else:
        existing = {}
    existing.update(payload)
    return existing


def main() -> int:
    args = parse_args()

    examples = load_examples(args.input)
    if not examples:
        print("No labelled sentences found. Abort.", file=sys.stderr)
        return 1

    contexts, label_counts, pos_by_label = extract_context_windows(
        examples,
        target=args.target,
        window=args.window,
    )
    if not contexts:
        print("No context windows extracted. Check that the target word appears in the corpus.", file=sys.stderr)
        return 1

    model, vectorizer, decision_scores = train_classifier(contexts, args.positive_label)
    payload = export_payload(args, contexts, model, vectorizer, decision_scores, label_counts, pos_by_label)

    output_path: Path = args.output
    output_path.parent.mkdir(parents=True, exist_ok=True)
    merged = merge_existing(output_path, payload)

    with output_path.open("w", encoding="utf-8") as handle:
        json.dump(merged, handle, ensure_ascii=False, indent=2, sort_keys=True)

    print(f"Exported classifier for '{args.target}' to {output_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
