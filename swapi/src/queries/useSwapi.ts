import { useQuery } from "react-query";

interface IGetSwapiData {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

async function fetchSwapiData() {
  const response = await fetch("https://swapi.dev/api/");
  return response.json();
}

export const useSwapi = () => {
  return useQuery<IGetSwapiData, any>("swapi", fetchSwapiData);
};
