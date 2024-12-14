package compiler

import (
	"fmt"
	"log"
	"slices"
	"sort"
	"strings"
	"unicode"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
	"github.com/samber/lo"
)

func CompileItems() ([]*entity.CompiledItem, error) {
	items, err := util.LoadFiles(config.PathItems, []*entity.Item{})
	if err != nil {
		return nil, fmt.Errorf("load files: %w", err)
	}
	var (
		itemMap  = resolveItems(items)
		parents  = resolveParents(itemMap)
		children = resolveChildren(itemMap)
		relates  = resolveRelates(itemMap, parents, children)
	)
	var (
		compiles      = make(map[string]*entity.CompiledItem)
		compilesSlice = make([]*entity.CompiledItem, 0)
	)
	for _, item := range items {
		var (
			invasion    = resolveInvasion(parents[item.Code], item)
			information = resolveInfo(itemMap, item)
		)
		compiledItem := &entity.CompiledItem{
			Code:          item.Code,
			Name:          item.Name,
			NameAlias:     item.NameAlias,
			NameOthers:    item.NameOthers,
			Website:       item.Website,
			Description:   item.Description,
			TypeStr:       entity.ItemTypeStr[item.Type],
			Type:          item.Type,
			CategoryStr:   entity.ItemCategoryStr[item.Category],
			Category:      item.Category,
			OwnerStr:      entity.ItemOwnerStr[item.Owner],
			Owner:         item.Owner,
			InvasionStr:   entity.ItemInvasionStr[invasion],
			Invasion:      invasion,
			InvasionLevel: entity.ItemInvasionLevel[invasion],
			Summary:       resolveSummary(itemMap, item, invasion),
			PlainText:     "",
			Information:   information,
			ModUnix:       item.ModTime.Unix(),
		}
		compiledItem.PlainText = resolvePlainText(itemMap, compiledItem)
		compiles[item.Code] = compiledItem
		compilesSlice = append(compilesSlice, compiles[item.Code])
	}
	for _, item := range compiles {
		if parents, ok := parents[item.Code]; ok {
			for _, parent := range parents {
				item.Parents = append(item.Parents, compiles[parent.Code])
			}
		}
		if relates, ok := relates[item.Code]; ok {
			for _, relate := range relates {
				item.Relates = append(item.Relates, compiles[relate.Code])
			}
		}
		if children, ok := children[item.Code]; ok {
			for _, child := range children {
				item.Children = append(item.Children, compiles[child.Code])
			}
		}
	}
	sort.SliceStable(compilesSlice, func(i, j int) bool {
		return compilesSlice[i].ModUnix > compilesSlice[j].ModUnix
	})
	return compilesSlice, nil
}

func resolveSummary(items map[string]*entity.Item, item *entity.Item, invasion entity.ItemInvasion) (summary string) {
	if invasion != entity.ItemInvasionUnknown {

		summary += strings.TrimSpace(fmt.Sprintf("%s是", KeepSpace(item.Name)))

		switch invasion {
		case entity.ItemInvasionManipulated:
			summary += "透過輿論手法、言論審查影響台灣的"
		case entity.ItemInvasionCollaborated:
			summary += "因為利益而與侵台對象合作的"
		case entity.ItemInvasionFunded:
			summary += "有中國資金背景的"
		case entity.ItemInvasionSupported:
			summary += "支持中國侵略、統一的"
		}
		summary += fmt.Sprintf("%s；", entity.ItemTypeStr[item.Type])
	}
	summary += strings.TrimSpace(ParseItemTextPlain(items, item.Description))
	return
}

func resolvePlainText(items map[string]*entity.Item, item *entity.CompiledItem) string {
	var content strings.Builder

	content.WriteString(item.Name)

	if item.NameAlias != "" {
		content.WriteString("（" + item.NameAlias + "）")
	}
	content.WriteString("<br>")

	if item.InvasionLevel == 4 {
		content.WriteString("★★★★")
	} else if item.InvasionLevel == 3 {
		content.WriteString("★★★☆")
	} else if item.InvasionLevel == 2 {
		content.WriteString("★★☆☆")
	} else if item.InvasionLevel == 1 {
		content.WriteString("★☆☆☆")
	} else {
		content.WriteString("☆☆☆☆")
	}

	content.WriteString(" / " + item.InvasionStr)
	content.WriteString("<br>")
	content.WriteString("<br>")
	content.WriteString(ParseItemTextPlain(items, item.Description))
	content.WriteString("<br>")
	content.WriteString("<br>")

	for _, v := range item.Information {
		content.WriteString("．" + ParseItemTextPlain(items, v.Description))
		content.WriteString("<br>")
	}
	content.WriteString("<br>")
	content.WriteString("============================")
	content.WriteString("<br>")
	content.WriteString("中國侵略資料庫")
	content.WriteString("<br>")
	content.WriteString(fmt.Sprintf("%s/%s", config.BaseURL, item.Code))
	return content.String()
}

func resolveItems(items []*entity.Item) map[string]*entity.Item {
	resolved := make(map[string]*entity.Item)

	for _, item := range items {
		if err := isValid(items, item); err != nil {
			log.Fatalf("check item: %v", err)
		}
		resolved[item.Code] = item
	}
	return resolved
}

func resolveRelates(items map[string]*entity.Item, parents, children map[string][]*entity.Item) map[string][]*entity.Item {
	relates := make(map[string][]*entity.Item)

	for _, item := range items {
		scopes := append([]*entity.Item{item}, parents[item.Code]...)

		for _, scope := range scopes {
			relates[item.Code] = append(relates[item.Code], parents[scope.Code]...)
			relates[item.Code] = append(relates[item.Code], children[scope.Code]...)
		}
		relates[item.Code] = lo.Uniq(lo.Filter(relates[item.Code], func(v *entity.Item, _ int) bool {
			return v.Code != item.Code
		}))
		sort.SliceStable(relates[item.Code], func(i, j int) bool {
			return relates[item.Code][i].Code < relates[item.Code][j].Code
		})
	}
	return relates
}

func resolveParents(items map[string]*entity.Item) map[string][]*entity.Item {
	parents := make(map[string][]*entity.Item)

	for _, item := range items {
		parent := items[item.ParentCode]
		parents[item.Code] = []*entity.Item{}

		for parent != nil {
			parents[item.Code] = append(parents[item.Code], parent)
			parent = items[parent.ParentCode]
		}
	}
	return parents
}

func resolveChildren(items map[string]*entity.Item) map[string][]*entity.Item {
	children := make(map[string][]*entity.Item)

	for _, item := range items {
		if children[item.Code] == nil {
			children[item.Code] = []*entity.Item{}
		}

		if item.ParentCode != "" {
			children[item.ParentCode] = append(children[item.ParentCode], item)
		}
	}

	for parent, items := range children {
		for _, item := range items {
			children[parent] = append(children[parent], children[item.Code]...)
		}
		sort.SliceStable(children[parent], func(i, j int) bool {
			return children[parent][i].Code < children[parent][j].Code
		})
	}

	return children
}

func resolveInfo(items map[string]*entity.Item, item *entity.Item) (compiles []*entity.CompiledItemInfo) {
	var (
		seenInvasions = []entity.ItemInvasion{}
	)
	for _, info := range item.Information {
		compiled := &entity.CompiledItemInfo{
			Year:        info.Year,
			Description: info.Description,
			Note:        resolveInvasionNote(info.Invasion, item.Type, item.Owner, true),
		}
		if lo.Contains(seenInvasions, info.Invasion) {
			compiled.Note = ""
		}
		compiles = append(compiles, compiled)
		seenInvasions = append(seenInvasions, info.Invasion)
	}
	var (
		previous = item
		parent   = items[item.ParentCode]
	)
	for parent != nil {
		compiles = append(compiles, &entity.CompiledItemInfo{
			Year:        "",
			Description: fmt.Sprintf("[[%s]] 為 [[%s]] 旗下%s。", previous.Code, parent.Code, entity.ItemTypeStr[previous.Type]),
			Note:        "",
		})
		for _, info := range parent.Information {
			compiled := &entity.CompiledItemInfo{
				Year:        info.Year,
				Description: info.Description,
				Note:        resolveInvasionNote(info.Invasion, item.Type, parent.Owner, false),
			}
			if lo.Contains(seenInvasions, info.Invasion) {
				compiled.Note = ""
			}
			compiles = append(compiles, compiled)
			seenInvasions = append(seenInvasions, info.Invasion)
		}
		previous = parent
		parent = items[parent.ParentCode]
	}
	return
}

func resolveInvasionNote(invasion entity.ItemInvasion, typ entity.ItemType, infoOwner entity.ItemOwner, isSelf bool) (note string) {
	if invasion == entity.ItemInvasionUnknown {
		return
	}
	pronoun := "這個"
	switch typ {
	case entity.ItemTypeCompany:
		pronoun = "這間"
	}
	note = pronoun + entity.ItemTypeStr[typ]
	if !isSelf {
		note += "的上級機構"
	}
	switch invasion {
	case entity.ItemInvasionManipulated:
		note += "曾有過輿論手法、言論審查。"
	case entity.ItemInvasionCollaborated:
		note += "因為利益而與侵台對象合作。"
	case entity.ItemInvasionFunded:
		if infoOwner == entity.ItemOwnerChinese {
			note += "成立於中國境內，且背後資金來自中國。"
		} else {
			note += "背後有中國資金介入。"
		}
	case entity.ItemInvasionSupported:
		note += "支持中國侵略、統一台灣。"
	}
	return
}

func resolveInvasion(parents []*entity.Item, item *entity.Item) entity.ItemInvasion {
	var (
		invasion = entity.ItemInvasionUnknown
		//isChineseOwner = item.Owner == entity.ItemOwnerChinese
	)
	for _, info := range item.Information {
		if entity.ItemInvasionLevel[info.Invasion] > entity.ItemInvasionLevel[invasion] {
			invasion = info.Invasion
		}
	}
	for _, parent := range parents {
		for _, info := range parent.Information {
			if entity.ItemInvasionLevel[info.Invasion] > entity.ItemInvasionLevel[invasion] {
				invasion = info.Invasion
			}
		}
		//if parent.Owner == entity.ItemOwnerChinese {
		//	isChineseOwner = true
		//}
	}
	//if isChineseOwner && invasion == entity.ItemInvasionFunded {
	//	invasion = entity.ItemInvasionSupported
	//}
	return invasion
}

func isValid(items []*entity.Item, item *entity.Item) error {
	if item.Name == "" {
		return fmt.Errorf("name is blank: %s", item.Code)
	}
	if !slices.Contains(entity.ItemCategories, item.Category) {
		return fmt.Errorf("category not exists: %s (%s)", item.Code, item.Category)
	}
	if !slices.Contains(entity.ItemOwners, item.Owner) {
		return fmt.Errorf("owner not exists: %s (%s)", item.Code, item.Owner)
	}
	if !slices.Contains(entity.ItemTypes, item.Type) {
		return fmt.Errorf("type not exists: %s (%s)", item.Code, item.Type)
	}
	for _, info := range item.Information {
		if !slices.Contains(entity.ItemInvasions, info.Invasion) {
			return fmt.Errorf("invasion not exists: %s (%s)", item.Code, info.Invasion)
		}
	}
	if item.ParentCode != "" && !slices.ContainsFunc(items, func(v *entity.Item) bool {
		return v.Code == item.ParentCode
	}) {
		return fmt.Errorf("parent code not exists: %s (%s)", item.Code, item.ParentCode)
	}
	return nil
}

func ParseItemTextPlain(items map[string]*entity.Item, v string) string {
	v = util.ReplaceAllStringSubmatchFunc(util.RegExpBrackets, v, func(groups []string) string {
		item, ok := items[groups[1]]
		if !ok {
			log.Fatalln("item mentioned not exists:", groups[1])
			return fmt.Sprintf(` %s `, groups[1])
		}
		return KeepSpace(item.Name)
	})
	return strings.TrimSpace(v)
}

func KeepSpace(v string) string {
	n := fmt.Sprintf(` %s `, v)
	r := []rune(v)
	if unicode.Is(unicode.Han, r[0]) { // remove leading space if hanzi
		n = strings.TrimLeft(n, " ")
	}
	if unicode.Is(unicode.Han, r[len(r)-1]) { // remove trailing space if hanzi
		n = strings.TrimRight(n, " ")
	}
	return n
}
