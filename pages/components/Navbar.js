import React from 'react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

const navbarTabs = [
  {
    id:1,
    item:'About Us',
    route:'about'
  },
  {
    id:2,
    item:'Contact Us',
    route: 'contact'
  },
  {
    id:3,
    item:'Hotels',
    route:'hotels'
  },
  {
    id:4,
    item:'Cities',
    route:'/'
  }
]

const Navbar = () => {
  let router =useRouter();

  function handleRedirectToHomepge(){
    router.push('/')
  }

  function handleRedirectToTabs(tabs){
    router.push(`/${tabs}`)
  }
  return (
    <>
    <nav className={styles.topnav}>
        <ul>
          <div className={styles.listitem}>
          <img src="/hor.png" alt="Hourlyrooms Logo" className={styles.navlogo} onClick={handleRedirectToHomepge} />
          {navbarTabs?.map((e) => {
            return (
          <p className={styles.navlink} key={e?.id} onClick={() => handleRedirectToTabs(e?.route)} >{e?.item}</p>
            )
          })}
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