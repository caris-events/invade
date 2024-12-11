package serialize

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/samber/lo"
)

func SerializeItems(items []*entity.CompiledItem) error {
	codes := lo.Map(items, func(item *entity.CompiledItem, _ int) string {
		return item.Code
	})
	var encodes []*item
	for i, v := range items {
		parentCode := -1
		if len(v.Parents) > 0 {
			parentCode = lo.IndexOf(codes, v.Parents[0].Code)
		}
		encodes = append(encodes, &item{
			Code:          lo.IndexOf(codes, v.Code),
			ParentCode:    parentCode,
			CategoryIndex: lo.IndexOf(entity.ItemCategories, v.Category),
			Name:          v.Name,
			NameAlias:     v.NameAlias,
			OwnerIndex:    lo.IndexOf(entity.ItemOwners, v.Owner),
			TypeIndex:     lo.IndexOf(entity.ItemTypes, v.Type),
			InvasionIndex: lo.IndexOf(entity.ItemInvasions, v.Invasion),
			Time:          i + 1,
		})
	}
	bytesCodes, err := json.Marshal(codes)
	if err != nil {
		return fmt.Errorf("marshal encoded items: %w", err)
	}
	bytesItems, err := json.Marshal(encodes)
	if err != nil {
		return fmt.Errorf("marshal encoded items: %w", err)
	}
	var (
		body = fmt.Sprintf(`
			var db_item_codes = %s
			var db_items      = %s`, string(bytesCodes), string(bytesItems))
	)
	if err := os.WriteFile(config.PathDocsScripts+"/db_items.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}

func SerializeRandomItems(items []*entity.CompiledItem) error {
	randoms := lo.Map(lo.Samples(items, 100), func(v *entity.CompiledItem, _ int) *randomItem {
		return &randomItem{
			Code:          v.Code,
			Name:          v.Name,
			NameAlias:     v.NameAlias,
			OwnerIndex:    lo.IndexOf(entity.ItemOwners, v.Owner),
			TypeIndex:     lo.IndexOf(entity.ItemTypes, v.Type),
			InvasionIndex: lo.IndexOf(entity.ItemInvasions, v.Invasion),
		}
	})
	b, err := json.Marshal(randoms)
	if err != nil {
		return fmt.Errorf("marshal encoded random items: %w", err)
	}
	var (
		body = fmt.Sprintf(`var db_random_items = %s`, string(b))
	)
	if err := os.WriteFile(config.PathDocsScripts+"/db_random_items.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}
