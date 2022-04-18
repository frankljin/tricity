import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ContactForm from '../components/ContactForm';
import TricityMap from '../components/Map';
import {InfoWindow, Marker, Map, GoogleApiWrapper} from 'google-maps-react';

// const Item = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(25),
//   textAlign: 'center',
// }));

const Contact = () => {
  return (
    <main>
      <Box sx={{
        border: 0,
        boxShadow: 0 
      }}>
        <Grid container rowSpacing={1} columnSpacing={1} alignItems="center">
          <Grid item xs={12} sm={5} style={{height: "50vh"}}>
            <h1>Location</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Grid>
          <Grid item xs={12} sm={7} style={{position: 'relative', height: '50vh'}}>
             <TricityMap />
          </Grid>
          <Grid item xs={12}>
              <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default Contact;