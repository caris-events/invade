package serialize

import (
	"encoding/json"

	"github.com/caris-events/invade/cmd/build/entity"
)

// ================================
// Item
// ================================

type item struct {
	Code          int
	ParentCode    int
	CategoryIndex int
	Name          string
	NameAlias     string
	OwnerIndex    int
	TypeIndex     int
	InvasionIndex int
	Time          int
}

func (i *item) MarshalJSON() ([]byte, error) {
	return json.Marshal([]any{i.Code, i.ParentCode, i.CategoryIndex, i.Name, i.NameAlias, i.OwnerIndex, i.TypeIndex, i.InvasionIndex, i.Time})
}

type randomItem struct {
	Code          string
	Name          string
	NameAlias     string
	OwnerIndex    int
	TypeIndex     int
	InvasionIndex int
}

func (i *randomItem) MarshalJSON() ([]byte, error) {
	return json.Marshal([]any{i.Code, i.Name, i.NameAlias, i.OwnerIndex, i.TypeIndex, i.InvasionIndex})
}

// ================================
// Vocab
// ================================

type vocab struct {
	Word          string
	CategoryIndex int
	CorrectStr    string
	Time          int
	Explicit      int
	IsDeprecated  int
}

func (v *vocab) MarshalJSON() ([]byte, error) {
	return json.Marshal([]any{v.Word, v.CategoryIndex, v.CorrectStr, v.Time, v.Explicit, v.IsDeprecated})
}

type randomVocab struct {
	Word       string
	CorrectStr string
}

func (v *randomVocab) MarshalJSON() ([]byte, error) {
	return json.Marshal([]any{v.Word, v.CorrectStr})
}

// ================================
// News
// ================================

type serializedNews struct {
	Date    string
	Title   string
	Summary string
	Time    int
}

func (n *serializedNews) MarshalJSON() ([]byte, error) {
	return json.Marshal([]any{n.Date, n.Title, n.Summary, n.Time})
}

// ================================
// Store
// ================================

type Store struct {
	ItemCategoryStr   map[entity.ItemCategory]string  `json:"item_category_str"`
	ItemCategories    []entity.ItemCategory           `json:"item_categories"`
	ItemOwnerStr      map[entity.ItemOwner]string     `json:"item_owner_str"`
	ItemOwners        []entity.ItemOwner              `json:"item_owners"`
	ItemTypeStr       map[entity.ItemType]string      `json:"item_type_str"`
	ItemTypes         []entity.ItemType               `json:"item_types"`
	ItemInvasionStr   map[entity.ItemInvasion]string  `json:"item_invasion_str"`
	ItemInvasions     []entity.ItemInvasion           `json:"item_invasions"`
	ItemInvasionLevel map[entity.ItemInvasion]int     `json:"item_invasion_level"`
	VocabCategoryStr  map[entity.VocabCategory]string `json:"vocab_category_str"`
	VocabCategories   []entity.VocabCategory          `json:"vocab_categories"`
	VocabExplicits    []entity.VocabExplicit          `json:"vocab_explicits"`
}
