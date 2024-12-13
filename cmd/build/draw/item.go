package draw

import (
	"fmt"
	"image"
	"log"
	"os"
	"strings"
	"sync"

	"github.com/caris-events/gg"
	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"golang.org/x/image/draw"
)

func DrawItemCovers(items []*entity.CompiledItem) error {
	var wg sync.WaitGroup

	if err := os.MkdirAll(config.PathDocsItemCovers, 0755); err != nil {
		return fmt.Errorf("make item covers dir: %w", err)
	}

	for _, item := range items {
		wg.Add(1)
		go func(item *entity.CompiledItem) {
			defer wg.Done()
			if err := DrawItemCover(item); err != nil {
				log.Fatalf("draw item cover: %v", err)
			}
		}(item)
	}
	wg.Wait()
	return nil
}

func DrawItemCover(item *entity.CompiledItem) error {
	faces, err := newFontFaces()
	if err != nil {
		return fmt.Errorf("new font faces: %w", err)
	}
	canvas := gg.NewContextForImage(baseImage)

	// Title
	canvas.SetFontFace(faces.titleFace)
	canvas.SetRGB(0.2, 0.2, 0.2)
	canvas.DrawStringAnchored(OmitText(item.Name, 15), 90, 80, 0, 0.5)

	// Meta
	canvas.SetFontFace(faces.metaFace)
	canvas.SetRGB(0.5, 0.5, 0.5)

	meta := []string{}
	if item.NameAlias != "" {
		meta = append(meta, OmitText(item.NameAlias, 23))
	}
	meta = append(meta, item.OwnerStr+item.TypeStr)
	canvas.DrawStringAnchored(strings.Join(meta, "．"), 90, 165, 0, 0)

	// Logo
	logo, err := gg.LoadImage(config.PathLogos + "/" + item.Code + ".jpg")
	if err != nil {
		return fmt.Errorf("load logo: %w", err)
	}

	// Scaling Logo
	origW := logo.Bounds().Dx()
	origH := logo.Bounds().Dy()
	aspect := float64(origW) / float64(origH)
	w := 180
	h := int(float64(w) / aspect)

	logoScaled := image.NewRGBA(image.Rect(0, 0, w, h))
	draw.BiLinear.Scale(logoScaled, logoScaled.Rect, logo, logo.Bounds(), draw.Over, nil)
	canvas.DrawImageAnchored(logoScaled, 1000, 125, 0.5, 0.5)

	// URL
	canvas.SetFontFace(faces.urlFace)
	canvas.SetRGB(0.4, 0.4, 0.4)
	canvas.DrawStringAnchored(OmitText(config.BaseURL+"/"+item.Code, 38), 90, 510, 0, 0)

	// Description
	canvas.SetFontFace(faces.descFace)
	canvas.SetRGB(0.2, 0.2, 0.2)
	canvas.DrawStringWrapped(OmitText(item.Summary, 90), 90, 220, 0, 0, 700, 1.4, gg.AlignLeft)

	if err := canvas.SavePNG(fmt.Sprintf("%s/%s.png", config.PathDocsItemCovers, item.Code)); err != nil {
		return fmt.Errorf("save item cover: %w", err)
	}
	return nil
}
