import React from 'react';

const CardList = props => {

    const personMovie = props.personMovie;

    return(
        <ul className='card__face card__face--back'>
            {personMovie.map(movie => (
            <li key={movie.url}>
                {movie.title}
            </li>
            ))}
        </ul>
    )
}

export default CardList;