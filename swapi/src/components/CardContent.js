import React from 'react';
import CardList from './CardList';

const CardContent = props => {

    const item = props.item;
    const personMovie = props.personMovie;

    return(
        <>
            <h1>{item.name}</h1>
            <p>{`Height: ${item.height}`}</p>
            <p>{`Mass: ${item.mass}`}</p>
            <p>{`Hair Color: ${item.hair_color}`}</p>
            <p>{`Eye Color: ${item.eye_color}`}</p>
            <p>{`Gender: ${item.gender}`}</p>
            <CardList personMovie={personMovie} />
        </>
    )
}

export default CardContent;