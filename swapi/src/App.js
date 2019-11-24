import React, { useEffect, useState } from 'react';
import API_URL from './config/API_URL';
import Card from './components/Card';
import Favorite from './components/Favorite';
import Menu from './components/Menu';
import Navigate from './components/Navigate';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as Loading } from './loading.svg';
import './scss/App.scss';

const App = () => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [load, setLoad] = useState({favorite: false, page: true });
  const [page, setPage] = useState({next: {}, previous: {}});

  useEffect(() =>{
    (async () => {
      const data = await fetchData(API_URL) ;
      const people = await fetchData(data.people);
      const films = await fetchData(data.films);

      setPeople(people.results);
      setFilms(films.results);
      setPage({next: people.next, previous: people.previous});
      setLoad({page: false});
    })()    
  }, [])

  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  };

  const getPersonMovie = item => films.filter(film => item.films.includes(film.url));

  const onClick = URL => {
    setLoad({page: true});
    if(URL !== null) {
      fetchData(URL)
        .then(res => {
          setPeople(res.results);
          setPage({next: res.next, previous: res.previous});
          setLoad({page: false});
        })
    }
  }

  const addRemoveFavorite = (item) => {
    if(favorite.includes(item)) {
      const newArr = favorite.filter(el => el !== item);
      setFavorite(newArr);
    } else {
      setFavorite([...favorite, item]);
    }
  }

  const toggleClass = (item) => {
    const parent = item.parentElement;
    const hasClass = parent.classList;
    if(!item.classList.contains('card__button')) {
    if(hasClass.contains('jsReverse')) {
      parent.classList.toggle('card__item--reverse');
    }}
  }

  const loadPage = el => {
    setLoad({favorite: el});
  }

  const Data = () => {
    return (
      <>
    <Logo className='logo' />
    <Menu loadPage={loadPage} />
    {load.favorite ? 
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
        toggleClass={toggleClass}
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
  
  return(
    load.page ? <Loading className='loading' />  : Data()     
  )
}

export default App;
