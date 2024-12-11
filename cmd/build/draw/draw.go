package draw

import (
	"fmt"
	"image"
	"log"
	"os"

	"github.com/caris-events/gg"
	"github.com/caris-events/invade/cmd/build/config"
	"golang.org/x/image/font"
	"golang.org/x/image/font/opentype"
	"golang.org/x/image/font/sfnt"
)

var (
	boldFont   *sfnt.Font
	mediumFont *sfnt.Font
	baseImage  image.Image
)

func init() {
	var err error
	boldFont, err = loadFont(config.PathDrawAssets + "/NotoSansCJKtc-Bold.otf")
	if err != nil {
		log.Printf("load bold font: %v", err)
	}
	mediumFont, err = loadFont(config.PathDrawAssets + "/NotoSansCJKtc-Medium.otf")
	if err != nil {
		log.Printf("load medium font: %v", err)
	}
	baseImage, err = gg.LoadPNG(config.PathDrawCover)
	if err != nil {
		log.Printf("load base image: %v", err)
	}
	if err := os.MkdirAll(config.PathDocsVocabCovers, 0755); err != nil {
		log.Printf("create vocab covers directory: %v", err)
	}
	if err := os.MkdirAll(config.PathDocsItemCovers, 0755); err != nil {
		log.Printf("create item covers directory: %v", err)
	}
}

func loadFont(v string) (*sfnt.Font, error) {
	file, err := os.ReadFile(v)
	if err != nil {
		return nil, err
	}
	font, err := opentype.Parse(file)
	if err != nil {
		return nil, err
	}
	return font, nil
}

func loadFontFace(font *sfnt.Font, size float64) (font.Face, error) {
	face, err := opentype.NewFace(font, &opentype.FaceOptions{
		Size: size,
		DPI:  300,
	})
	if err != nil {
		return nil, err
	}
	return face, nil
}

type fontFaces struct {
	titleFace font.Face
	descFace  font.Face
	metaFace  font.Face
	urlFace   font.Face
}

func newFontFaces() (*fontFaces, error) {
	titleFace, err := loadFontFace(boldFont, 10.5)
	if err != nil {
		return nil, fmt.Errorf("load title face: %w", err)
	}
	descFace, err := loadFontFace(mediumFont, 7)
	if err != nil {
		return nil, fmt.Errorf("load desc face: %w", err)
	}
	metaFace, err := loadFontFace(mediumFont, 6.3)
	if err != nil {
		return nil, fmt.Errorf("load meta face: %w", err)
	}
	urlFace, err := loadFontFace(mediumFont, 6)
	if err != nil {
		return nil, fmt.Errorf("load url face: %w", err)
	}
	return &fontFaces{
		titleFace: titleFace,
		descFace:  descFace,
		metaFace:  metaFace,
		urlFace:   urlFace,
	}, nil
}

func OmitText(text string, length int) string {
	var runeCount float64
	var result []rune

	for _, r := range text {
		if r <= 127 { // ASCII characters
			// if r >= 'A' && r <= 'Z' { // Uppercase letters
			// 	runeCount += 0.65
			// } else {
			// 	runeCount += 0.6
			// }
			runeCount += 0.6
		} else {
			runeCount += 1
		}

		if runeCount > float64(length) {
			result = append(result, '…')
			break
		}

		result = append(result, r)
	}

	return string(result)
}
