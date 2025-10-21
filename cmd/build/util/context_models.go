package util

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"

	"github.com/caris-events/invade/cmd/build/entity"
)

// ContextModelPayload represents the optional classifier/semantic payload produced offline.
type ContextModelPayload struct {
	Classifier     *entity.VocabContextClassifier    `json:"classifier"`
	Semantic       *entity.VocabContextSemanticModel `json:"semantic"`
	UncertainRange *entity.VocabContextRange         `json:"uncertainRange"`
}

// LoadContextModels reads aggregated context models from tools/menu_classifier/output/context_models.json.
// The file is optional; missing files return an empty map.
func LoadContextModels(root string) (map[string]*ContextModelPayload, error) {
	target := filepath.Join(root, "context_models.json")
	payload := make(map[string]*ContextModelPayload)
	data, err := os.ReadFile(target)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return payload, nil
		}
		return nil, fmt.Errorf("read context model payload: %w", err)
	}
	if err := json.Unmarshal(data, &payload); err != nil {
		return nil, fmt.Errorf("unmarshal context model payload: %w", err)
	}
	return payload, nil
}
