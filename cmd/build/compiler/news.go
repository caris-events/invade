package compiler

import (
	"fmt"
	"sort"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
)

func CompileNews() ([]*entity.CompiledNews, error) {
	news, err := util.LoadFiles(config.PathNews, []*entity.News{})
	if err != nil {
		return nil, fmt.Errorf("load files: %w", err)
	}
	var (
		compiles = make([]*entity.CompiledNews, 0)
	)
	for _, n := range news {
		compiles = append(compiles, &entity.CompiledNews{
			Date:    n.Date,
			Title:   n.Title,
			Summary: n.Summary,
			Content: n.Content,
		})
	}
	sort.SliceStable(compiles, func(i, j int) bool {
		return compiles[i].Date > compiles[j].Date
	})
	return compiles, nil
}
