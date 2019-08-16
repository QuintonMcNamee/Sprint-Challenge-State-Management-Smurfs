import React from "react";
import { useState } from 'react';
import "./App.css";

// Components
import SmurfComponent from './SmurfComponent';

// Contexts
import { SmurfContext } from '../contexts/SmurfContext';

const App = () => {
  // hooks
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
  const [smurfArray, setSmurfArray] = useState([]);

  return (
    <SmurfContext.Provider value={{ smurf, setSmurf, smurfArray, setSmurfArray }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br />
        <SmurfComponent />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
