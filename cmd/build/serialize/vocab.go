package serialize

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/samber/lo"
)

// SerializeVocabs serializes the vocabs.
func SerializeVocabs(vocabs []*entity.CompiledVocab) error {
	var serializes []*vocab
	for i, v := range vocabs {
		var isDeprecated int
		if v.Deprecation != "" {
			isDeprecated = 1
		}
		serializes = append(serializes, &vocab{
			Word:          v.Word,
			CategoryIndex: lo.IndexOf(entity.VocabCategories, v.Category),
			CorrectStr:    v.CorrectStr,
			Time:          i + 1,
			Explicit:      lo.IndexOf(entity.VocabExplicits, v.Explicit),
			IsDeprecated:  isDeprecated,
		})
	}
	b, err := json.Marshal(serializes)
	if err != nil {
		return fmt.Errorf("marshal encoded items: %w", err)
	}
	var (
		body = fmt.Sprintf(`var db_vocabs = %s`, string(b))
	)
	if err := os.WriteFile(config.PathDocsScripts+"/db_vocabs.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}

// SerializeRandomVocabs serializes the random vocabs.
func SerializeRandomVocabs(vocabs []*entity.CompiledVocab) error {
	randoms := lo.Map(lo.Samples(lo.Filter(vocabs, func(v *entity.CompiledVocab, _ int) bool {
		return v.Explicit == entity.VocabExplicitUnknown && v.Deprecation == ""
	}), 100), func(v *entity.CompiledVocab, _ int) *randomVocab {
		return &randomVocab{
			Word:       v.Word,
			CorrectStr: v.CorrectStr,
		}
	})

	b, err := json.Marshal(randoms)
	if err != nil {
		return fmt.Errorf("marshal encoded random vocabs: %w", err)
	}
	var (
		body = fmt.Sprintf(`var db_random_vocabs = %s`, string(b))
	)
	if err := os.WriteFile(config.PathDocsScripts+"/db_random_vocabs.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}
