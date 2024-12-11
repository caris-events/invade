package compiler

import (
	"fmt"
	"time"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/sabloger/sitemap-generator/smg"
)

func CompileSitemap(items []*entity.CompiledItem, vocabs []*entity.CompiledVocab, news []*entity.CompiledNews) error {
	now := time.Now()

	sitemap := smg.NewSitemap(true)
	sitemap.SetName("sitemap")
	sitemap.SetHostname(config.BaseURL)
	sitemap.SetOutputPath(config.PathDocs)
	sitemap.SetLastMod(&now)

	sitemap.Add(&smg.SitemapLoc{
		Loc: "index",
	})
	sitemap.Add(&smg.SitemapLoc{
		Loc: "about",
	})
	sitemap.Add(&smg.SitemapLoc{
		Loc: "items",
	})
	sitemap.Add(&smg.SitemapLoc{
		Loc: "vocabs",
	})
	sitemap.Add(&smg.SitemapLoc{
		Loc: "news",
	})

	for _, v := range items {
		lastMod := time.Unix(v.ModUnix, 0)
		sitemap.Add(&smg.SitemapLoc{
			Loc:     fmt.Sprintf("%s", v.Code),
			LastMod: &lastMod,
		})
	}
	for _, v := range vocabs {
		lastMod := time.Unix(v.ModUnix, 0)
		sitemap.Add(&smg.SitemapLoc{
			Loc:     fmt.Sprintf("v/%s", v.Word),
			LastMod: &lastMod,
		})
	}
	for _, v := range news {
		t, err := time.Parse("2006-01-02", v.Date)
		if err != nil {
			return fmt.Errorf("parse time: %w", err)
		}
		sitemap.Add(&smg.SitemapLoc{
			Loc:     fmt.Sprintf("n/%s", v.Title),
			LastMod: &t,
		})
	}
	_, err := sitemap.Save()
	if err != nil {
		return fmt.Errorf("save sitemap: %w", err)
	}
	return nil
}
