import React from 'react';
import CardContent from './CardContent';

const Card = props => {
    
    const people = props.people;
    const addFavorite = props.addFavorite;
    const getPersonMovie = props.getPersonMovie    
    
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