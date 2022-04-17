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
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
          component={NavLink}
          to={"/"}
          style={{ textDecoration: "none", color: "black" }}
        >
          Tricity
        </Typography>
        <Button color="inherit" component={NavLink} to={"/about"} sx={styles} variant="contained">
          About
        </Button>
        <Button color="inherit" component={NavLink} to={"/menu"} sx={styles} variant="contained">
          Menu
        </Button>
        <Button color="inherit" component={NavLink} to={"/contact"} sx={styles} variant="contained">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
