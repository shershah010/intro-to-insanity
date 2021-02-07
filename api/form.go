package handler

import (
	"fmt"
	"net/http"
	"github.com/graphql-go/graphql"
)

usernames = []string {
	"crow",
	"simple"
}

passwords = []string {
	"forest",
	"cipher"
}

hints = []string {
	"What do you see?",
	"Just break it."
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		fmt.Fprint(w, "SUCCESS")
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}