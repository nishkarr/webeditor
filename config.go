package main

import (
	"os"
	"path/filepath"
	"errors"
)

type config struct {
	rootPath string
}

func ParseCLIArgs() *config {
	var (
		c config
		path string
		err error
	)
	if len(os.Args) > 1 {
		path = os.Args[1]
	} else {
		path = "."
	}

	c.rootPath, err = filepath.Abs(path)
	if err != nil {
		panic(err)
	}
	return &c
}

func (c *config) validate() {
	finfo, err := os.Stat(c.rootPath)
	if err != nil {
		panic(err)
	}
	if !finfo.IsDir() {
		panic(errors.New("Path should be a directory"))
	}
}