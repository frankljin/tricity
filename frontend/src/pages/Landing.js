import { makeStyles } from "@material-ui/styles"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react"
import MenuIcon from '@mui/icons-material/Menu';

function IconImg(props) {
    
    const useStyles = makeStyles(() => ({
        contact: {

            "&.MuiButton-contained": {
                color: "yellow"
            },
            "&.MuiButton-outlined": {
                color: "white"
            },
            "&.MuiButton-root": {
                border: "2px white solid",
                fontSize: "1.7vh",
               

            },


            fontSize: "3rem"
        },

    }))
    const classes = useStyles();
    if (props.width < 600) {
        return (
            <div >
              <MenuIcon  fontSize = "large"/>

            </div>
        )
    } else {
        return (
            <div>
                <Box>
                    <Button className = {classes.contact} variant="outlined" disableElevation>Contact Us</Button>
                        
                </Box>
            </div>
        )
    }
    

};

const Landing = () => {
  const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        setWidth(window.innerWidth);
        console.log(width);
    })
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black" ,
            backgroundPosition: "center",
            backgroundSize: "cover",
            fontFamily: "Signika",

        },
        appbar: {
            background: 'none',
            height: "7vh"
        },
        appbarWrapper: {
            width: "90%",
            margin: "1.2vw",
        },
        appbartitle: {
            flexGrow: "1",
            fontSize: "3vh",
            
        },
        maintitle: {
            fontSize: "7vh",
            color: "#ffff",
            marginTop: "-5vh",
        },
        bottomTitle: {
            display: "flex",
        },
        subTitle: {
            fontSize: "3vh",
            color:"#ffff",
            marginTop: "0",
            flex: "1",
            textDecoration: "underline",
        }

    }))

    const classes = useStyles();

    return (
        <div className = {classes.root}>
            
            <Box>
                <h1 className = {classes.maintitle}>Resturant Name</h1>
                <div className = {classes.bottomTitle}>
                    <h2 className = {classes.subTitle}>Take Out</h2>
                </div>
                <div className = {classes.bottomTitle}>
                    <h2 className = {classes.subTitle}>Order</h2>
                </div>

            </Box>
        </div>
    )
};

export default Landing;
