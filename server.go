package main

import (
	"net/http"
	"io"
)

type server struct {
	fs *filesystem
}

func (s *server) index() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain")
		io.WriteString(w, "Hello World!")
	}
}

func (s *server) setupRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/filesystem", s.index())
	mux.Handle("/", http.FileServer(http.Dir("./public")))
	return mux
}


