import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'


const footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.ftop}>
          <div className={styles.topall}>
            <div className={styles.topone}>
            <a
              href="https://www.hourlyrooms.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            > 
            Hourlyrooms {' '} 
              <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.logo} />
            </a>
            <p className={styles.para}>We are India's number 1<br/> hourly hotel booking platform.<br/>
            You can trust us without any doubt.</p>
            <ul>
              <li><a><Image
                src="/home/dell/Downloads/p-project1/nextjs-blog/pages/components/images/Icons/pngfind.com-giant-monster-png-3815873.png"
                alt="sample image"
                width={600}
                height={400}
              /></a></li>
            </ul>
            </div>
            <div className={styles.toptwo}>

            </div>
            <div className={styles.topthree}>

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