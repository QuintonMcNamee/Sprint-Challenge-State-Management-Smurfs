import React, { useContext, useEffect } from 'react';
import axios from 'axios';

// Contexts
import { SmurfContext } from '../contexts/SmurfContext';

const SmurfComponent = () => {
  const { smurf, setSmurf, smurfArray, setSmurfArray } = useContext(SmurfContext);

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

  return(
    <>
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
    </>
  );
}

export default SmurfComponent;
