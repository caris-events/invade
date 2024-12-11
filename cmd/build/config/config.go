package config

import "os"

var (
	BaseURL   = envDefault("BAKAINVADE_BASEURL", "https://invade.tw")
	GitHubURL = "https://github.com/caris-events/invade"

	PathDocs            = os.Getenv("BAKAINVADE_DIR") + "/docs"
	PathDocsAssets      = os.Getenv("BAKAINVADE_DIR") + "/docs/assets"
	PathDocsScripts     = os.Getenv("BAKAINVADE_DIR") + "/docs/assets/scripts"
	PathDocsVocabCovers = os.Getenv("BAKAINVADE_DIR") + "/docs/assets/vocab_covers"
	PathDocsItemCovers  = os.Getenv("BAKAINVADE_DIR") + "/docs/assets/item_covers"
	PathDocsItemLogos   = os.Getenv("BAKAINVADE_DIR") + "/docs/assets/item_logos"
	PathAssets          = os.Getenv("BAKAINVADE_DIR") + "/cmd/build/view/template/assets"
	PathLogos           = os.Getenv("BAKAINVADE_DIR") + "/database/items_logos"
	PathItems           = os.Getenv("BAKAINVADE_DIR") + "/database/items"
	PathNews            = os.Getenv("BAKAINVADE_DIR") + "/database/news"
	PathVocabs          = os.Getenv("BAKAINVADE_DIR") + "/database/vocabs"
	PathTpl             = os.Getenv("BAKAINVADE_DIR") + "/cmd/build/view/template"
	PathDrawAssets      = os.Getenv("BAKAINVADE_DIR") + "/cmd/build/draw/assets"
	PathDrawCover       = os.Getenv("BAKAINVADE_DIR") + "/cmd/build/draw/assets/cover.png"
)

func envDefault(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
