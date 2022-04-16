import { Link } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBackground}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
