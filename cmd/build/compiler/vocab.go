package compiler

import (
	"fmt"
	"log"
	"sort"
	"strings"
	"unicode"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
	"github.com/samber/lo"
)

func CompileVocabs() ([]*entity.CompiledVocab, error) {
	vocabs, err := util.LoadFiles(config.PathVocabs, []*entity.Vocab{})
	if err != nil {
		return nil, fmt.Errorf("load files: %w", err)
	}
	var (
		compiles = make([]*entity.CompiledVocab, 0)
	)
	for _, v := range vocabs {
		compiles = append(compiles, &entity.CompiledVocab{
			Word:        v.Word,
			Breakdowns:  breakdown(v.Word, v.Bopomofo),
			Notice:      v.Notice,
			CategoryStr: entity.VocabCategoryStr[v.Category],
			Category:    v.Category,
			Explicit:    v.Explicit,
			CorrectStr: strings.Join(lo.Map(v.Examples, func(example *entity.VocabExample, _ int) string {
				return example.Words[0]
			}), "、"),
			Description: v.Description,
			Deprecation: v.Deprecation,
			Examples:    v.Examples,
			ModUnix:     v.ModTime.Unix(),
		})
	}
	sort.SliceStable(compiles, func(i, j int) bool {
		return compiles[i].ModUnix > compiles[j].ModUnix
	})
	return compiles, nil
}

func breakdown(word string, bopomofo string) (breakdowns []*entity.VocabBreakdown) {
	var (
		bopomofoSet   = strings.Split(bopomofo, " ")
		bopomofoIndex = 0
		foreign       strings.Builder
	)
	for _, char := range word {
		if !unicode.Is(unicode.Han, char) {
			foreign.WriteRune(char)
			continue
		}
		if foreign.Len() > 0 {
			breakdowns = append(breakdowns, &entity.VocabBreakdown{
				Character: foreign.String(),
			})
			foreign.Reset()
		}
		if bopomofoIndex >= len(bopomofoSet) {
			log.Fatalf("bopomofo index out of range: %s", word)
		}
		breakdown := &entity.VocabBreakdown{
			Character: string(char),
			Bopomofo:  strings.Split(bopomofoSet[bopomofoIndex], ""),
		}
		for i, b := range breakdown.Bopomofo {
			if b == "ˇ" || b == "ˋ" || b == "ˊ" || b == "˙" {
				breakdown.Accent = b
				breakdown.Bopomofo = append(breakdown.Bopomofo[:i], breakdown.Bopomofo[i+1:]...)
			}
		}
		bopomofoIndex++
		breakdowns = append(breakdowns, breakdown)
	}
	if foreign.Len() > 0 {
		breakdowns = append(breakdowns, &entity.VocabBreakdown{
			Character: foreign.String(),
		})
	}
	return
}
