package main

import (
	"fmt"

	"github.com/caris-events/invade/cmd/build/compiler"
	"github.com/caris-events/invade/cmd/build/draw"
	"github.com/caris-events/invade/cmd/build/serialize"
	"github.com/caris-events/invade/cmd/build/view"
	"github.com/urfave/cli/v2"
)

func build(c *cli.Context) error {
	items, err := compiler.CompileItems()
	if err != nil {
		return fmt.Errorf("compile items: %w", err)
	}
	vocabs, err := compiler.CompileVocabs()
	if err != nil {
		return fmt.Errorf("compile vocabs: %w", err)
	}
	news, err := compiler.CompileNews()
	if err != nil {
		return fmt.Errorf("compile news: %w", err)
	}
	if err := compiler.CompileSitemap(items, vocabs, news); err != nil {
		return fmt.Errorf("compile sitemap: %w", err)
	}

	if err := serialize.SerializeStore(); err != nil {
		return fmt.Errorf("serialize store: %w", err)
	}
	if err := serialize.SerializeItems(items); err != nil {
		return fmt.Errorf("serialize items: %w", err)
	}
	if err := serialize.SerializeRandomItems(items); err != nil {
		return fmt.Errorf("serialize random items: %w", err)
	}
	if err := serialize.SerializeVocabs(vocabs); err != nil {
		return fmt.Errorf("serialize vocabs: %w", err)
	}
	if err := serialize.SerializeRandomVocabs(vocabs); err != nil {
		return fmt.Errorf("serialize random vocabs: %w", err)
	}
	if err := serialize.SerializeNews(news); err != nil {
		return fmt.Errorf("serialize news: %w", err)
	}

	if err := view.Prepare(items); err != nil {
		return fmt.Errorf("prepare view: %w", err)
	}
	if err := view.GenerateItems(items); err != nil {
		return fmt.Errorf("generate items: %w", err)
	}
	if err := view.GenerateVocabs(vocabs); err != nil {
		return fmt.Errorf("generate vocabs: %w", err)
	}
	if err := view.GenerateNews(news); err != nil {
		return fmt.Errorf("generate news: %w", err)
	}
	if err := view.GenerateIndex(news, items); err != nil {
		return fmt.Errorf("generate index: %w", err)
	}
	if err := view.GenerateNewsSearch(news); err != nil {
		return fmt.Errorf("generate news search: %w", err)
	}
	if err := view.GenerateItemSearch(); err != nil {
		return fmt.Errorf("generate item search: %w", err)
	}
	if err := view.GenerateVocabSearch(); err != nil {
		return fmt.Errorf("generate vocab search: %w", err)
	}
	if err := view.GenerateAbout(); err != nil {
		return fmt.Errorf("generate about: %w", err)
	}
	if err := view.Generate404(); err != nil {
		return fmt.Errorf("generate 404: %w", err)
	}
	if err := draw.DrawItemCovers(items); err != nil {
		return fmt.Errorf("draw item covers: %w", err)
	}
	if err := draw.DrawVocabCovers(vocabs); err != nil {
		return fmt.Errorf("draw vocab covers: %w", err)
	}
	return nil
}
