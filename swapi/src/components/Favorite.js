import React from 'react';
import CardContent from './CardContent';

const Favorite = props => {
  
    const favorite = props.favorite;
    const removeFavorie = props.removeFavorie;
    const getPersonMovie = props.getPersonMovie   
    
    return(
        <div className='card'>
        {favorite.map(item => (
              <div className='card__item' key={item.url}>
                <button onClick={() => removeFavorie(item)}>Usuń z ulubionych</button>
                <CardContent personMovie={getPersonMovie(item)} item={item} />
              </div>
        ))}
        </div> 
    )
}

export default Favorite;