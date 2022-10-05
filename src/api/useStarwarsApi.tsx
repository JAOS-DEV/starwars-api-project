import React from 'react';
import { TEST_DATA } from './testData';

export const BASE_URL = 'https://swapi.dev/api/';
export const TEST_URL = 'https://swapi.dev/api/planets/1/';

const useStarwarsApi = () => {
  const [data, setData] = React.useState<any>('');
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  React.useEffect(() => {
    const fetchData = async () => {
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
