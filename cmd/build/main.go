package main

import (
	"log"
	"os"

	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:  "baka-invade",
		Usage: "only baka invades the others",
		Commands: []*cli.Command{
			{
				Name:   "build",
				Usage:  "build the pages and covers",
				Action: build,
			},
		},
	}
	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}
