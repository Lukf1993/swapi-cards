import React from 'react';

const CardList = props => {

    const personMovie = props.personMovie;

    return(
        <ul>
            {personMovie.map(movie => (
            <li key={movie.url}>
                {movie.title}
            </li>
            ))}
        </ul>
    )
}

export default CardList;