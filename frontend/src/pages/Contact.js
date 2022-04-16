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
    <div>
      <Box sx={{
        mt: 2,
        mx: 2,
        width: 1,
        border: 0,
        boxShadow: 0 
      }}>
        <Grid container rowSpacing={8} columnSpacing={7} marginTop = "10px">
          <Grid item xs={12} sm={4.5}>
            <Item>
              info
            </Item>
          </Grid>
          <Grid item xs={12} sm={7.5}>
            <Item>
              map
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              contact form
              <ContactForm />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact;