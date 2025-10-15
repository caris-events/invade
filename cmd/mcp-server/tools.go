package main

import (
	"fmt"
	"strings"

	"github.com/mark3labs/mcp-go/mcp"
	"github.com/mark3labs/mcp-go/server"
)

// MCPTools handles MCP tool implementations
type MCPTools struct {
	dataLoader *DataLoader
}

// NewMCPTools creates a new MCP tools handler
func NewMCPTools(dataLoader *DataLoader) *MCPTools {
	return &MCPTools{
		dataLoader: dataLoader,
	}
}

// RegisterTools registers all MCP tools with the server
func (mt *MCPTools) RegisterTools(s *server.MCPServer) {
	// Item tools
	s.AddTool(mcp.Tool{
		Name:        "search_items",
		Description: "Search for items (companies, brands, software, games, etc.) in the Chinese invasion database. You can search by keyword, filter by category, type, owner, or invasion level.",
		InputSchema: mcp.ToolInputSchema{
			Type: "object",
			Properties: map[string]interface{}{
				"keyword": map[string]interface{}{
					"type":        "string",
					"description": "Keyword to search in item names and aliases (optional)",
				},
				"category": map[string]interface{}{
					"type":        "string",
					"description": "Filter by category (optional). Values: PERSON, ENTERTAINMENT, INTERNET, ELECTRONIC, TELECOM, GROUP, TECHNOLOGY, SOFTWARE, GAME, POLITICAL, MEDIA, MIXED, EDUCATION, SHOPPING, MANUFACTURE, APPLIANCE, FINANCE, TRAVEL, FOOD, ENERGY, SPORTS, VEHICLE, ART, CONSTRUCTION",
				},
				"type": map[string]interface{}{
					"type":        "string",
					"description": "Filter by type (optional). Values: COMPANY, PERSON, GROUP, SOFTWARE, PLATFORM, GAME, BRAND",
				},
				"owner": map[string]interface{}{
					"type":        "string",
					"description": "Filter by owner (optional). Values: TAIWANESE, HONGKONGESE, CHINESE, FOREIGN",
				},
				"invasion": map[string]interface{}{
					"type":        "string",
					"description": "Filter by invasion type (optional). Values: MANIPULATED, COLLABORATED, FUNDED, SUPPORTED",
				},
				"limit": map[string]interface{}{
					"type":        "integer",
					"description": "Maximum number of results to return (default: 20)",
				},
			},
		},
	}, mt.searchItems)

	s.AddTool(mcp.Tool{
		Name:        "get_item",
		Description: "Get detailed information about a specific item by its code identifier.",
		InputSchema: mcp.ToolInputSchema{
			Type:     "object",
			Required: []string{"code"},
			Properties: map[string]interface{}{
				"code": map[string]interface{}{
					"type":        "string",
					"description": "The unique code identifier of the item (e.g., 'alibaba', 'tencent', 'muse-dash')",
				},
			},
		},
	}, mt.getItem)

	s.AddTool(mcp.Tool{
		Name:        "list_item_categories",
		Description: "List all available item categories with their Chinese names.",
		InputSchema: mcp.ToolInputSchema{
			Type:       "object",
			Properties: map[string]interface{}{},
		},
	}, mt.listItemCategories)

	// Vocab tools
	s.AddTool(mcp.Tool{
		Name:        "search_vocabs",
		Description: "Search for Chinese invasive vocabulary terms (支語) in the dictionary. You can search by keyword or filter by category and explicit content level.",
		InputSchema: mcp.ToolInputSchema{
			Type: "object",
			Properties: map[string]interface{}{
				"keyword": map[string]interface{}{
					"type":        "string",
					"description": "Keyword to search in vocab words (optional)",
				},
				"category": map[string]interface{}{
					"type":        "string",
					"description": "Filter by category (optional). Values: SWEAR, GAME, TECHNOLOGY, ANIMAL, PRONOUN, FOOD, PLACE, INTERNET, WEAPON, HARDWARE, MEDIA, FINANCE, SLANG, VERB, NOUN, ADJECTIVE, ADVERB, VEHICLE, CLOTHING",
				},
				"limit": map[string]interface{}{
					"type":        "integer",
					"description": "Maximum number of results to return (default: 20)",
				},
			},
		},
	}, mt.searchVocabs)

	s.AddTool(mcp.Tool{
		Name:        "get_vocab",
		Description: "Get detailed information about a specific vocabulary term including description, examples, and proper alternatives.",
		InputSchema: mcp.ToolInputSchema{
			Type:     "object",
			Required: []string{"word"},
			Properties: map[string]interface{}{
				"word": map[string]interface{}{
					"type":        "string",
					"description": "The vocabulary word to look up (e.g., '數據庫', '渲染', '三觀')",
				},
			},
		},
	}, mt.getVocab)

	s.AddTool(mcp.Tool{
		Name:        "list_vocab_categories",
		Description: "List all available vocabulary categories with their Chinese names.",
		InputSchema: mcp.ToolInputSchema{
			Type:       "object",
			Properties: map[string]interface{}{},
		},
	}, mt.listVocabCategories)
}

// searchItems implements the search_items tool
func (mt *MCPTools) searchItems(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	keyword, _ := arguments["keyword"].(string)
	category, _ := arguments["category"].(string)
	itemType, _ := arguments["type"].(string)
	owner, _ := arguments["owner"].(string)
	invasion, _ := arguments["invasion"].(string)
	limit := 20
	if l, ok := arguments["limit"].(float64); ok {
		limit = int(l)
	}

	keyword = strings.ToLower(keyword)
	var results []*Item

	for _, item := range mt.dataLoader.GetAllItems() {
		// Filter by category
		if category != "" && string(item.Category) != category {
			continue
		}
		// Filter by type
		if itemType != "" && string(item.Type) != itemType {
			continue
		}
		// Filter by owner
		if owner != "" && string(item.Owner) != owner {
			continue
		}
		// Filter by invasion
		if invasion != "" {
			found := false
			for _, info := range item.Information {
				if string(info.Invasion) == invasion {
					found = true
					break
				}
			}
			if !found {
				continue
			}
		}
		// Filter by keyword
		if keyword != "" {
			nameMatch := strings.Contains(strings.ToLower(item.Name), keyword)
			aliasMatch := strings.Contains(strings.ToLower(item.NameAlias), keyword)
			codeMatch := strings.Contains(strings.ToLower(item.Code), keyword)
			if !nameMatch && !aliasMatch && !codeMatch {
				continue
			}
		}

		results = append(results, item)
		if len(results) >= limit {
			break
		}
	}

	// Format results
	var output strings.Builder
	output.WriteString(fmt.Sprintf("Found %d items:\n\n", len(results)))

	for i, item := range results {
		output.WriteString(fmt.Sprintf("%d. %s (%s)\n", i+1, item.Name, item.Code))
		if item.NameAlias != "" {
			output.WriteString(fmt.Sprintf("   別名: %s\n", item.NameAlias))
		}
		output.WriteString(fmt.Sprintf("   類型: %s | 分類: %s | 擁有者: %s\n", item.Type, item.Category, item.Owner))
		if item.Website != "" {
			output.WriteString(fmt.Sprintf("   網站: %s\n", item.Website))
		}
		if item.Description != "" {
			desc := item.Description
			if len(desc) > 100 {
				desc = desc[:100] + "..."
			}
			output.WriteString(fmt.Sprintf("   說明: %s\n", desc))
		}
		output.WriteString("\n")
	}

	return mcp.NewToolResultText(output.String()), nil
}

// getItem implements the get_item tool
func (mt *MCPTools) getItem(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	code, ok := arguments["code"].(string)
	if !ok || code == "" {
		return mcp.NewToolResultError("code is required"), nil
	}

	item, exists := mt.dataLoader.GetItem(code)
	if !exists {
		return mcp.NewToolResultError(fmt.Sprintf("item with code '%s' not found", code)), nil
	}

	var output strings.Builder
	output.WriteString(fmt.Sprintf("項目: %s\n", item.Name))
	output.WriteString(fmt.Sprintf("代碼: %s\n", item.Code))
	if item.NameAlias != "" {
		output.WriteString(fmt.Sprintf("別名: %s\n", item.NameAlias))
	}
	if len(item.NameOthers) > 0 {
		output.WriteString(fmt.Sprintf("其他名稱: %s\n", strings.Join(item.NameOthers, ", ")))
	}
	output.WriteString(fmt.Sprintf("類型: %s\n", item.Type))
	output.WriteString(fmt.Sprintf("分類: %s\n", item.Category))
	output.WriteString(fmt.Sprintf("擁有者: %s\n", item.Owner))
	if item.ParentCode != "" {
		output.WriteString(fmt.Sprintf("母公司: %s\n", item.ParentCode))
	}
	if item.Website != "" {
		output.WriteString(fmt.Sprintf("網站: %s\n", item.Website))
	}
	if item.Description != "" {
		output.WriteString(fmt.Sprintf("\n說明:\n%s\n", item.Description))
	}

	if len(item.Information) > 0 {
		output.WriteString("\n侵略相關資訊:\n")
		for i, info := range item.Information {
			output.WriteString(fmt.Sprintf("%d. ", i+1))
			if info.Year != "" {
				output.WriteString(fmt.Sprintf("[%s] ", info.Year))
			}
			output.WriteString(fmt.Sprintf("類型: %s\n", info.Invasion))
			if info.Description != "" {
				output.WriteString(fmt.Sprintf("   %s\n", info.Description))
			}
		}
	}

	output.WriteString(fmt.Sprintf("\n詳細資訊: https://invade.tw/%s\n", item.Code))

	return mcp.NewToolResultText(output.String()), nil
}

// listItemCategories implements the list_item_categories tool
func (mt *MCPTools) listItemCategories(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	categories := map[ItemCategory]string{
		ItemCategoryPerson:        "人物",
		ItemCategoryEntertainment: "娛樂產業",
		ItemCategoryInternet:      "網路服務",
		ItemCategoryElectronic:    "電子業",
		ItemCategoryTelecom:       "通訊業",
		ItemCategoryGroup:         "組織/集團",
		ItemCategoryTechnology:    "科技業",
		ItemCategorySoftware:      "軟體",
		ItemCategoryGame:          "遊戲",
		ItemCategoryPolitical:     "政治",
		ItemCategoryMedia:         "傳播媒體",
		ItemCategoryMixed:         "綜合",
		ItemCategoryEducation:     "教育/出版",
		ItemCategoryShopping:      "購物",
		ItemCategoryManufacture:   "製造業",
		ItemCategoryAppliance:     "家電",
		ItemCategoryFinance:       "金融",
		ItemCategoryTravel:        "旅遊",
		ItemCategoryFood:          "食品業",
		ItemCategoryEnergy:        "能源/環保",
		ItemCategorySports:        "運動",
		ItemCategoryVehicle:       "交通工具",
		ItemCategoryArt:           "藝術",
		ItemCategoryConstruction:  "建築業",
	}

	var output strings.Builder
	output.WriteString("項目分類:\n\n")
	for code, name := range categories {
		output.WriteString(fmt.Sprintf("- %s: %s\n", code, name))
	}

	return mcp.NewToolResultText(output.String()), nil
}

// searchVocabs implements the search_vocabs tool
func (mt *MCPTools) searchVocabs(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	keyword, _ := arguments["keyword"].(string)
	category, _ := arguments["category"].(string)
	limit := 20
	if l, ok := arguments["limit"].(float64); ok {
		limit = int(l)
	}

	keyword = strings.ToLower(keyword)
	var results []*Vocab

	for _, vocab := range mt.dataLoader.GetAllVocabs() {
		// Filter by category
		if category != "" && string(vocab.Category) != category {
			continue
		}
		// Filter by keyword
		if keyword != "" {
			wordMatch := strings.Contains(strings.ToLower(vocab.Word), keyword)
			if !wordMatch {
				continue
			}
		}

		results = append(results, vocab)
		if len(results) >= limit {
			break
		}
	}

	// Format results
	var output strings.Builder
	output.WriteString(fmt.Sprintf("找到 %d 個詞彙:\n\n", len(results)))

	for i, vocab := range results {
		output.WriteString(fmt.Sprintf("%d. %s", i+1, vocab.Word))
		if vocab.Bopomofo != "" {
			output.WriteString(fmt.Sprintf(" (%s)", vocab.Bopomofo))
		}
		output.WriteString("\n")
		if vocab.Category != "" {
			output.WriteString(fmt.Sprintf("   分類: %s\n", vocab.Category))
		}
		if vocab.Description != "" {
			desc := vocab.Description
			if len(desc) > 100 {
				desc = desc[:100] + "..."
			}
			output.WriteString(fmt.Sprintf("   說明: %s\n", desc))
		}
		output.WriteString("\n")
	}

	return mcp.NewToolResultText(output.String()), nil
}

// getVocab implements the get_vocab tool
func (mt *MCPTools) getVocab(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	word, ok := arguments["word"].(string)
	if !ok || word == "" {
		return mcp.NewToolResultError("word is required"), nil
	}

	vocab, exists := mt.dataLoader.GetVocab(word)
	if !exists {
		return mcp.NewToolResultError(fmt.Sprintf("vocab '%s' not found", word)), nil
	}

	var output strings.Builder
	output.WriteString(fmt.Sprintf("詞彙: %s", vocab.Word))
	if vocab.Bopomofo != "" {
		output.WriteString(fmt.Sprintf(" (%s)", vocab.Bopomofo))
	}
	output.WriteString("\n")

	if vocab.Category != "" {
		output.WriteString(fmt.Sprintf("分類: %s\n", vocab.Category))
	}
	if vocab.Explicit != "" {
		output.WriteString(fmt.Sprintf("內容分級: %s\n", vocab.Explicit))
	}

	if vocab.Description != "" {
		output.WriteString(fmt.Sprintf("\n說明:\n%s\n", vocab.Description))
	}

	if vocab.Notice != "" {
		output.WriteString(fmt.Sprintf("\n注意:\n%s\n", vocab.Notice))
	}

	if vocab.Deprecation != "" {
		output.WriteString(fmt.Sprintf("\n不建議使用原因:\n%s\n", vocab.Deprecation))
	}

	if len(vocab.Examples) > 0 {
		output.WriteString("\n範例:\n")
		for i, example := range vocab.Examples {
			output.WriteString(fmt.Sprintf("%d. ", i+1))
			if len(example.Words) > 0 {
				output.WriteString(fmt.Sprintf("詞彙: %s\n", strings.Join(example.Words, ", ")))
			}
			if example.Description != "" {
				output.WriteString(fmt.Sprintf("   說明: %s\n", example.Description))
			}
			if example.Incorrect != "" {
				output.WriteString(fmt.Sprintf("   錯誤用法: %s\n", example.Incorrect))
			}
			if example.Correct != "" {
				output.WriteString(fmt.Sprintf("   正確用法: %s\n", example.Correct))
			}
		}
	}

	output.WriteString(fmt.Sprintf("\n詳細資訊: https://invade.tw/v/%s\n", vocab.Word))

	return mcp.NewToolResultText(output.String()), nil
}

// listVocabCategories implements the list_vocab_categories tool
func (mt *MCPTools) listVocabCategories(arguments map[string]interface{}) (*mcp.CallToolResult, error) {
	categories := map[VocabCategory]string{
		VocabCategorySwear:      "髒話",
		VocabCategoryGame:       "遊戲",
		VocabCategoryTechnology: "科技",
		VocabCategoryAnimal:     "動物",
		VocabCategoryPronoun:    "代名詞",
		VocabCategoryFood:       "食物",
		VocabCategoryPlace:      "地點",
		VocabCategoryInternet:   "網路用語",
		VocabCategoryWeapon:     "武器",
		VocabCategoryHardware:   "硬體與設備",
		VocabCategoryMedia:      "影音媒體",
		VocabCategoryFinance:    "金融與消費",
		VocabCategorySlang:      "俚語",
		VocabCategoryVerb:       "動詞",
		VocabCategoryNoun:       "名詞",
		VocabCategoryAdjective:  "形容詞",
		VocabCategoryAdverb:     "副詞",
		VocabCategoryVehicle:    "交通工具",
		VocabCategoryClothing:   "服飾",
	}

	var output strings.Builder
	output.WriteString("詞彙分類:\n\n")
	for code, name := range categories {
		output.WriteString(fmt.Sprintf("- %s: %s\n", code, name))
	}

	return mcp.NewToolResultText(output.String()), nil
}
