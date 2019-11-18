import React, {useEffect} from 'react';
import API_KEY from './config/API_KEY';
import axios from 'axios'; 
import './App.css';

const App = () => {
  const [person, setPerson] = React.useState([]);

  const getCharacters = getURL => {
    axios.get(getURL)
      .then(res => {
        setPerson(res.data.results);
      })
  }

  useEffect(() =>{
    getCharacters(API_KEY);
  }, [])
   
  return(
    <>
    <ul>
      {person.map(item => (
      <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    </>
  )
}

export default App;
