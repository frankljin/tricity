import React from 'react'
import styles from "../styles/Footer.module.css"  
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.footerCol}>
                    <h4>Locations & hours</h4>
                    <ul>
                        <li><a>location</a></li>
                        <li><a>9am-12pm</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>contact</h4>
                    <ul>
                        <li><a><NavLink to={"/about"}>about us </NavLink></a></li>
                        <li><a onClick={() => window.open("mailto:idktheiremail@gmail.com")}>Email</a></li>
                        <li><a onClick={() => window.open("tel:6966966969")}>phone</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Order</h4>
                    <ul>
                        <li><a href="">idk</a></li>
                        <li><a href="">what</a></li>
                        <li><a href="">to</a></li>
                        <li><a href="">put</a></li>
                    </ul>
                </div>
                {/* <div className={styles.footerCol}>
                    <h4>follow us</h4>
                    <div className={styles.social-links}>
                        <a href="#"><i className={styles.fab stylesfa-facebook-f}></i></a>
                        <a href="#"><i className={styles.fab fa-twitter}></i></a>
                        <a href="#"><i className={styles.fab fa-instagram}></i></a>
                        <a href="#"><i className={styles.fab fa-linkedin-in}></i></a>
                    </div>
                </div> */}
            </div>
            <div className={styles.madeBy}>
                <p>Website made by SARC media</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer