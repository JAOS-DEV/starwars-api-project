import React from 'react';
import { StarwarsApiTypes } from './starwarsApiTypes';

export const BASE_URL = 'https://swapi.dev/api/';
export const TEST_URL = 'https://swapi.dev/api/planets/1/';

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
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
