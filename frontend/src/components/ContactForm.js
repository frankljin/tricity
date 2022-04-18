import { makeStyles } from "@material-ui/styles"
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { ToastContainer, toast } from 'react-toastify';
//
// import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';

import { Grid, TextField, Button, CardContent, Typography } from '@material-ui/core';
function ContactForm() {
    const {
    // register,
    // handleSubmit,
    //reset,
    // formState: { errors }
    } = useForm();
    // const [disabled, setDisabled] = useState(false);

    // Function that displays a success toast on bottom right of the page when form submission is successful
    // const toastifySuccess = () => {
    //     toast('Form sent!', {
    //     position: 'bottom-right',
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: false,
    //     className: 'submit-feedback success',
    //     toastId: 'notifyToast'
    //     });
    // };
    // const onSubmit = async (data) => {

    // // Destrcture data object
    // const { name, email, subject, message } = data;
    // try {
    //   // Disable form while processing submission
    //   setDisabled(true);

    //   // Define template params
    //   const templateParams = {
    //     name,
    //     email,
    //     subject,
    //     message
    //   };

    //   // Use emailjs to email contact form data
    //   await emailjs.send(
    //     process.env.REACT_APP_SERVICE_ID,
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     templateParams,
    //     process.env.REACT_APP_USER_ID
    //   );

    //   // Reset contact form fields after submission
    //   reset();
    //   // Display success toast
    //   toastifySuccess();
    //   // Re-enable form submission
    //   setDisabled(false);
    // } catch (e) {
    //   console.log(e);
    // }
  //};
    const useStyles = makeStyles(() => ({
        root: {
            // height: '100vh',
            // width: "60vw"
        }
    }))
    const classes = useStyles();
    return (
        <div className = {classes.root}>     
          <CardContent>
            <h1>Contact Us</h1>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField required name = "name" placeholder="First name" label="First Name" variant="outlined" fullWidth  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField required name = "name" placeholder="Last name" label="Last Name" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField required  name = "email" type="email" placeholder="Email" label="Email" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                  <TextField required  name = "subject" placeholder="Subject" label="Subject" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField required name = "message" label="Message" multiline rows={3} placeholder="Message" variant="outlined" fullWidth  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained"  fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>

        </div>
    )
}

export default ContactForm;