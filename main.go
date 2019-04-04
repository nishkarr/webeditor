package main

import (
	"fmt"
	"net/http"
)

func main() {
	defer errorHandler()
	config := ParseCLIArgs()
	config.validate()

	fs := fileSystemFromPath(config.rootPath)

	server := &server{ fs: fs }
	mux := server.setupRoutes()

	fmt.Println("Starting server")
	http.ListenAndServe(":8080", mux)
}

func errorHandler() {
	if err := recover(); err != nil {
		fmt.Println("Oops!", err)
	}
}