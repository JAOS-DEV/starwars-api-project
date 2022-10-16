import React from 'react';
import useStarwarsApi from './api/useStarwarsApi';
import Container from '@mui/material/Container';
import { CustomSelect } from './components/customSelect/CustomSelect';
import { DisplayData } from './components/displayData/DisplayData';
import './App.css';
import { Box, Button, Typography } from '@mui/material';
import starwarsLogo from './images/starwars-logo.jpeg';

// https://swapi.dev/api/
// http swapi.dev/api/planets/1/

function App() {
  const { data, searchTerm, setSearchTerm, nextPage, prevPage, setNextPage, setPrevPage, setCurrentUrl } = useStarwarsApi();

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            height: '100vh',
            backgroundImage: `url(${starwarsLogo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',

              color: '#fff',
            }}
          >
            <Typography variant="h1" component="h2" color="white">
              Star Wars API
            </Typography>
            <CustomSelect setSearchTerm={setSearchTerm} />
          </Box>
          <Box
            sx={{
              color: '#fff',
            }}
          >
            <DisplayData
              data={data}
              searchTerm={searchTerm}
              setNextPage={setNextPage}
              setPrevPage={setPrevPage}
              nextPage={nextPage}
              prevPage={prevPage}
              setCurrentUrl={setCurrentUrl}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
