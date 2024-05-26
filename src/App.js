// src/App.js
import React from 'react';
import NotePad from './components/NotePad';
import ModeToggle from './components/ModeToggle';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ModeToggle />
      <NotePad />
    </div>
  );
};

export default App;
