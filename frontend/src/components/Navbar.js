import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const styles = {
  "&.MuiButton-contained": {
    color: "black",
    backgroundColor: "white",
    boxShadow: 0,
  },
};

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          component={NavLink}
          to={"/"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipOt-vKF4ahrWl7vlG3Ac45wWIbcVR1g6aZ7RUlj=w1320-h1066-p-k-no"
            alt="logo"
            style={{ maxWidth: 80, marginTop: 10 }}
          />
        </Typography>

        <Button
          color="inherit"
          component={NavLink}
          to={"/about"}
          sx={styles}
          variant="contained"
        >
          About
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={"/menu"}
          sx={styles}
          variant="contained"
        >
          Menu
        </Button>
        <Button
          color="inherit"
          component={NavLink}
          to={"/contact"}
          sx={styles}
          variant="contained"
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
