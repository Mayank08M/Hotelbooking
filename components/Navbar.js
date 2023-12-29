import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const navbarTabs = [
  {
    id: 1,
    item: 'About Us',
    route: 'about'
  },
  {
    id: 2,
    item: 'Contact Us',
    route: 'contact'
  },
  {
    id: 3,
    item: 'Hotels',
    route: 'hotels'
  },
  {
    id: 4,
    item: 'Cities',
    route: 'city'
  },
  {
    id: 5,
    item: 'List Hotel',
    route: 'listyourhotelpage'
  }
]

const Navbar = () => {
  let router = useRouter();

  function handleRedirectToHomepge() {
    router.push('/')
  }

  function handleRedirectToTabs(tabs) {
    router.push(`/${tabs}`)
  }

  return (
    <>
      <div className={styles.mainnav}>
        <div className={styles.belowmaindiv}>
          <div>      
                <img className={styles.navimg} onClick={handleRedirectToHomepge} src='/hor.png' style={{ height: 40, width: 100 }} />
          </div>
          {navbarTabs?.map((e) => {
            return (

              <div className={styles.navpdiv} key={e?.id} style={{padding:10 , display:"flex",alignItems:"center"}}>
              <p className={styles.navp} style={{padding:0,margin:0}}  onClick={() => handleRedirectToTabs(e?.route)} >{e?.item}</p>

              </div>
            )
          })}
        </div>
        <div className={styles.searchbox}>
        <input className={styles.search} placeholder='Search for hotels or Cities' />
        </div>
      </div>
    </>
  )
}

export default Navbar