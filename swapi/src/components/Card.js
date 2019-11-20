import React from 'react';
import CardContent from './CardContent';

const Card = props => {
    
    const people = props.people;
    const films = props.films;
    const addFavorite = props.addFavorite;
    
    return (
       <div className='card'>
       {people.map(item => {
        const personMovie = films.filter(film => {
          return item.films.includes(film.url)
        })
        return (
          <div className='card__item' key={item.url}>
            <button  onClick={() => addFavorite(item)}>Ulubione</button>
            <CardContent personMovie={personMovie} item={item} />
          </div>
        )     
      })}
      </div> 
    )
}

export default Card;