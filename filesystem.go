package main 

type node struct {
	name string
	nodetype string
	children *[]node
}

type filesystem struct {
	rootPath string
	nodes []*node
}

func fileSystemFromPath(path string) *filesystem {
	fs := filesystem{ rootPath: path, nodes: make([]*node, 20) }
	return &fs
}