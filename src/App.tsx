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
<<<<<<< HEAD
  const { data, searchTerm, setSearchTerm } = useStarwarsApi();

=======
  const { data, setData, error, loading, searchTerm, setSearchTerm } = useStarwarsApi();
  console.log(data);

  if (loading) return <div>Loading...</div>;
>>>>>>> 9ac253361a202df7a00828cbcc27a79e25e465d4
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
<<<<<<< HEAD
          <CustomSelect setSearchTerm={setSearchTerm} />
          <div>
            <h1>Star Wars API</h1>
            <DisplayData data={data} searchTerm={searchTerm} />
=======
          <CustomSelect data={data} setData={setData} setSearchTerm={setSearchTerm} />
          <div>
            <h1>Star Wars API</h1>
            <h3>Selected:</h3>
            <DisplayData data={data} setData={setData} />
>>>>>>> 9ac253361a202df7a00828cbcc27a79e25e465d4
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
