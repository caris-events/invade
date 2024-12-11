package view

import (
	"bytes"
	"cmp"
	"fmt"
	"net/url"
	"os"
	"path/filepath"
	"slices"
	"text/template"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
)

var (
	tplItem        *template.Template
	tplItemSearch  *template.Template
	tplNews        *template.Template
	tplNewsSearch  *template.Template
	tplVocab       *template.Template
	tplVocabSearch *template.Template
	tplIndex       *template.Template
	tplAbout       *template.Template
	tpl404         *template.Template
)

func Prepare(items []*entity.CompiledItem) error {
	if err := os.CopyFS(config.PathDocsAssets, os.DirFS(config.PathAssets)); err != nil {
		return fmt.Errorf("copy path assets: %w", err)
	}
	if err := os.CopyFS(config.PathDocsItemLogos, os.DirFS(config.PathLogos)); err != nil {
		return fmt.Errorf("copy path logos: %w", err)
	}

	fn := template.FuncMap{
		"item_content":  ParseItemText(items),
		"item_children": ParseItemChildren(),
		"vocab_content": ParseVocabText(),
		"news_content":  ParseNewsText(),
		"safe64":        util.Safe64,
		"escape_url":    url.PathEscape,
		"date":          FormatDate,
		"iso8601":       FormatISO8601,
	}

	var err error
	tplItem, err = PrepareTemplate("single_item.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplItemSearch, err = PrepareTemplate("search_items.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplNews, err = PrepareTemplate("single_news.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplNewsSearch, err = PrepareTemplate("search_news.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplVocab, err = PrepareTemplate("single_vocab.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplVocabSearch, err = PrepareTemplate("search_vocabs.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplIndex, err = PrepareTemplate("index.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tplAbout, err = PrepareTemplate("about.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	tpl404, err = PrepareTemplate("404.html", fn)
	if err != nil {
		return fmt.Errorf("parse template: %w", err)
	}
	return nil
}

func GenerateIndex(news []*entity.CompiledNews, items []*entity.CompiledItem) error {
	lastUpdatedAt := slices.MaxFunc(items, func(a, b *entity.CompiledItem) int {
		return cmp.Compare(a.ModUnix, b.ModUnix)
	}).ModUnix
	if len(items) > 10 {
		items = items[:10]
	}
	if len(news) > 4 {
		news = news[:4]
	}
	var (
		dir = config.PathDocs + "/index"
	)
	if err := BuildPage(dir, tplIndex, &IndexPage{
		PageData:         NewPageData("index"),
		ItemCategoryStr:  entity.ItemCategoryStr,
		VocabCategoryStr: entity.VocabCategoryStr,
		LastUpdatedAt:    lastUpdatedAt,
		LatestNews:       news,
		LatestItems:      items,
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func Generate404() error {
	var (
		dir = config.PathDocs + "/404"
	)
	if err := BuildPage(dir, tpl404, &AboutPage{
		PageData: NewPageData("404"),
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func GenerateAbout() error {
	var (
		dir = config.PathDocs + "/about"
	)
	if err := BuildPage(dir, tplAbout, &AboutPage{
		PageData: NewPageData("about"),
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func GenerateItems(items []*entity.CompiledItem) error {
	for _, v := range items {
		var (
			dir = config.PathDocs + "/" + v.Code
		)
		if err := BuildPage(dir, tplItem, &ItemPage{
			CompiledItem:  v,
			PageData:      NewPageData("single_item"),
			ShownRelates:  v.Relates[:min(len(v.Relates), 5)],
			HiddenRelates: max(len(v.Relates)-5, 0),
		}); err != nil {
			return fmt.Errorf("build page: %w", err)
		}
	}
	return nil
}

func GenerateNews(news []*entity.CompiledNews) error {
	for i, v := range news {
		var (
			dir  = config.PathDocs + "/n/" + v.Title
			prev *entity.CompiledNews
			next *entity.CompiledNews
		)
		if i > 0 {
			next = news[i-1]
		}
		if i < len(news)-1 {
			prev = news[i+1]
		}
		if err := BuildPage(dir, tplNews, &NewsPage{
			CompiledNews: v,
			PageData:     NewPageData("single_news"),
			PreviousNews: prev,
			NextNews:     next,
		}); err != nil {
			return fmt.Errorf("build page: %w", err)
		}
	}
	return nil
}

func GenerateVocabs(vocabs []*entity.CompiledVocab) error {
	for _, v := range vocabs {
		var (
			dir = config.PathDocs + "/v/" + v.Word
		)
		if err := BuildPage(dir, tplVocab, &VocabPage{
			CompiledVocab: v,
			PageData:      NewPageData("single_vocab"),
		}); err != nil {
			return fmt.Errorf("build page: %w", err)
		}
	}
	return nil
}

func GenerateNewsSearch(news []*entity.CompiledNews) error {
	var (
		dir = config.PathDocs + "/news"
	)

	if err := BuildPage(dir, tplNewsSearch, &NewsSearchPage{
		News:     news,
		PageData: NewPageData("search_news"),
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func GenerateItemSearch() error {
	var (
		dir = config.PathDocs + "/items"
	)
	if err := BuildPage(dir, tplItemSearch, &ItemSearchPage{
		PageData: NewPageData("search_items"),
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func GenerateVocabSearch() error {
	var (
		dir = config.PathDocs + "/vocabs"
	)
	if err := BuildPage(dir, tplVocabSearch, &VocabSearchPage{
		PageData: NewPageData("search_vocabs"),
	}); err != nil {
		return fmt.Errorf("build page: %w", err)
	}
	return nil
}

func PrepareTemplate(name string, fn template.FuncMap) (*template.Template, error) {
	tpl, err := template.New(name).
		Funcs(fn).
		ParseFiles(
			config.PathTpl+"/the_navbar.html",
			config.PathTpl+"/the_searchbar.html",
			config.PathTpl+"/the_disclaimer.html",
			config.PathTpl+"/random_items.html",
			config.PathTpl+"/random_vocabs.html",
			config.PathTpl+"/the_footer.html",
			config.PathTpl+"/the_drawer.html",
			config.PathTpl+"/"+name,
		)
	if err != nil {
		return nil, fmt.Errorf("parse template: %w", err)
	}
	return tpl, nil
}

func BuildPage(dir string, tpl *template.Template, data any) error {
	if err := os.MkdirAll(filepath.Dir(dir), 0755); err != nil {
		return fmt.Errorf("mkdir all: %w", err)
	}
	file, err := os.Create(dir + ".html")
	if err != nil {
		return fmt.Errorf("create file: %w", err)
	}
	defer file.Close()
	var buf bytes.Buffer
	if err = tpl.Execute(&buf, data); err != nil {
		return fmt.Errorf("execute template: %w", err)
	}
	b, err := minifyContent("text/html", buf.Bytes())
	if err != nil {
		return fmt.Errorf("minify: %w", err)
	}
	if _, err := file.Write(b); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}
