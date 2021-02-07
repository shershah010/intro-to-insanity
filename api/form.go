package handler

import (
	"fmt"
	"net/http"
	"encoding/json"
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

type Form struct {
	Level int
	Username string
	password string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var f Form
		err := json.NewDecoder(r.Body).Decode(&f)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
	    } else {
	    	fmt.Fprint(w, "SUCCESS")
	    }
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

