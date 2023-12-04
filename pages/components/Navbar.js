import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.topnav}>
        <ul>
          <div className={styles.listitem}>
          <a href="/">
          <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.navlogo} /></a>
          <Link className={styles.navlink}href={'/about'}><li>About US</li></Link>
          <Link className={styles.navlink}href={'/contact'}><li>Contact US</li></Link>
          <Link className={styles.navlink}href={'/hotels'}><li>Hotels</li></Link>
          <Link className={styles.navlink}href={'/city'}><li>City</li></Link>
          </div>
          <div>
          <input className={styles.listsearch} type="text" placeholder="Type City or Hotel.."></input>
          </div>
        </ul>
      </nav>
      </>
  )
}

export default Navbar