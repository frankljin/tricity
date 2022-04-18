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
                        <li><a>990 Bishop St N<br /> Cambridge, ON N3H 4W5<br /> Canada</a></li>
                        <li><a>12-9pm daily</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>contact</h4>
                    <ul>
                        <li><a><NavLink to={"/about"}>about us </NavLink></a></li>
                        <li><a onClick={() => window.open("mailto:idktheiremail@gmail.com")}>Email</a></li>
                        <li><a onClick={() => window.open("tel:5482550431")}>phone</a></li>
                    </ul>
                </div>
                <div className={styles.footerCol}>
                    <h4>Order</h4>
                    <ul>
                        <li><a href="https://www.ubereats.com/ca/store/tricity-japanese-salmon-bowl/WvSDddCeWYyigU1N0G8KJw?utm_source=google&utm_medium=organic&utm_campaign=place-action-link">Uber Eats</a></li>
                        <li><a href="https://www.skipthedishes.com/tricity-japanese-salmon-bowl?utm_source=google&utm_medium=organic&utm_campaign=gpa">Skip The Dishes</a></li>
                        <li><a href="https://www.doordash.com/en-CA/store/tricity-japanese-salmon-bowl-cambridge-23025709/?utm_campaign=gpa">DoorDash</a></li>
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
                <p>Website made by SARC Labs</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer