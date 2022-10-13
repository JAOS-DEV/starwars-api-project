import React from 'react';
import useStarwarsApi from './api/useStarwarsApi';
import Container from '@mui/material/Container';
import { CustomSelect } from './components/customSelect/CustomSelect';
import { DisplayData } from './components/displayData/DisplayData';
import './App.css';
import { Box } from '@mui/material';
import starwarsLogo from './images/starwars-logo.jpeg';

// https://swapi.dev/api/
// http swapi.dev/api/planets/1/

function App() {
  const { data, searchTerm, setSearchTerm } = useStarwarsApi();

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundImage: `url(${starwarsLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: '#fff',
          }}
        >
          <CustomSelect setSearchTerm={setSearchTerm} />
          <div>
            <h1>Star Wars API</h1>
            <DisplayData data={data} searchTerm={searchTerm} />
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
