import React from 'react';
import CardContent from './CardContent';

const Card = props => {
    
    const people = props.people;
    const films = props.films;
    const addFavorite = props.addFavorite;

    const getPersonMovie = item => films.filter(film => item.films.includes(film.url))
    
    return (
       <div className='card'>
       {people.map(item => (
          <div className='card__item' key={item.url}>
            <button  onClick={() => addFavorite(item)}>Ulubione</button>
            <CardContent personMovie={getPersonMovie(item)} item={item} />
          </div>
      ))}
      </div> 
    )
}

export default Card;