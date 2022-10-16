import React from 'react';
import { StarwarsApiTypes } from './starwarsApiTypes';

export const BASE_URL = 'https://swapi.dev/api/';
export const TEST_URL = 'https://swapi.dev/api/planets/1/';

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

const useStarwarsApi = () => {
  const [data, setData] = React.useState<StarwarsApiTypes | undefined>(initialState);
  const [error, setError] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [currentUrl, setCurrentUrl] = React.useState<string>(BASE_URL);
  const [nextPage, setNextPage] = React.useState<any>();
  const [prevPage, setPrevPage] = React.useState<any>();

  React.useEffect(() => {
    const fetchData = async () => {
      searchTerm > '' && setLoading(true);
      setCurrentUrl(BASE_URL + searchTerm);
      try {
        const response = await fetch(currentUrl);
        const json = await response.json();
        setData(json);
        setNextPage(json.next);
        setPrevPage(json.previous);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchTerm, currentUrl]);

  React.useEffect(() => {
    console.log(`data`, data);
    console.log(`nextPage`, nextPage);
    console.log(`prevPage`, prevPage);
  }, [nextPage, prevPage, data]);

  return { data, error, loading, searchTerm, setSearchTerm, setData, nextPage, prevPage, setNextPage, setPrevPage, setCurrentUrl };
};

export default useStarwarsApi;
