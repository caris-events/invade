package entity

import (
	"time"
)

type ItemOwner string

const (
	ItemOwnerUnknown     ItemOwner = ""
	ItemOwnerTaiwanese   ItemOwner = "TAIWANESE"
	ItemOwnerHongKongese ItemOwner = "HONGKONGESE"
	ItemOwnerChinese     ItemOwner = "CHINESE"
	ItemOwnerForeign     ItemOwner = "FOREIGN"
)

type ItemType string

const (
	ItemTypeUnknown  ItemType = ""
	ItemTypeCompany  ItemType = "COMPANY"
	ItemTypePerson   ItemType = "PERSON"
	ItemTypeGroup    ItemType = "GROUP"
	ItemTypeSoftware ItemType = "SOFTWARE"
	ItemTypePlatform ItemType = "PLATFORM"
	ItemTypeGame     ItemType = "GAME"
	ItemTypeBrand    ItemType = "BRAND"
)

type ItemCategory string

const (
	ItemCategoryUnknown       ItemCategory = ""
	ItemCategoryPerson        ItemCategory = "PERSON"
	ItemCategoryEntertainment ItemCategory = "ENTERTAINMENT"
	ItemCategoryInternet      ItemCategory = "INTERNET"
	ItemCatrgoryElectronic    ItemCategory = "ELECTRONIC"
	ItemCategoryTelecom       ItemCategory = "TELECOM"
	ItemCategoryGroup         ItemCategory = "GROUP"
	ItemCategoryTechnology    ItemCategory = "TECHNOLOGY"
	ItemCategorySoftware      ItemCategory = "SOFTWARE"
	ItemCategoryGame          ItemCategory = "GAME"
	ItemCategoryPolitical     ItemCategory = "POLITICAL"
	ItemCategoryMedia         ItemCategory = "MEDIA"
	ItemCategoryMixed         ItemCategory = "MIXED"
	ItemCategoryEducation     ItemCategory = "EDUCATION"
	ItemCategoryShopping      ItemCategory = "SHOPPING"
	ItemCategoryManufacture   ItemCategory = "MANUFACTURE"
	ItemCategoryAppliance     ItemCategory = "APPLIANCE"
	ItemCategoryFinance       ItemCategory = "FINANCE"
	ItemCategoryTravel        ItemCategory = "TRAVEL"
)

type ItemInvasion string

const (
	ItemInvasionUnknown      ItemInvasion = ""
	ItemInvasionManipulated  ItemInvasion = "MANIPULATED"
	ItemInvasionCollaborated ItemInvasion = "COLLABORATED"
	ItemInvasionFunded       ItemInvasion = "FUNDED"
	ItemInvasionSupported    ItemInvasion = "SUPPORTED"
)

// ================================
// Item
// ================================

type Item struct {
	Code        string             `yaml:"code"`
	ParentCode  string             `yaml:"parent_code"`
	Name        string             `yaml:"name"`
	NameAlias   string             `yaml:"name_alias"`
	NameOthers  []string           `yaml:"name_others"`
	Website     string             `yaml:"website"`
	Description string             `yaml:"description"`
	Type        ItemType           `yaml:"type"`
	Category    ItemCategory       `yaml:"category"`
	Owner       ItemOwner          `yaml:"owner"`
	Information []*ItemInformation `yaml:"information"`
	ModTime     time.Time
}

func (i *Item) SetModTime(t time.Time) {
	i.ModTime = t
}

type ItemInformation struct {
	Invasion    ItemInvasion `yaml:"invasion"`
	Year        string       `yaml:"year"`
	Description string       `yaml:"description"`
}

type CompiledItem struct {
	Code          string
	Name          string
	NameAlias     string
	NameOthers    []string
	Website       string
	Description   string
	TypeStr       string
	Type          ItemType
	CategoryStr   string
	Category      ItemCategory
	OwnerStr      string
	Owner         ItemOwner
	InvasionStr   string
	Invasion      ItemInvasion
	InvasionLevel int
	Summary       string
	PlainText     string
	Information   []*CompiledItemInfo
	ModUnix       int64

	Parents  []*CompiledItem `json:"-"`
	Relates  []*CompiledItem `json:"-"`
	Children []*CompiledItem `json:"-"`
}

type CompiledItemInfo struct {
	Year        string
	Description string
	Note        string
}

// ================================
// Map
// ================================

var (
	ItemCategoryStr = map[ItemCategory]string{
		ItemCategoryUnknown:       "未知",
		ItemCategoryPerson:        "人物",
		ItemCategoryEntertainment: "娛樂產業",
		ItemCategoryInternet:      "網路服務",
		ItemCatrgoryElectronic:    "電子業",
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
	}
	ItemCategories = []ItemCategory{
		ItemCategoryUnknown,
		ItemCategoryPerson,
		ItemCategoryEntertainment,
		ItemCategoryInternet,
		ItemCatrgoryElectronic,
		ItemCategoryTelecom,
		ItemCategoryGroup,
		ItemCategoryTechnology,
		ItemCategorySoftware,
		ItemCategoryGame,
		ItemCategoryPolitical,
		ItemCategoryMedia,
		ItemCategoryMixed,
		ItemCategoryEducation,
		ItemCategoryShopping,
		ItemCategoryManufacture,
		ItemCategoryAppliance,
		ItemCategoryFinance,
		ItemCategoryTravel,
	}
	ItemOwnerStr = map[ItemOwner]string{
		ItemOwnerUnknown:     "未知",
		ItemOwnerTaiwanese:   "台灣",
		ItemOwnerHongKongese: "香港",
		ItemOwnerChinese:     "中國",
		ItemOwnerForeign:     "國外",
	}
	ItemOwners = []ItemOwner{
		ItemOwnerUnknown,
		ItemOwnerTaiwanese,
		ItemOwnerHongKongese,
		ItemOwnerChinese,
		ItemOwnerForeign,
	}
	ItemTypeStr = map[ItemType]string{
		ItemTypeUnknown:  "",
		ItemTypeCompany:  "公司",
		ItemTypePerson:   "人物",
		ItemTypeGroup:    "組織",
		ItemTypeSoftware: "軟體",
		ItemTypePlatform: "平台",
		ItemTypeGame:     "遊戲",
		ItemTypeBrand:    "品牌",
	}
	ItemTypes = []ItemType{
		ItemTypeUnknown,
		ItemTypeCompany,
		ItemTypePerson,
		ItemTypeGroup,
		ItemTypeSoftware,
		ItemTypePlatform,
		ItemTypeGame,
		ItemTypeBrand,
	}
	ItemInvasionStr = map[ItemInvasion]string{
		ItemInvasionUnknown:      "未知",
		ItemInvasionManipulated:  "輿論手法",
		ItemInvasionCollaborated: "與侵台對象合作",
		ItemInvasionFunded:       "中國資金介入",
		ItemInvasionSupported:    "支持中國侵略",
	}
	ItemInvasions = []ItemInvasion{
		ItemInvasionUnknown,
		ItemInvasionManipulated,
		ItemInvasionCollaborated,
		ItemInvasionFunded,
		ItemInvasionSupported,
	}
	ItemInvasionLevel = map[ItemInvasion]int{
		ItemInvasionUnknown:      0,
		ItemInvasionManipulated:  1,
		ItemInvasionCollaborated: 2,
		ItemInvasionFunded:       3,
		ItemInvasionSupported:    4,
	}
)
