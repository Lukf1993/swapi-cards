import React, {useEffect, useState} from 'react';
import API_URL from './config/API_URL';
import Card from './components/Card';
import Favorite from './components/Favorite'
import './App.scss';

const App = () => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() =>{
    (async () => {
      const data = await fetchData(API_URL) 
      const people = await fetchData(data.people)
      const films = await fetchData(data.films)

      setPeople(people.results);
      setFilms(films.results);
      
    })()    
  }, [])

  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
};
   
  return(
    <>
    {load === true ? 
      <Favorite favorite={favorite} films={films} /> :
      <Card people={people} films={films} />
    }
      <button>Previous</button>
      <button>Next</button>
    </>
  )
}

export default App;
