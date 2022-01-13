import { useQuery } from "react-query";

interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface IFilms {
  count: number;
  next?: any;
  previous?: any;
  results: IFilm[];
}

async function fetchFilms() {
  const response = await fetch("https://swapi.dev/api/films");
  return response.json();
}

export const useGetFilms = (data: any) => {
  return useQuery<IFilms, any>("films", fetchFilms, {
    enabled: !!data,
  });
};
