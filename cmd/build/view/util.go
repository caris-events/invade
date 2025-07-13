package view

import (
	"crypto/md5"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"github.com/caris-events/invade/cmd/build/config"
	"github.com/caris-events/invade/cmd/build/entity"
	"github.com/caris-events/invade/cmd/build/util"
	"github.com/russross/blackfriday/v2"
	"github.com/samber/lo"
	"github.com/tdewolff/minify"
	"github.com/tdewolff/minify/css"
	"github.com/tdewolff/minify/html"
)

var (
	minifier *minify.M
)

func minifyContent(contentTyp string, b []byte) ([]byte, error) {
	if minifier == nil {
		minifier = minify.New()
		minifier.AddFunc("text/css", css.Minify)
		minifier.AddFunc("text/html", html.Minify)
	}
	return minifier.Bytes(contentTyp, b)
}

func Checksum(src string) (string, error) {
	file, err := os.Open(src)
	if err != nil {
		if os.IsNotExist(err) {
			return "", nil
		} else {
			return "", fmt.Errorf("open: %w", err)
		}
	}
	defer file.Close()

	hash := md5.New()
	if _, err := io.Copy(hash, file); err != nil {
		return "", fmt.Errorf("copy: %w", err)
	}
	return fmt.Sprintf("%x", hash.Sum(nil)), nil
}

func ParseItemText(items []*entity.CompiledItem) func(v string) string {
	return func(v string) string {
		v = string(blackfriday.Run([]byte(v), blackfriday.WithNoExtensions()))

		// [[hololive]]
		v = util.ReplaceAllStringSubmatchFunc(util.RegExpBrackets, v, func(groups []string) string {
			item, ok := lo.Find(items, func(v *entity.CompiledItem) bool {
				return v.Code == groups[1]
			})
			if !ok {
				return fmt.Sprintf(`《%s》`, groups[1])
			}
			return fmt.Sprintf(`《<a class="ts-text is-link is-undecorated" href="%s/%s">%s</a>》`, config.BaseURL, item.Code, item.Name)
		})
		return v
	}
}

func ParseItemChildren() func(v string, item *entity.CompiledItem) string {
	return func(content string, item *entity.CompiledItem) string {
		if len(item.Children) == 0 {
			return content
		}
		output := "旗下有"
		for k, child := range item.Children {
			if k > 1 {
				break
			}
			output += fmt.Sprintf(`《<a class="ts-text is-link is-undecorated" href="%s/%s">%s</a>》、`, config.BaseURL, child.Code, child.Name)
		}
		output = strings.TrimSuffix(string(output), "、")

		if len(item.Children) > 2 {
			output += "等"
		}
		content = strings.TrimSuffix(content, "。</p>\n")
		content += "，" + output + "。</p>"
		return content
	}
}

func ParseVocabText() func(v string) string {
	return func(v string) string {
		v = string(blackfriday.Run([]byte(v)))

		// [[word]]
		v = util.ReplaceAllStringSubmatchFunc(util.RegExpBrackets, v, func(groups []string) string {
			return fmt.Sprintf(`<a class="單字-螢光標記-其他單字" href="%s/v/%s">%s</a>`, config.BaseURL, groups[1], groups[1])
		})
		// {{word}}
		v = util.ReplaceAllStringSubmatchFunc(util.RegExpBraces, v, func(groups []string) string {
			return fmt.Sprintf(`<span class="單字-螢光標記-重點">%s</span>`, groups[1])
		})
		return strings.TrimSpace(v)
	}
}

func ParseNewsText() func(v string) string {
	return func(v string) string {
		v = string(blackfriday.Run([]byte(v)))
		return v
	}
}

func FormatDate(unix int64) string {
	return time.Unix(unix, 0).Format("2006 年 01 月 02 日")
}

func FormatISO8601(unix int64) string {
	return time.Unix(unix, 0).Format(time.RFC3339)
}
