package entity

import (
	"fmt"
	"time"
)

type News struct {
	Date    string `yaml:"date"`
	Title   string `yaml:"title"`
	Summary string `yaml:"summary"`
	Content string `yaml:"content"`
	ModTime time.Time
}

func (n *News) SetModTime(t time.Time) {
	n.ModTime = t
}

type CompiledNews struct {
	Date    string
	Title   string
	Summary string
	Content string
}

func (c *CompiledNews) ReadableDate() string {
	t, err := time.Parse("2006-01-02", c.Date)
	if err != nil {
		return fmt.Sprintf("parse time: %v", err)
	}
	return t.Format("2006 年 01 月 02 日")
}

func (c *CompiledNews) ISO8601() string {
	t, err := time.Parse("2006-01-02", c.Date)
	if err != nil {
		return fmt.Sprintf("parse time: %v", err)
	}
	return t.Format(time.RFC3339)
}
