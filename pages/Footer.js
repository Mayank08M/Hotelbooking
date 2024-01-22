import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Twitter from '../public/images/Icons/twittericon.png'
import Insta from '../public/images/Icons/instaicon.png'
import Facebook from '../public/images/Icons/fbicon.png'
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";


const footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ftop}>
          <div className={styles.topall}>
            <div className={styles.topone}>
              <div className={styles.toplogodiv}>
            <a
              className={styles.toplogo}
              href="https://www.hourlyrooms.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            > 
            Hourlyrooms {' '} 
              <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.logo} />
            </a>
            </div>
            <p className={styles.para}>We are India's number 1<br/> hourly hotel booking platform.<br/>
            You can trust us without any doubt.</p>
            <ul className={styles.iconul}>
              <li><a href="https://www.facebook.com/hourlyroomsindia/" target="_blank"><Image
                src={Facebook}
                alt="facebook icon"
                width={30}
                height={20}
              /></a></li>
              <li><a href="https://www.instagram.com/hourlyrooms.co.in/" target="_blank"><Image
                src={Insta}
                alt="insta icon"
                width={30}
                height={20}
              /></a></li>
              <li><a href="https://x.com/hourly_rooms?s=20" target="_blank"><Image
                src={Twitter}
                alt="twitter icon"
                width={30}
                height={20}
              /></a></li>
            </ul>
            </div>
            <div className={styles.toptwo}>
              <div className={styles.divhead}>
                <p>Explore</p>
              </div>
              <div className={styles.content}>
                <ul className={styles.quicklink}>
                  <li className={styles.linkli}><div className={styles.linka} href="/">Home</div></li>
                  <li className={styles.linkli}><div className={styles.linka} href="/hotels">Hotels</div></li>
                  <li className={styles.linkli}><div className={styles.linka} href="/about">About</div></li>
                  <li className={styles.linkli}><div className={styles.linka} href="/contact">Contact Us</div></li>
                </ul>
              </div>
            </div>
            <div className={styles.topthree}>
            <div className={styles.divhead}>
                <p>Careers</p>
              </div>
              <div className={styles.content}>
                <ul className={styles.quicklink}>
                  <li className={styles.linkli}><a className={styles.linka} href="#">Jobs</a></li>
                  <li className={styles.linkli}><a className={styles.linka} href="#">Employees</a></li>
                  <li className={styles.linkli}><a className={styles.linka} href="#">Benefits</a></li>
                </ul>
              </div>

            </div>
            <div className={styles.topfour}>
            <div className={styles.divheadl}>
                <p>Contact</p>
              </div>
              <div className={styles.content}>
                <ul className={styles.contactlist}>
                  <li className={styles.linkli}><div className={styles.linka} href="#"><IoCallOutline style={{marginRight:"1rem"}}/>+91 2546317825</div></li>
                  <li className={styles.linkli}><div className={styles.linka} href="#"><CiMail style={{marginRight:"1rem"}}/>care@hourlyrooms.co.in </div></li>
                  <li className={styles.linkli}><div className={styles.linka} href="#"><IoLocationOutline style={{marginRight:"1rem"}}/>Antariksh House,Marol</div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fbottom}>
        <a
          href="https://www.hourlyrooms.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.logo} />
        </a>
        <p className={styles.rights}>All rights reserved @2023</p>
        </div>
      </div>
        
      </footer>
    </div>
  )
}

export default footer