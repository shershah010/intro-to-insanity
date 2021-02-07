package handler

import (
	"fmt"
	"net/http"
	"encoding/json"
)

var usernames = []string {
	"crow",
	"simple",
}

var passwords = []string {
	"forest",
	"cipher",
}

var hints = []string {
	"What do you see?",
	"Just break it.",
}

type Form struct {
	Level int
	User string
	Pass string
}

func Handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodPost {
		var f Form
		err := json.NewDecoder(r.Body).Decode(&f)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
	    } else {
	    	if (f.level >= len(usernames)) {
	    		fmt.Fprint(w, "Index Out of Bounds Exception")
	    	} else {
	    		true_user := usernames[f.level]
	    		true_pass := passwords[f.level]

	    		if (f.user == true_user && f.pass == true_pass) {
	    			fmt.Fprint(w, "SUCCESS")
	    		} else {
	    			fmt.Fprint(w, hints[f.level])
	    		}
	    	}
	    	
	    }
	} else {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
	}
}

