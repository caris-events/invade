package serialize

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
)

func SerializeNews(news []*entity.CompiledNews) error {
	var encodes []*serializedNews
	for i, v := range news {
		encodes = append(encodes, &serializedNews{
			Date:    v.Date,
			Title:   v.Title,
			Summary: v.Summary,
			Time:    i + 1,
		})
	}
	b, err := json.Marshal(encodes)
	if err != nil {
		return fmt.Errorf("marshal encoded news: %w", err)
	}
	var (
		body = fmt.Sprintf(`var db_news = %s`, string(b))
	)
	if err := os.WriteFile(config.PathDocsScripts+"/db_news.js", []byte(body), 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}
