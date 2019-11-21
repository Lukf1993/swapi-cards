import React, {useEffect, useState} from 'react';
import API_URL from './config/API_URL';
import Card from './components/Card';
import Favorite from './components/Favorite';
import Menu from './components/Menu';
import Navigate from './components/Navigate';
import { ReactComponent as Logo} from './logo.svg';
import './scss/App.scss';

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

  const getPersonMovie = item => films.filter(film => item.films.includes(film.url))

  const onClick = URL => {
    if(URL !== null) {
      fetchData(URL)
        .then(res => {
          setPeople(res.results);
          setPage({next: res.next, previous: res.previous})
        })
    }
  }

  const addRemoveFavorite = (item) => {
    if(favorite.includes(item)) {
      const newArr = favorite.filter(el => el !== item)
      setFavorite(newArr);
    } else {
      setFavorite([...favorite, item])
    }
  }
  const loadPage = el => {
    setLoad(el);
  }
   
  return(
    <>
    <Logo className='logo' />
    <Menu loadPage={loadPage} />
    {load ? 
      <Favorite 
        favorite={favorite} 
        addRemoveFavorite={addRemoveFavorite}
        getPersonMovie={getPersonMovie}
      /> 
      :
      <>
      <Card 
        people={people} 
        favorite={favorite} 
        addRemoveFavorite={addRemoveFavorite}
        getPersonMovie={getPersonMovie}
      />
      <Navigate 
        onClick={onClick}
        page={page}
       />
       </>
    }
      
    </>
  )
}

export default App;
