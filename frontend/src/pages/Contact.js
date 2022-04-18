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
            <p>Tricity Japanese Salmon Bowl offers an authentic taste of Japan, serving an assortment of beautifully balanced donburi and other classics of the cuisine. Located just off the bustling Highway 24, this hidden gem of Cambridge boasts freshly sourced ingredients, served in a familiar setting. Situated in a prime central location with seamless transit access, you won’t want to miss the taste of Japan here!</p>
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