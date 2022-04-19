import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

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
      //   backgroundImage: 'url("https://norecipes.com/wp-content/uploads/2020/10/salmon-rice-008-1200x800.jpg")',
      background: "hsla(187, 83%, 65%, 1)",
      background:
        "linear-gradient(0deg, hsla(187, 83%, 65%, 1) 0%, hsla(301, 84%, 81%, 1) 34%, hsla(347, 75%, 61%, 1) 100%)",
      background:
        "-moz-linear-gradient(0deg, hsla(187, 83%, 65%, 1) 0%, hsla(301, 84%, 81%, 1) 34%, hsla(347, 75%, 61%, 1) 100%)",
      background:
        "-webkit-linear-gradient(0deg, hsla(187, 83%, 65%, 1) 0%, hsla(301, 84%, 81%, 1) 34%, hsla(347, 75%, 61%, 1) 100%)",
      filter:
        "progid: DXImageTransform.Microsoft.gradient( startColorstr='#5DE0F0', endColorstr='#F7A6F5', GradientType=1 )",
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
      width: "70%",
    },
    bottomTitle: {
      display: "flex",
    },
    subTitle: {
      fontSize: "3vh",
      color: "#ffff",
      marginTop: "0px",
      flex: "1",
      fontWeight: "bold",
      transition: "text-decoration-color cubic-bezier(.17,.67,.29,.9) 0.4s",
      textDecorationColor: "transparent",
      "&:hover": {
        textDecorationColor: "#ffffff",
      },
    },
    hContainer: {
      margin: "7px",
      transition: "transform cubic-bezier(.17,.67,.29,.9) 0.3s",
      "&:hover": {
        transform: "translateX(15%)",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <main>
        <Box>
          <h1 className={classes.maintitle}>Tricity Japanese Salmon Bowl</h1>
          <div className={classes.bottomTitle}>
            <h2 className={classes.hContainer}>
              <NavLink to={"/about"} className={classes.subTitle}>
                About
              </NavLink>
            </h2>
          </div>
          <div className={classes.bottomTitle}>
            <h2 className={classes.hContainer}>
              <NavLink to={"/menu"} className={classes.subTitle}>
                Menu
              </NavLink>
            </h2>
          </div>
          <div className={classes.bottomTitle}>
            <h2 className={classes.hContainer}>
              <NavLink to={"/contact"} h2 className={classes.subTitle}>
                Contact
              </NavLink>
            </h2>
          </div>
        </Box>
      </main>
    </div>
  );
};

export default Landing;
