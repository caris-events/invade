package main

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"

	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
	"github.com/urfave/cli/v2"
)

type extensionVocab struct {
	Word           string                    `json:"word"`
	Category       entity.VocabCategory      `json:"category"`
	CategoryLabel  string                    `json:"categoryLabel"`
	Explicit       entity.VocabExplicit      `json:"explicit"`
	ExplicitLabel  string                    `json:"explicitLabel"`
	Description    string                    `json:"description"`
	Notice         string                    `json:"notice,omitempty"`
	Deprecation    string                    `json:"deprecation,omitempty"`
	Recommended    []string                  `json:"recommended"`
	Examples       []extensionVocabEntry     `json:"examples,omitempty"`
	MatchOptions   *entity.VocabMatchOptions `json:"matchOptions,omitempty"`
	LastModifiedTs int64                     `json:"lastModifiedTs,omitempty"`
}

type extensionVocabEntry struct {
	Words     []string `json:"words,omitempty"`
	Correct   string   `json:"correct,omitempty"`
	Incorrect string   `json:"incorrect,omitempty"`
}

func buildExtensionAssets(_ *cli.Context) error {
	baseDir := os.Getenv("BAKAINVADE_DIR")
	if baseDir == "" {
		var err error
		baseDir, err = os.Getwd()
		if err != nil {
			return fmt.Errorf("determine working directory: %w", err)
		}
	}

	vocabs, err := util.LoadFiles(filepath.Join(baseDir, "database", "vocabs"), []*entity.Vocab{})
	if err != nil {
		return fmt.Errorf("load vocab files: %w", err)
	}

	results := make([]extensionVocab, 0, len(vocabs))
	for _, vocab := range vocabs {
		recommendedSet := make(map[string]struct{})
		for _, example := range vocab.Examples {
			for _, w := range example.Words {
				recommendedSet[strings.TrimSpace(w)] = struct{}{}
			}
		}
		recommended := make([]string, 0, len(recommendedSet))
		for w := range recommendedSet {
			if w == "" {
				continue
			}
			recommended = append(recommended, w)
		}
		sort.Strings(recommended)

		formattedExamples := make([]extensionVocabEntry, 0, len(vocab.Examples))
		for _, example := range vocab.Examples {
			formattedExamples = append(formattedExamples, extensionVocabEntry{
				Words:     example.Words,
				Correct:   strings.TrimSpace(example.Correct),
				Incorrect: strings.TrimSpace(example.Incorrect),
			})
		}

		results = append(results, extensionVocab{
			Word:           vocab.Word,
			Category:       vocab.Category,
			CategoryLabel:  entity.VocabCategoryStr[vocab.Category],
			Explicit:       vocab.Explicit,
			ExplicitLabel:  entity.VocabExplicitStr[vocab.Explicit],
			Description:    strings.TrimSpace(vocab.Description),
			Notice:         strings.TrimSpace(vocab.Notice),
			Deprecation:    strings.TrimSpace(vocab.Deprecation),
			Recommended:    recommended,
			Examples:       formattedExamples,
			MatchOptions:   vocab.MatchOptions,
			LastModifiedTs: vocab.ModTime.Unix(),
		})
	}

	sort.Slice(results, func(i, j int) bool {
		if results[i].LastModifiedTs == results[j].LastModifiedTs {
			return results[i].Word < results[j].Word
		}
		return results[i].LastModifiedTs > results[j].LastModifiedTs
	})

	extensionDir := filepath.Join(baseDir, "browser-extension", "chrome", "data")
	if err := os.MkdirAll(extensionDir, 0o755); err != nil {
		return fmt.Errorf("create extension data directory: %w", err)
	}

	payload, err := json.MarshalIndent(results, "", "  ")
	if err != nil {
		return fmt.Errorf("marshal vocab payload: %w", err)
	}

	target := filepath.Join(extensionDir, "vocabs.json")
	if err := os.WriteFile(target, payload, 0o644); err != nil {
		return fmt.Errorf("write vocab payload: %w", err)
	}
	return nil
}
