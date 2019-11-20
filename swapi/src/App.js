import React, {useEffect, useState} from 'react';
import API_URL from './config/API_URL';
import Card from './components/Card';
import Favorite from './components/Favorite';
import Menu from './components/Menu';
import Navigate from './components/Navigate';
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

  const addFavorite = item => {
    setFavorite([...favorite, item])
  }
  const removeFavorie = item => {
    const newArr = favorite.filter(el => el !== item)
    setFavorite(newArr);
  }

  const loadPage = el => {
    setLoad(el);
  }


   
  return(
    <>
    <Menu loadPage={loadPage} />
    {load === true ? 
      <Favorite 
        favorite={favorite} 
        films={films} 
        removeFavorie={removeFavorie}
      /> 
      :
      <Card 
        people={people} 
        films={films} 
        addFavorite={addFavorite}

      />
    }
      <Navigate 
        onClick={onClick}
        page={page}
       />
    </>
  )
}

export default App;
