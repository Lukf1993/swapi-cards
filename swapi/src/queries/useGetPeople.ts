import { useQuery } from "react-query";

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

interface People {
  results: Person[];
  next: string;
  previous: string;
}

async function fetchPeople(page: string) {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return response.json();
}

export const useGetPeople = (data: any, page: string) =>
  useQuery<People, Error>(["people", page], () => fetchPeople(page), {
    enabled: !!data,
  });
