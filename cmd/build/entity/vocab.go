package entity

import (
	"strings"
	"time"

	"github.com/samber/lo"
)

type VocabCategory string

const (
	VocabCategoryUnknown    VocabCategory = ""
	VocabCategorySwear      VocabCategory = "SWEAR"
	VocabCategoryGame       VocabCategory = "GAME"
	VocabCategoryTechnology VocabCategory = "TECHNOLOGY"
	VocabCategoryAnimal     VocabCategory = "ANIMAL"
	VocabCategoryPronoun    VocabCategory = "PRONOUN"
	VocabCategoryFood       VocabCategory = "FOOD"
	VocabCategoryPlace      VocabCategory = "PLACE"
	VocabCategoryInternet   VocabCategory = "INTERNET"
	VocabCategoryWeapon     VocabCategory = "WEAPON"
	VocabCategoryHardware   VocabCategory = "HARDWARE"
	VocabCategoryMedia      VocabCategory = "MEDIA"
	VocabCategoryFinance    VocabCategory = "FINANCE"
	VocabCategorySlang      VocabCategory = "SLANG"
	VocabCategoryVerb       VocabCategory = "VERB"
	VocabCategoryNoun       VocabCategory = "NOUN"
	VocabCategoryAdjective  VocabCategory = "ADJECTIVE"
	VocabCategoryAdverb     VocabCategory = "ADVERB"
	VocabCategoryVehicle    VocabCategory = "VEHICLE"
	VocabCategoryClothing   VocabCategory = "CLOTHING"
)

type VocabExplicit string

const (
	VocabExplicitUnknown  VocabExplicit = ""
	VocabExplicitLanguage VocabExplicit = "LANGUAGE"
	VocabExplicitSexual   VocabExplicit = "SEXUAL"
)

// ================================
// Vocab
// ================================

type Vocab struct {
	Word         string             `yaml:"word"`
	Bopomofo     string             `yaml:"bopomofo"`
	Category     VocabCategory      `yaml:"category"`
	Explicit     VocabExplicit      `yaml:"explicit"`
	Description  string             `yaml:"description"`
	Deprecation  string             `yaml:"deprecation"`
	Notice       string             `yaml:"notice"`
	Examples     []*VocabExample    `yaml:"examples"`
	MatchOptions *VocabMatchOptions `yaml:"matchOptions"`
	ModTime      time.Time
}

func (v *Vocab) SetModTime(t time.Time) {
	v.ModTime = t
}

type VocabExample struct {
	Words       []string `yaml:"words"`
	Description string   `yaml:"description"`
	Correct     string   `yaml:"correct"`
	Incorrect   string   `yaml:"incorrect"`
}

type VocabMatchOptions struct {
	MatchMode   string   `yaml:"matchMode" json:"matchMode,omitempty"`
	SkipPhrases []string `yaml:"skipPhrases" json:"skipPhrases,omitempty"`
}

func (v *VocabExample) WordsStr() string {
	return strings.Join(lo.Map(v.Words, func(word string, _ int) string {
		return word
	}), "、")
}

type CompiledVocab struct {
	Word        string
	Breakdowns  []*VocabBreakdown
	Notice      string
	CategoryStr string
	Explicit    VocabExplicit
	Category    VocabCategory
	CorrectStr  string
	Description string
	Deprecation string
	Examples    []*VocabExample
	ModUnix     int64
}

type VocabBreakdown struct {
	Character string
	Bopomofo  []string
	Accent    string
}

// ================================
// Map
// ================================

var (
	VocabCategoryStr = map[VocabCategory]string{
		VocabCategoryUnknown:    "未知",
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
	VocabCategories = []VocabCategory{
		VocabCategoryUnknown,
		VocabCategorySwear,
		VocabCategoryGame,
		VocabCategoryTechnology,
		VocabCategoryAnimal,
		VocabCategoryPronoun,
		VocabCategoryFood,
		VocabCategoryPlace,
		VocabCategoryInternet,
		VocabCategoryWeapon,
		VocabCategoryHardware,
		VocabCategoryMedia,
		VocabCategoryFinance,
		VocabCategorySlang,
		VocabCategoryVerb,
		VocabCategoryNoun,
		VocabCategoryAdjective,
		VocabCategoryAdverb,
		VocabCategoryVehicle,
		VocabCategoryClothing,
	}
	VocabExplicitStr = map[VocabExplicit]string{
		VocabExplicitUnknown:  "未知",
		VocabExplicitLanguage: "粗暴語言",
		VocabExplicitSexual:   "性相關",
	}
	VocabExplicits = []VocabExplicit{
		VocabExplicitUnknown,
		VocabExplicitLanguage,
		VocabExplicitSexual,
	}
)
