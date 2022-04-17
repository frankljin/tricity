import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ContactForm from '../components/ContactForm';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(15),
  textAlign: 'center',
}));

const Contact = () => {
  return (
    <main>
      <Box sx={{
        border: 0,
        boxShadow: 0 
      }}>
        <Grid container rowSpacing={1} columnSpacing={1} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Item>
              info
            </Item>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Item>
              map
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <ContactForm />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default Contact;