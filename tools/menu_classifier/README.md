# Menu Classifier Toolkit

This folder contains the offline tooling that produces learned weights for ambiguous vocabularies (e.g. `菜單`). The workflow:

1. Collect labelled sentences that contain the target vocab in different contexts and store them in JSONL (`data/*.jsonl`).
2. Run `build_model.py` to train a balanced logistic regression classifier and export the weights to `output/context_models.json`.
3. Execute `go run ./cmd/build extension` so the build step merges the generated weights into `browser-extension/chrome/data/vocabs.json`.

## Requirements

- Python 3.9+
- `pip install jieba scikit-learn numpy`

## Quick Start

```bash
cd tools/menu_classifier
python3 build_model.py \
  --input data/menu_contexts.jsonl \
  --target 菜單 \
  --positive-label technology \
  --window 3 \
  --threshold 0.55
```

This command produces `output/context_models.json`. Any existing entries are merged, so you can train multiple vocabularies sequentially.

## Data Format

`data/menu_contexts.jsonl` is a newline-delimited JSON file containing objects with at least:

- `label`: the context class (`technology`, `food`, …)
- `text`: the raw sentence (Traditional Chinese is fine)
- `source` *(optional)*: provenance note

Example line:

```json
{"label":"technology","text":"按下右上角的菜單列展開系統控制。","source":"sample"}
```

## Output Payload

`build_model.py` writes a structure compatible with `cmd/build/entity.VocabMatchContext`:

```json
{
  "菜單": {
    "classifier": {
      "strategy": "logreg",
      "window": 3,
      "bias": -0.184732,
      "threshold": 0.5,
      "features": {
        "token:prev:1:設定": 1.02413,
        "token:next:1:選單": 0.84271,
        "token:window:餐廳": -0.90321
      },
      "labels": ["food", "technology"],
      "positiveLabel": "technology",
      "featureNorm": "binary",
      "requireSegments": true,
      "allowUnknown": true,
      "metadata": {
        "...": "..."
      }
    },
    "uncertainRange": {
      "min": -0.5,
      "max": 0.5
    }
  }
}
```

The build stage merges this payload into the matching vocab entry. The content script then evaluates the classifier whenever the rule-based context score falls within the `uncertainRange`.

## Semantic Embeddings

The current script only handles the TF‑IDF/logistic regression layer. A follow-up tool will export quantised sentence-transformer prototypes (`semantic` payload) once the ONNX model is finalised.
