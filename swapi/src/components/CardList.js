import React from 'react';

const CardList = props => {

    const personMovie = props.personMovie;

    return(
        <ul className='card__face card__face--back'>
            <li className='card__title'>Occurred</li>
            {personMovie.map(movie => (
            <li className='card__text' key={movie.url}>
                {movie.title}
            </li>
            ))}
        </ul>
    )
}

export default CardList;