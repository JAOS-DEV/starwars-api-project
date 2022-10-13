import React from 'react';
<<<<<<< HEAD
import { StarwarsApiTypes } from './starwarsApiTypes';
=======
import { TEST_DATA } from './testData';
>>>>>>> 9ac253361a202df7a00828cbcc27a79e25e465d4

export const BASE_URL = 'https://swapi.dev/api/';
export const TEST_URL = 'https://swapi.dev/api/planets/1/';

<<<<<<< HEAD
const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};

const useStarwarsApi = () => {
  const [data, setData] = React.useState<StarwarsApiTypes | undefined>(initialState);
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);
=======
const useStarwarsApi = () => {
  const [data, setData] = React.useState<any>('');
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
>>>>>>> 9ac253361a202df7a00828cbcc27a79e25e465d4
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  React.useEffect(() => {
    const fetchData = async () => {
<<<<<<< HEAD
      setLoading(true);
=======
>>>>>>> 9ac253361a202df7a00828cbcc27a79e25e465d4
      try {
        const response = await fetch(BASE_URL + searchTerm);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm]);

  return { data, error, loading, searchTerm, setSearchTerm, setData };
};

export default useStarwarsApi;
