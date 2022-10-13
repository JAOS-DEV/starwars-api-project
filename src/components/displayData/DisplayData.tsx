import React from 'react';
import { FilmTypes, PeopleTypes, PlanetTypes, SpeciesTypes, StarshipTypes, StarwarsApiTypes, VehicleTypes } from '../../api/starwarsApiTypes';

interface DisplayDataProps {
  data: StarwarsApiTypes | undefined;
  searchTerm: string;
  loading?: boolean;
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data, searchTerm }) => {
  const searchTermCapitalized = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const renderData = ({ data, searchTerm, loading }: any) => {
    const results = data?.results;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (searchTerm === 'planets') {
      return results?.map((item: any, index: any): any => (
        <div key={index}>
          <h3>Planet Name: {item?.name}</h3>
          <h3>Climate: {item?.climate}</h3>
          <h3>Population: {item?.population}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === 'people') {
      return results?.map((item: any, index: number) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Height: {item?.height}</h3>
          <h3>Mass: {item?.mass}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === 'films') {
      return results?.map((item: any, index: number) => (
        <div key={index}>
          <h3>Title: {item?.title}</h3>
          <h3>Director: {item?.director}</h3>
          <h3>Producer: {item?.producer}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === 'species') {
      return results?.map((item: any, index: number) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Classification: {item?.classification}</h3>
          <h3>Language: {item?.language}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === 'vehicles') {
      return results?.map((item: any, index: number) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Model: {item?.model}</h3>
          <h3>Manufacturer: {item?.manufacturer}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === 'starships') {
      return results?.map((item: any, index: number) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Model: {item?.model}</h3>
          <h3>Manufacturer: {item?.manufacturer}</h3>
          <hr />
        </div>
      ));
    }
  };

  console.log(data);
  return (
    <div>
      <h1>{searchTermCapitalized}</h1>
      <hr />
      {renderData(data)}
    </div>
  );
};
