package main

import (
	"fmt"
	"os"
	"path/filepath"

	"gopkg.in/yaml.v2"
)

// ItemOwner represents the ownership type of an item
type ItemOwner string

const (
	ItemOwnerUnknown     ItemOwner = ""
	ItemOwnerTaiwanese   ItemOwner = "TAIWANESE"
	ItemOwnerHongKongese ItemOwner = "HONGKONGESE"
	ItemOwnerChinese     ItemOwner = "CHINESE"
	ItemOwnerForeign     ItemOwner = "FOREIGN"
)

// ItemType represents the type of an item
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

// ItemCategory represents the category of an item
type ItemCategory string

const (
	ItemCategoryUnknown       ItemCategory = ""
	ItemCategoryPerson        ItemCategory = "PERSON"
	ItemCategoryEntertainment ItemCategory = "ENTERTAINMENT"
	ItemCategoryInternet      ItemCategory = "INTERNET"
	ItemCategoryElectronic    ItemCategory = "ELECTRONIC"
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
	ItemCategoryFood          ItemCategory = "FOOD"
	ItemCategoryEnergy        ItemCategory = "ENERGY"
	ItemCategorySports        ItemCategory = "SPORTS"
	ItemCategoryVehicle       ItemCategory = "VEHICLE"
	ItemCategoryArt           ItemCategory = "ART"
	ItemCategoryConstruction  ItemCategory = "CONSTRUCTION"
)

// ItemInvasion represents the type of invasion
type ItemInvasion string

const (
	ItemInvasionUnknown      ItemInvasion = ""
	ItemInvasionManipulated  ItemInvasion = "MANIPULATED"
	ItemInvasionCollaborated ItemInvasion = "COLLABORATED"
	ItemInvasionFunded       ItemInvasion = "FUNDED"
	ItemInvasionSupported    ItemInvasion = "SUPPORTED"
)

// Item represents a single item in the database
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
}

// ItemInformation represents detailed information about an item
type ItemInformation struct {
	Invasion    ItemInvasion `yaml:"invasion"`
	Year        string       `yaml:"year"`
	Description string       `yaml:"description"`
}

// VocabCategory represents the category of a vocab
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

// VocabExplicit represents the explicit content level
type VocabExplicit string

const (
	VocabExplicitUnknown  VocabExplicit = ""
	VocabExplicitLanguage VocabExplicit = "LANGUAGE"
	VocabExplicitSexual   VocabExplicit = "SEXUAL"
)

// Vocab represents a vocabulary entry
type Vocab struct {
	Word        string          `yaml:"word"`
	Bopomofo    string          `yaml:"bopomofo"`
	Category    VocabCategory   `yaml:"category"`
	Explicit    VocabExplicit   `yaml:"explicit"`
	Description string          `yaml:"description"`
	Deprecation string          `yaml:"deprecation"`
	Notice      string          `yaml:"notice"`
	Examples    []*VocabExample `yaml:"examples"`
}

// VocabExample represents an example usage of a vocab
type VocabExample struct {
	Words       []string `yaml:"words"`
	Description string   `yaml:"description"`
	Correct     string   `yaml:"correct"`
	Incorrect   string   `yaml:"incorrect"`
}

// DataLoader handles loading data from YAML files
type DataLoader struct {
	databasePath string
	items        map[string]*Item
	vocabs       map[string]*Vocab
}

// NewDataLoader creates a new data loader
func NewDataLoader(databasePath string) *DataLoader {
	return &DataLoader{
		databasePath: databasePath,
		items:        make(map[string]*Item),
		vocabs:       make(map[string]*Vocab),
	}
}

// LoadItems loads all items from the database
func (dl *DataLoader) LoadItems() error {
	itemsPath := filepath.Join(dl.databasePath, "items")
	files, err := os.ReadDir(itemsPath)
	if err != nil {
		return fmt.Errorf("read items directory: %w", err)
	}

	for _, file := range files {
		if file.IsDir() || filepath.Ext(file.Name()) != ".yml" {
			continue
		}

		filePath := filepath.Join(itemsPath, file.Name())
		data, err := os.ReadFile(filePath)
		if err != nil {
			return fmt.Errorf("read file %s: %w", file.Name(), err)
		}

		var item Item
		if err := yaml.Unmarshal(data, &item); err != nil {
			return fmt.Errorf("unmarshal file %s: %w", file.Name(), err)
		}

		if item.Code != "" {
			dl.items[item.Code] = &item
		}
	}

	return nil
}

// LoadVocabs loads all vocabs from the database
func (dl *DataLoader) LoadVocabs() error {
	vocabsPath := filepath.Join(dl.databasePath, "vocabs")
	files, err := os.ReadDir(vocabsPath)
	if err != nil {
		return fmt.Errorf("read vocabs directory: %w", err)
	}

	for _, file := range files {
		if file.IsDir() || filepath.Ext(file.Name()) != ".yml" {
			continue
		}

		filePath := filepath.Join(vocabsPath, file.Name())
		data, err := os.ReadFile(filePath)
		if err != nil {
			return fmt.Errorf("read file %s: %w", file.Name(), err)
		}

		var vocab Vocab
		if err := yaml.Unmarshal(data, &vocab); err != nil {
			return fmt.Errorf("unmarshal file %s: %w", file.Name(), err)
		}

		if vocab.Word != "" {
			dl.vocabs[vocab.Word] = &vocab
		}
	}

	return nil
}

// GetItem retrieves an item by code
func (dl *DataLoader) GetItem(code string) (*Item, bool) {
	item, ok := dl.items[code]
	return item, ok
}

// GetVocab retrieves a vocab by word
func (dl *DataLoader) GetVocab(word string) (*Vocab, bool) {
	vocab, ok := dl.vocabs[word]
	return vocab, ok
}

// GetAllItems returns all items
func (dl *DataLoader) GetAllItems() map[string]*Item {
	return dl.items
}

// GetAllVocabs returns all vocabs
func (dl *DataLoader) GetAllVocabs() map[string]*Vocab {
	return dl.vocabs
}
