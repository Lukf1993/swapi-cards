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
  const [page, setPage] = useState({next: {}, previous: {}})

  useEffect(() =>{
    (async () => {
      const data = await fetchData(API_URL) 
      const people = await fetchData(data.people)
      const films = await fetchData(data.films)
      setPeople(people.results);
      setFilms(films.results);
      setPage({next: people.next, previous: people.previous});
      
    })()    
  }, [])

  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  };

  const onClick = URL => {
    if(URL !== null) {
      fetchData(URL)
        .then(res => {
          setPeople(res.results);
          setPage({next: res.next, previous: res.previous})
        })
    }
  }


   
  return(
    <>
    {load === true ? 
      <Favorite favorite={favorite} films={films} /> :
      <Card people={people} films={films} />
    }
      <button onClick={() => onClick(page.previous)}>Previous</button>
      <button onClick={() => onClick(page.next)}>Next</button>
    </>
  )
}

export default App;
