import React from 'react';
import Lectorem from 'react-lectorem';
import storyData from './frere.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lectorem data={ storyData } />
    </div>
  );
}

export default App;
