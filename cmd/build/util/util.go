package util

import (
	"encoding/base64"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"

	"gopkg.in/yaml.v2"
)

var (
	RegExpBrackets = regexp.MustCompile(` ?\[\[(.*?)\]\] ?`)
	RegExpBraces   = regexp.MustCompile(` ?\{\{(.*?)\}\} ?`)
)

// IFile is an interface for files.
type IFile interface {
	SetModTime(time.Time)
}

// LoadFiles loads files from a directory and unmarshals them into items.
func LoadFiles[T IFile](dir string, items []T) ([]T, error) {
	files, err := filepath.Glob(dir + "/*.yml")
	if err != nil {
		return nil, fmt.Errorf("glob items: %w", err)
	}
	for _, v := range files {
		fs, err := os.Stat(v)
		if err != nil {
			return nil, fmt.Errorf("stat: %w", err)
		}
		b, err := os.ReadFile(v)
		if err != nil {
			return nil, fmt.Errorf("read file: %w", err)
		}
		var item T
		if err := yaml.Unmarshal(b, &item); err != nil {
			return nil, fmt.Errorf("unmarshal item: %w (%s)", err, v)
		}
		item.SetModTime(fs.ModTime())
		items = append(items, item)
	}
	return items, nil
}

// Copy copies a file from src to dst.
func Copy(src string, dst string) error {
	data, err := os.ReadFile(src)
	if err != nil {
		return fmt.Errorf("read file: %w", err)
	}
	if err = os.WriteFile(dst, data, 0755); err != nil {
		return fmt.Errorf("write file: %w", err)
	}
	return nil
}

// ReplaceAllStringSubmatchFunc replaces all substrings in a string using a function.
func ReplaceAllStringSubmatchFunc(re *regexp.Regexp, str string, repl func([]string) string) string {
	result := ""
	lastIndex := 0
	for _, v := range re.FindAllSubmatchIndex([]byte(str), -1) {
		groups := []string{}
		for i := 0; i < len(v); i += 2 {
			groups = append(groups, str[v[i]:v[i+1]])
		}
		if len(groups) == 0 {
			result += str[lastIndex:v[0]] + ""
		} else {
			result += str[lastIndex:v[0]] + repl(groups)
		}

		lastIndex = v[1]
	}
	return result + str[lastIndex:]
}

func Safe64(s string) string {
	encoded := base64.StdEncoding.EncodeToString([]byte(s))
	return strings.ReplaceAll(encoded, "/", "")
}
