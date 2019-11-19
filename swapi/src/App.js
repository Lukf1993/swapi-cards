import React, {useEffect, useState} from 'react';
import API_KEY from './config/API_KEY';
import './App.css';

const App = () => {
  const [person, setPerson] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(() =>{
    (async () => {
      const data = await fetchData(API_KEY) 
      const people = await fetchData(data.people)
      const films = await fetchData(data.films)

      setPerson(people.results);
      setFilms(films.results);
      
    })()    
  }, [])

  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
};
   
  return(
    <>
      {person.map(item => {
        const personMovie = films.filter(film => {
          return item.films.includes(film.url)
        })
        return (
          <div key={item.url}>{item.name}
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
    </>
  )
}

export default App;
