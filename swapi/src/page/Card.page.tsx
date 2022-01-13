import * as React from "react";
import { useState } from "react";
import Card from "../components/Card";
import Favorite from "../components/Favorite";
import Menu from "../components/Menu";
import Navigate from "../components/Navigate";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Loading } from "../loading.svg";
import "../scss/App.scss";
import { useSwapi } from "../queries/useSwapi";
import { Person, useGetPeople } from "../queries/useGetPeople";
import { useGetFilms } from "../queries/useGetFilms";

interface ILoadPage {
  favorite: boolean;
  page: boolean;
}
function CardPage() {
  const [favorite, setFavorite] = useState<Person[]>([]);
  const [load, setLoad] = useState<ILoadPage>({ favorite: false, page: true });
  const [page, setPage] = useState("1");

  const swapiData = useSwapi();
  const rqPeople = useGetPeople(swapiData.data, page);
  const rqFilms = useGetFilms(swapiData.data);

  const getPersonMovie = (item: Person) =>
    rqFilms?.data?.results?.filter((film: any) =>
      item.films.includes(film.url)
    );

  const addRemoveFavorite = (item: Person) => {
    if (favorite.includes(item)) {
      const newArr = favorite.filter((el) => el !== item);
      setFavorite(newArr);
    } else {
      setFavorite([...favorite, item]);
      alert("Dodano do ulubionych");
    }
  };

  const toggleClass = (item: HTMLElement) => {
    const parent = item.parentElement;
    const hasClass = parent?.classList;
    if (!item.classList.contains("card__button")) {
      if (hasClass?.contains("jsReverse")) {
        parent?.classList.toggle("card__item--reverse");
      }
    }
  };

  const loadPage = (el: boolean) => {
    setLoad({ favorite: el, page: !el });
  };

  function PageData() {
    return (
      <>
        <Logo className="logo" />
        <Menu loadPage={loadPage} />
        {load.favorite
          ? rqFilms.isSuccess && (
              <Favorite
                favorite={favorite}
                addRemoveFavorite={addRemoveFavorite}
                getPersonMovie={getPersonMovie}
                toggleClass={toggleClass}
              />
            )
          : rqPeople.isSuccess &&
            rqFilms.isSuccess && (
              <>
                <Card
                  people={rqPeople.data.results}
                  favorite={favorite}
                  addRemoveFavorite={addRemoveFavorite}
                  getPersonMovie={getPersonMovie}
                  toggleClass={toggleClass}
                />
                <Navigate
                  onClick={setPage}
                  page={{
                    next: rqPeople.data.next,
                    previous: rqPeople.data.previous,
                  }}
                />
              </>
            )}
      </>
    );
  }

  return rqPeople.isLoading ? <Loading className="loading" /> : <PageData />;
}

export default CardPage;
