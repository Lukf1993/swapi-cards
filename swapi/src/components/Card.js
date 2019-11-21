import React from 'react';
import CardContent from './CardContent';

const Card = props => {
    
    const people = props.people;
    const addRemoveFavorite = props.addRemoveFavorite;
    const getPersonMovie = props.getPersonMovie;
    const favorite = props.favorite;
    
    const toggleClass = (item) => {
      const parent = item.parentElement;
      const hasClass = parent.classList;
      if(!item.classList.contains('card__button')) {
      if(hasClass.contains('jsReverse')) {
        parent.classList.toggle('card__item--reverse');
      }}
    }
    
    return (
       <div className='card'>
       {people.map(item => (
          <div className='card__item jsReverse' key={item.url} onClick={(e) => toggleClass(e.target)}>
            <CardContent personMovie={getPersonMovie(item)} item={item} />
            {favorite.includes(item) 
            ?
            <span className='card__button card__button--rotate' onClick={() => addRemoveFavorite(item)}></span> 
            : 
            <span className='card__button' onClick={() => addRemoveFavorite(item)}></span> }
            
          </div>
      ))}
      </div> 
    )
}

export default Card;