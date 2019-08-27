import React from 'react';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';

import './app.scss';

function App() {
  return (
    <div className="app">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
