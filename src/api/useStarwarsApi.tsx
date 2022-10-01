import React from 'react';
import { TEST_DATA } from './testData';

const useStarwarsApi = (url?: string) => {
  const BASE_URL = 'https://swapi.dev/api/';
  const TEST_URL = 'https://swapi.dev/api/planets/1/';

  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await fetch(BASE_URL + url);
        // const json = await response.json();
        setData(TEST_DATA);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useStarwarsApi;
