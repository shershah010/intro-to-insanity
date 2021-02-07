import React from 'react';
import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate(level, user, pass) {
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
      console.log(message);

    }
    getDate(0, "crow", "forest");
  }, []);
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        was bootstrapped with{' '}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{' '}
        and contains three directories, <code>/public</code> for static assets,{' '}
        <code>/src</code> for components and content, and <code>/api</code>{' '}
        which contains a serverless <a href="https://golang.org/">Go</a>{' '}
        function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
