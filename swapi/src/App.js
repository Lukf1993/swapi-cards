import React, {useEffect, useState} from 'react';
import API_URL from './config/API_URL';
import './App.scss';

const App = () => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);

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
    <div className='card'>
      {people.map(item => {
        const personMovie = films.filter(film => {
          return item.films.includes(film.url)
        })
        return (
          <div className='card__item' key={item.url}>
            <h1>{item.name}</h1>
            <p>{`Height: ${item.height}`}</p>
            <p>{`Mass: ${item.mass}`}</p>
            <p>{`Hair Color: ${item.hair_color}`}</p>
            <p>{`Eye Color: ${item.eye_color}`}</p>
            <p>{`Gender: ${item.gender}`}</p>
            <ul>
              {personMovie.map(movie => (
                <li>
                  {movie.title}
                </li>
              ))}
            </ul>
          </div>
        )     
      })}
      </div>
      <button>Powrót</button>
      <button>Dalej</button>
    </>
  )
}

export default App;
