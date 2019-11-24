import React from 'react';
import CardContent from './CardContent';

const Favorite = props => {
  
    const favorite = props.favorite;
    const getPersonMovie = props.getPersonMovie;
    const addRemoveFavorite= props.addRemoveFavorite;
    const toggleClass = props.toggleClass;
    
    return(
        <div className='card'>
          {favorite.map(item => (
                <div className='card__item jsReverse' key={item.url} onClick={(e) => toggleClass(e.target)}>
                  <CardContent personMovie={getPersonMovie(item)} item={item} />
                  <span className='card__button card__button--rotate' onClick={() => addRemoveFavorite(item)}>Usuń</span>
                </div>
          ))}
        </div> 
    )
}

export default Favorite;