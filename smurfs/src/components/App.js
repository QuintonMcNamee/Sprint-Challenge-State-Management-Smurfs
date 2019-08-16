import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

// Components

// Contexts

const App = () => {
  // hooks
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });
  const [smurfArray, setSmurfArray] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        setSmurfArray(response.data);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  // event handlers
  const handleNameChange = e => {
    setSmurf({ name: e.target.value });
  };
  const handleAgeChange = e => {
    setSmurf({ ...smurf, age: e.target.value });
  };
  const handleHeightChange = e => {
    setSmurf({ ...smurf, height: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', smurf )
      .then(response => {
        setSmurfArray(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {console.log(smurf)}
      {console.log(smurfArray)}
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <br />
      <form id='myForm' onSubmit={e => handleSubmit(e)}>
        <label>
          <h1>Add a new Smurf to the Smurf Village</h1>
          <input type='text' name='name' placeholder='Name' onChange={e => handleNameChange(e)} />
          <input type='text' name='age' placeholder='Age' onChange={e => handleAgeChange(e)} />
          <input type='text' name='height' placeholder='Height' onChange={e => handleHeightChange(e)} />
        </label>
        <button>Add Smurf</button>
      </form>
      <div>
      {smurfArray.map(smurf => (
        <p key={smurf.id}>Name: {smurf.name} -- Age: {smurf.age} -- Height: {smurf.height}</p>
      ))}
      </div>
    </div>
  );
}

export default App;
