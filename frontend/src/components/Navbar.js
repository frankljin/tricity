import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBackground}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            component={NavLink}
            to={"/"}
            style={{ textDecoration: "none", color: "unset" }}
          >
            Tricity
          </Typography>
          <Button color="inherit" component={NavLink} to={"/about"}>
            About
          </Button>
          <Button color="inherit" component={NavLink} to={"/menu"}>
            Menu
          </Button>
          <Button color="inherit" component={NavLink} to={"/contact"}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
