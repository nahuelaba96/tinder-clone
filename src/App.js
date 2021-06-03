import React from 'react';
import './App.css';
import Header from './Header.js'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

// need firebase tools npm i -g firebase-tools

function App() {
  return (
    // BEM class naming convetion
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
