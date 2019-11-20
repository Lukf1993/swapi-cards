import React from 'react';

const Favorite = props => {
    const favorite = props.favorite;
    const films = props.films;

    return(
        <div className='card'>
        {favorite.map(item => {
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
    )
}

export default Favorite;