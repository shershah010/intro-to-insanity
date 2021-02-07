package handler

import (
	"fmt"
	"net/http"

	"github.com/graphql-go/graphql"
)

user_pass = make(map[string]string)
user_pass["crow"] = "forest"
user_pass["simple"] = "cipher"

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
		// fmt.Fprint(w, hints[i])
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}