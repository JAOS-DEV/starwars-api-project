import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
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
  searchTerm: StarWarsSelectTypes | string;
  loading?: boolean;
  nextPage?: string | null;
  prevPage?: string | null;
  setNextPage?: React.Dispatch<React.SetStateAction<any>>;
  setPrevPage?: React.Dispatch<React.SetStateAction<any>>;
  setCurrentUrl?: React.Dispatch<React.SetStateAction<string>>;
}

export const DisplayData: React.FC<DisplayDataProps> = ({ data, searchTerm, nextPage, prevPage, setNextPage, setPrevPage, setCurrentUrl }) => {
  const searchTermCapitalized = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

  const renderData = ({ data, searchTerm }: DisplayDataProps) => {
    const results = data?.results;

    if (searchTerm === StarWarsSelectTypes.planets) {
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{searchTermCapitalized}</TableCell>
                <TableCell align="right">Climate</TableCell>
                <TableCell align="right">Diameter</TableCell>
                <TableCell align="right">Gravity</TableCell>
                <TableCell align="right">Orbital Period</TableCell>
                <TableCell align="right">Population</TableCell>
                <TableCell align="right">Rotation Period</TableCell>
                <TableCell align="right">Surface Water</TableCell>
                <TableCell align="right">Terrain</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results?.map((item, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">{item.climate}</TableCell>
                  <TableCell align="right">{item.diameter}</TableCell>
                  <TableCell align="right">{item.gravity}</TableCell>
                  <TableCell align="right">{item.orbital_period}</TableCell>
                  <TableCell align="right">{item.population}</TableCell>
                  <TableCell align="right">{item.rotation_period}</TableCell>
                  <TableCell align="right">{item.surface_water}</TableCell>
                  <TableCell align="right">{item.terrain}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
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

  const handleNextPage = () => {
    nextPage && setCurrentUrl && setCurrentUrl(nextPage);
  };

  useEffect(() => {
    renderData({ data, searchTerm });
  }, [data, searchTerm]);

  return (
    <>
      <div>
        <h1>{searchTermCapitalized}</h1>
        <hr />
        {renderData({ data, searchTerm })}
      </div>
      <Button
        variant="contained"
        onClick={() => {
          console.log('clicked');
          setNextPage!(data?.previous!);
        }}
      >
        Prev Page
      </Button>
      <Button variant="contained" onClick={handleNextPage}>
        Next Page
      </Button>
    </>
  );
};
