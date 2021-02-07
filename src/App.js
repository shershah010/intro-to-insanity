import React, { useState } from 'react';

import { Scene } from './scene.jsx' 
import { Form } from './form.jsx';
import './App.css';



function App() {
  const [level, setLevel] = useState(0);

  async function submitForm(level, user, pass) {
    const data = {
      level: level,
      user: user,
      pass: pass
    };

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    const res = await fetch('/api/form', requestOptions);
    const message = await res.text();

    if (message === 'SUCCESS') {
      setLevel(level + 1);
    } else {
      alert(message);
    }
  }

  return (
    <main>
      <p>{level}</p>
      <Scene level={level} />
      <Form level={level} onFormSubmit={submitForm} />
    </main>
  );
}

export default App;

