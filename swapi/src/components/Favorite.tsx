import React, { FC } from "react";
import CardContent from "./CardContent";
import { Person } from "../queries/useGetPeople";

interface IProps {
  favorite: Person[];
  getPersonMovie: (person: Person) => void;
  addRemoveFavorite: (person: Person) => void;
  toggleClass: (el: HTMLElement) => void;
}
const Favorite: FC<IProps> = ({
  favorite,
  getPersonMovie,
  addRemoveFavorite,
  toggleClass,
}) => {
  return (
    <div className="card">
      {favorite.map((item) => (
        <div
          className="card__item jsReverse"
          key={item.url}
          onClick={(e) => toggleClass(e.target as HTMLElement)}
        >
          <CardContent personMovie={getPersonMovie(item)} item={item} />
          <span
            className="card__button card__button--rotate"
            onClick={() => addRemoveFavorite(item)}
          >
            Usuń
          </span>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
