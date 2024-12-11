package draw

import (
	"fmt"
	"strings"
	"sync"

	"github.com/caris-events/gg"
	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
)

func DrawVocabCovers(vocabs []*entity.CompiledVocab) error {
	var wg sync.WaitGroup

	for _, vocab := range vocabs {
		wg.Add(1)
		go func(vocab *entity.CompiledVocab) {
			defer wg.Done()
			DrawVocabCover(vocab)
		}(vocab)
	}
	wg.Wait()
	return nil
}

func DrawVocabCover(vocab *entity.CompiledVocab) error {
	faces, err := newFontFaces()
	if err != nil {
		return fmt.Errorf("new font faces: %w", err)
	}
	canvas := gg.NewContextForImage(baseImage)

	// Title
	canvas.SetFontFace(faces.titleFace)
	canvas.SetRGB(0.2, 0.2, 0.2)
	canvas.DrawStringAnchored(vocab.Word, 90, 80, 0, 0.5)

	// Meta
	canvas.SetFontFace(faces.metaFace)
	canvas.SetRGB(0.5, 0.5, 0.5)
	canvas.DrawStringAnchored(fmt.Sprintf("通常是指：%s", vocab.CorrectStr), 90, 165, 0, 0)

	// URL
	canvas.SetFontFace(faces.urlFace)
	canvas.SetRGB(0.4, 0.4, 0.4)
	canvas.DrawStringAnchored(OmitText(config.BaseURL+"/v/"+vocab.Word, 38), 90, 510, 0, 0)

	// Description
	canvas.SetFontFace(faces.descFace)
	canvas.SetRGB(0.2, 0.2, 0.2)

	var desc string
	if vocab.Description != "" {
		desc = fmt.Sprintf("%s的意思是：%s誤用這個詞彙可能會傳達不正確的訊息。", vocab.Word, strings.TrimSuffix(vocab.Description, "\n"))
	} else {
		desc = fmt.Sprintf("誤用《%s》詞彙可能會傳達不正確的訊息。長期使用經過中國言論審查、中共思想而產生的侵略性詞彙，可能會在無形之中影響自己的思考方式。", vocab.Word)
	}

	canvas.DrawStringWrapped(OmitText(desc, 90), 90, 220, 0, 0, 700, 1.4, gg.AlignLeft)

	if err := canvas.SavePNG(fmt.Sprintf("%s/%s.png", config.PathDocsVocabCovers, util.Safe64(vocab.Word))); err != nil {
		return fmt.Errorf("save vocab cover: %w", err)
	}
	return nil
}
