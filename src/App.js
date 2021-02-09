import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Scene } from './scene.jsx' 
import { Form } from './form/form.jsx';
import './App.css';



function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const [level, setLevel] = useState(0);

  async function submitForm(level, user, pass) {
    const data = {
      Level: level,
      User: user,
      Pass: pass
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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Scene level={level} />
        <Form level={level} onFormSubmit={submitForm} />
      </main>
    </ThemeProvider>
  );
}

export default App;

