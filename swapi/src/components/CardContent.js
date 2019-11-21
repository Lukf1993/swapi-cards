import React from 'react';
import CardList from './CardList';

const CardContent = props => {

    const item = props.item;
    const personMovie = props.personMovie;

    return(
        <>
            <div className='card__face card__face--front'>
                <h1 className='card__title'>{item.name}</h1>
                <p className='card__text'>{`Height: ${item.height}`}</p>
                <p className='card__text'>{`Mass: ${item.mass}`}</p>
                <p className='card__text'>{`Hair Color: ${item.hair_color}`}</p>
                <p className='card__text'>{`Eye Color: ${item.eye_color}`}</p>
                <p className='card__text'>{`Gender: ${item.gender}`}</p>
            </div>
            <CardList personMovie={personMovie} />
        </>
    )
}

export default CardContent;