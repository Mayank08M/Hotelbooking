import React, { useState } from "react";
import styles from '../styles/Tempnav.module.css'

import navlogo from "../public/nav-logo.svg";
import hoverLogo from "../public/hover.svg";
import Booking from "../public/Booking.svg";
import Wishlist from "../public/Wishlist.svg";

const Navbar = () => {
  const [hoverin, setHoverin] = useState(false);
  const handleHover = () => {
    setHoverin(!hoverin);
  };
  
  return (
    <>
      <div className={styles.navbarcontainer}>
        <div className={styles.logolinks}>
          <div className={styles.logo}>
            <img src={navlogo.src} alt="Logo" />
          </div>
          <div>
            <ul className={styles.navlinks}>
              <li>
                <a href="/">List Your Hotel</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Blogs</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div
        onMouseLeave={handleHover} onMouseEnter={handleHover}
        >
          <div className={styles.hoverprofile}>
            <div className={styles.ellipse}>
              <p>L</p>
            </div>
            <div className={styles.hiuser}>Hi Lavanitha</div>
            <div>
              <img src={hoverLogo.src} alt="Logo" />
            </div>
            {hoverin && (
              <div className={styles.dropdown}>
                <div className={styles.dr1}>
                  <div className={styles.ellipsedr}>
                    <p>L</p>
                  </div>
                  <div>
                    <p className={styles.drUN}>Lavanitha G</p>
                    <p className={styles.drUP}>View Your Profile</p>
                  </div>
                </div>
                <div className={styles.dr1}>
                  <img
                    src={Booking.src}
                    alt="Booking"
                    style={{ marginRight: "1.5rem" }}
                  />
                  <div>
                    <p className={styles.dr21}>My Bookings</p>
                    <p className={styles.dr22}>Mange your bookings</p>
                  </div>
                </div>
                <hr
                  style={{margin: "5px 0" }}
                ></hr>
                <div className={styles.dr1}>
                <img
                    src={Wishlist.src}
                    alt="Wishlist"
                    style={{ marginRight: "2vh" }}
                  />
                  <div>
                    <p className={styles.dr21}>My Wishlist</p>
                    <p className={styles.dr32}>Your most loved hotels</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;