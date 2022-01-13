import React from "react";
import CardContent from "./CardContent";

const Card = ({
  people,
  addRemoveFavorite,
  getPersonMovie,
  favorite,
  toggleClass,
}) => {
  return (
    <div className="card">
      {people.map((item) => (
        <div
          className="card__item jsReverse"
          key={item.url}
          onClick={(e) => toggleClass(e.target)}
        >
          <CardContent personMovie={getPersonMovie(item)} item={item} />
          <span
            className={`card__button ${
              favorite.includes(item) ? "card__button--rotate" : ""
            }`}
            onClick={() => addRemoveFavorite(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
