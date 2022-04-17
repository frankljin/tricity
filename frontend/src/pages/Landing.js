import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function IconImg(props) {
  const useStyles = makeStyles(() => ({
    contact: {
      "&.MuiButton-contained": {
        color: "yellow",
      },
      "&.MuiButton-outlined": {
        color: "white",
      },
      "&.MuiButton-root": {
        border: "2px white solid",
        fontSize: "1.7vh",
      },

      fontSize: "3rem",
    },
  }));
  const classes = useStyles();
  if (props.width < 600) {
    return (
      <div>
        <MenuIcon fontSize="large" />
      </div>
    );
  } else {
    return (
      <div>
        <Box>
          <Button
            className={classes.contact}
            variant="outlined"
            disableElevation
          >
            Contact Us
          </Button>
        </Box>
      </div>
    );
  }
}

const Landing = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
  });
  const useStyles = makeStyles(() => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "97.6vh",
      backgroundImage: 'url("https://norecipes.com/wp-content/uploads/2020/10/salmon-rice-008-1200x800.jpg")',
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    appbar: {
      background: "none",
      height: "7vh",
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
      fontSize: "10vh",
      color: "#ffff",
      marginTop: "-5vh",
      width: "70%"
    },
    bottomTitle: {
      display: "flex",
    },
    subTitle: {
      fontSize: "3vh",
      color: "#ffff",
      marginTop: "0",
      flex: "1",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main>
        <Box>
          <h1 className={classes.maintitle}>Tricity Japanese Salmon Bowl</h1>
          <div className={classes.bottomTitle}>
            <h2 className={classes.subTitle}>About</h2>
          </div>
          <div className={classes.bottomTitle}>
            <h2 className={classes.subTitle}>Menu</h2>
          </div>
          <div className={classes.bottomTitle}>
            <h2 className={classes.subTitle}>Contact</h2>
          </div>
          <div className={classes.bottomTitle}>
            <h2 className={classes.subTitle}>Order</h2>
          </div>
        </Box>
      </main>
    </div>
  );
};

export default Landing;
