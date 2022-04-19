import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

const styles = {
  "&.MuiButton-contained": {
    color: "black",
    backgroundColor: "white",
    boxShadow: 0,
  },
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Button
          color="inherit"
          onClick={handleMenu}
          sx={styles}
          variant="contained"
          aria-haspopup="true"
        >
          Order
        </Button>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.ubereats.com/ca/store/tricity-japanese-salmon-bowl/WvSDddCeWYyigU1N0G8KJw"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Uber Eats
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.skipthedishes.com/tricity-japanese-salmon-bowl"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              Skip the Dishes
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a
              href="https://www.doordash.com/store/tricity-japanese-salmon-bowl-cambridge-23025709/"
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              DoorDash
            </a>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
