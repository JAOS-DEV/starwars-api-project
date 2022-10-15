import React, { useEffect } from 'react';
import {
  FilmTypes,
  PeopleTypes,
  PlanetTypes,
  SpeciesTypes,
  StarWarsSelectTypes,
  StarshipTypes,
  StarwarsApiTypes,
  VehicleTypes,
} from '../../api/starwarsApiTypes';

interface DisplayDataProps {
  data: StarwarsApiTypes | undefined;
  searchTerm: string;
  loading?: boolean;
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data, searchTerm }) => {
  const searchTermCapitalized = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
  console.log(`renderData`, data);

  const renderData = ({ data, searchTerm }: DisplayDataProps) => {
    const results = data?.results;
    console.log(`results`, results);

    if (searchTerm === StarWarsSelectTypes.planets) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Planet Name: {item?.name}</h3>
          <h3>Climate: {item?.climate}</h3>
          <h3>Population: {item?.population}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === StarWarsSelectTypes.people) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Height: {item?.height}</h3>
          <h3>Mass: {item?.mass}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === StarWarsSelectTypes.films) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Title: {item?.title}</h3>
          <h3>Director: {item?.director}</h3>
          <h3>Producer: {item?.producer}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === StarWarsSelectTypes.species) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Classification: {item?.classification}</h3>
          <h3>Language: {item?.language}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === StarWarsSelectTypes.vehicles) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Model: {item?.model}</h3>
          <h3>Manufacturer: {item?.manufacturer}</h3>
          <hr />
        </div>
      ));
    }
    if (searchTerm === StarWarsSelectTypes.starships) {
      return results?.map((item, index) => (
        <div key={index}>
          <h3>Name: {item?.name}</h3>
          <h3>Model: {item?.model}</h3>
          <h3>Manufacturer: {item?.manufacturer}</h3>
          <hr />
        </div>
      ));
    }
  };

  // useEffect(() => {
  //   renderData({ data, searchTerm });
  //   console.log(`data useEffect: `, data);
  // }, [data, searchTerm]);

  return (
    <div>
      <h1>{searchTermCapitalized}</h1>
      <hr />
      {renderData({ data, searchTerm })}
    </div>
  );
};
