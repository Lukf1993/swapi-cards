import React from 'react';
import CardContent from './CardContent';

const Favorite = props => {
  
    const favorite = props.favorite;
    const getPersonMovie = props.getPersonMovie;
    const addRemoveFavorite= props.addRemoveFavorite;
    
    return(
        <div className='card'>
        {favorite.map(item => (
              <div className='card__item' key={item.url}>
                <CardContent personMovie={getPersonMovie(item)} item={item} />
                <span className='card__button card__button--rotate' onClick={() => addRemoveFavorite(item)}>Usuń</span>
              </div>
        ))}
        </div> 
    )
}

export default Favorite;