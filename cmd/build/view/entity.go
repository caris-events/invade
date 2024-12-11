package view

import (
	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
)

type PageData struct {
	BaseURL   string
	GitHubURL string
	Page      string
}

func NewPageData(page string) *PageData {
	return &PageData{
		BaseURL:   config.BaseURL,
		GitHubURL: config.GitHubURL,
		Page:      page,
	}
}

type ItemPage struct {
	*entity.CompiledItem
	*PageData
	ShownRelates  []*entity.CompiledItem
	HiddenRelates int
}

type ItemSearchPage struct {
	*PageData
}

type VocabPage struct {
	*entity.CompiledVocab
	*PageData
}

type VocabSearchPage struct {
	*PageData
}

type NewsPage struct {
	*entity.CompiledNews
	*PageData
	PreviousNews *entity.CompiledNews
	NextNews     *entity.CompiledNews
}

type NewsSearchPage struct {
	*PageData
	News []*entity.CompiledNews
}

type IndexPage struct {
	*PageData
	ItemCategoryStr  map[entity.ItemCategory]string
	VocabCategoryStr map[entity.VocabCategory]string
	LastUpdatedAt    int64
	LatestNews       []*entity.CompiledNews
	LatestItems      []*entity.CompiledItem
}

type AboutPage struct {
	*PageData
}
