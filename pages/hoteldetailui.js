import React from 'react'
import styles from '../styles/Hoteldetailui.module.css'
import { FaChevronDown } from "react-icons/fa";

const hoteldetailui = () => {
    return (
        <>
            <div className={styles.body}>
                <div>
                    <nav className={styles.nav}>
                        <ul className={styles.ul}>
                            <img src='./hor.png' height={30} width={110}></img>
                            <li>List your hotel</li>
                            <li>About us</li>
                            <li>Blogs</li>
                            <li>Contact us</li>
                        </ul>
                        <button className={styles.navbutton}>Login or Create account</button>
                    </nav>
                </div>
                <div style={{backgroundColor:"#FF6C09"}}>
                <div className={styles.searchinputs}>
                    <div className={styles.dropmaindiv}>
                        <form style={{display:"flex", marginTop:"8px"}}>
                    <div className={styles.dropdown}>
                        <label style={{display:"flex", alignItems:"center"}} for="fname">City,Area or Landmark<FaChevronDown style={{marginLeft:"1rem"}}/></label>
                        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="Mumbai" />    
                    </div>
                    <div className={styles.dropdown}>
                        <label style={{display:"flex", alignItems:"center"}} for="fname">Check-In Date<FaChevronDown style={{marginLeft:"1rem"}}/></label>
                        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="Wed, 9 Dec 2023" />
                    </div>
                    <div className={styles.dropdown}>
                        <label style={{display:"flex", alignItems:"center"}} for="fname">Check-In Time<FaChevronDown style={{marginLeft:"1rem"}}/></label>
                        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="2:00 PM" />
                    </div>
                    <div className={styles.dropdown}>
                        <label style={{display:"flex", alignItems:"center"}} for="fname">Rooms & Guests<FaChevronDown style={{marginLeft:"1rem"}}/></label>
                        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="1 Rooms, 2 Adults" />
                    </div>
                    </form>
                    <div className={styles.dropdownbutton}><button>Update search</button></div>
                    </div>
                </div>
                </div>
                <div className={styles.sortdiv}>
                    <div style={{fontWeight:"bold", fontSize:"20px", marginTop:"12px"}}>
                        <p>Sort By:</p>
                    </div>
                    <button className={styles.buttons}>Best Match</button>
                    <button className={styles.buttons}>Price: Low to High</button>
                    <button className={styles.buttons}>Price: High to Low</button>
                    <button className={styles.buttons}>Nearby Me</button>
                </div>
            </div>
        </>
    )
}

export default hoteldetailui