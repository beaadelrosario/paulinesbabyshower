import React from 'react';
import './App.css';
import BABYMANSFIELDBABYSHOWER from './assets/BABYMANSFIELDBABYSHOWER.png';
import BabyShowerCard2 from './assets/BabyShowerCard2.jpg'

function App() {
  return (
    <main>
      <div className='container'>
      <h1>You're Invited!</h1>
      <img id="invite" src={BABYMANSFIELDBABYSHOWER} alt='invitation'></img>
      <br></br>
      <img id="addcard" src={BabyShowerCard2} alt='invitation'></img>
      </div>

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
    </main>
  );
}

export default App;
