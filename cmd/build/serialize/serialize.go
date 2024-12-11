package serialize

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
)

func SerializeStore() error {
	store := &Store{
		ItemCategoryStr:   entity.ItemCategoryStr,
		ItemCategories:    entity.ItemCategories,
		ItemOwnerStr:      entity.ItemOwnerStr,
		ItemOwners:        entity.ItemOwners,
		ItemTypeStr:       entity.ItemTypeStr,
		ItemTypes:         entity.ItemTypes,
		ItemInvasionStr:   entity.ItemInvasionStr,
		ItemInvasions:     entity.ItemInvasions,
		ItemInvasionLevel: entity.ItemInvasionLevel,
		VocabCategoryStr:  entity.VocabCategoryStr,
		VocabCategories:   entity.VocabCategories,
		VocabExplicits:    entity.VocabExplicits,
	}
	b, err := json.Marshal(store)
	if err != nil {
		return fmt.Errorf("marshal encoded store: %w", err)
	}
	var (
		body = fmt.Sprintf(`var db_store = %s`, string(b))
	)
	if err := os.MkdirAll(config.PathDocsScripts, 0755); err != nil {
		return fmt.Errorf("mkdir all: %w", err)
	}
	if err := os.WriteFile(config.PathDocsScripts+"/db_store.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}
