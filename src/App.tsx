import React from 'react';
import useStarwarsApi from './api/useStarwarsApi';
import './App.css';
import { CustomSelect } from './components/customSelect/CustomeSelect';
// https://swapi.dev/api/
// http swapi.dev/api/planets/1/

function App() {
  const apiData = useStarwarsApi('planets');

  console.log(apiData);

  return (
    <div className="App">
      <CustomSelect />
      <div>
        <h1>Star Wars API</h1>
        Planets:
        {apiData.data?.results.map((p: any, index: any) => (
          <p key={index}>{p.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
