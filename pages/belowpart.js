import React from 'react'
import styles from '../styles/Below.module.css'
import { LuParkingCircle } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineElevator } from "react-icons/md";
import { IoCardSharp } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { BsDisplay } from "react-icons/bs";
import { FaBottleWater } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const belowpart = () => {
  return (
    <>
    <div className={styles.body}>
        <div>
            <p style={{fontSize:"25px", fontWeight:"bold", padding:"1rem 0 1rem 2rem"}}>Amenities & Facilities</p>
        </div>
        <div style={{borderBottom:"1px solid grey", margin:"1rem 4.5rem 1rem 2.5rem", color:"rgb(83, 83, 83)"}}>
        <div style={{display:"flex", padding:"1rem 0 1rem 2.5rem"}}>
            <div style={{display:"flex", alignItems:"center", width:"21%"}}><LuParkingCircle style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Car Parking</p></div>
            <div style={{display:"flex", alignItems:"center", width:"23%"}}><TbAirConditioning style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Air Conditioner</p></div>
            <div style={{display:"flex", alignItems:"center", width:"15%"}}><LuParkingCircle style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Geyser</p></div>
            <div style={{display:"flex", alignItems:"center", width:"23%"}}><GiMeal style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Dining Area</p></div>
        </div>
        <div style={{display:"flex", padding:"1rem 0 1rem 2.5rem"}}>
            <div style={{display:"flex", alignItems:"center", width:"21%"}}><MdOutlineElevator style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Elevator</p></div>
            <div style={{display:"flex", alignItems:"center", width:"23%"}}><IoCardSharp style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Cards are Accepted</p></div>
            <div style={{display:"flex", alignItems:"center", width:"15%"}}><BsDisplay style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>TV</p></div>
            <div style={{display:"flex", alignItems:"center", width:"23%"}}><FaBottleWater style={{fontSize:"30px", marginRight:"10px"}}/><p style={{margin:"0", fontSize:"25px"}}>Water</p></div>
        </div>
        </div>
        <div>
            <p style={{fontSize:"25px", fontWeight:"bold", padding:"1rem 0 1rem 2rem"}}>Hotel Policies</p>
        </div>
        <div style={{borderBottom:"1px solid grey", margin:"1rem 4.5rem 1rem 2.5rem"}}>
        <div style={{display:"flex", padding:"1rem 0 1rem 2.5rem"}}>
            <ul style={{listStyle:"initial", color:"rgb(83, 83, 83)", fontSize:"20px"}}>
                <li>Un-married couples should be above 18+ years for booking.</li>
                <li>According to gov regulations, a valid original Photo ID has to be carried by every person above the age of 21 staying at the hotel.</li>
                <li>Local IDs are allowed.</li>
                <li>Unmarried couples are allowed.</li>
                <li>Smoking is allowed within the room.</li>
                <li>Drinking and smoking within the room.</li>
            </ul>
            
        </div>
        </div>
        <div>
            <p style={{fontSize:"25px", fontWeight:"bold", padding:"1rem 0 1rem 2rem"}}>Cancellation Policy</p>
        </div>
        <div style={{margin:"1rem 4.5rem 1rem 2.5rem"}}>
        <div style={{display:"flex", padding:"1rem 0 1rem 2.5rem"}}>
            <ul style={{listStyle:"initial", color:"rgb(83, 83, 83)", fontSize:"20px"}}>
                <li>Un-married couples should be above 18+ years for booking.</li>
                <li>According to gov regulations, a valid original Photo ID has to be carried by every person above the age of 21 staying at the hotel.</li>
                <li>Local IDs are allowed.</li>
                <li>Unmarried couples are allowed.</li>
                <li>Smoking is allowed within the room.</li>
                <li>Drinking and smoking within the room.</li>
            </ul>
            
        </div>
        </div>
        <div>
            <p style={{fontSize:"25px", fontWeight:"bold", padding:"1rem 0 1rem 2rem"}}>Nearby Hotels</p>
        </div>
        <div className={styles.hotelcardsmaindiv}>
        <div className={styles.hotelscard}>
        <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Economic Stays</p>
              </div>
            <div className={styles.hoteldata}>
                <div>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}><IoLocationSharp />Andheri East....</p>
              </div>
              <div style={{color:"rgb(83, 83, 83)", fontWeight:"bold", padding:"2px 8px", boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px", borderRadius:"5px", border:"0.5px solid rgba(0, 0, 0, 0.15)"}}>
                <button>View Now</button>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"15px 16px 14px 16px", alignItems:"center"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"15px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}>Rs. 2,677</p>
                  <div className={styles.cutprice}>
                  </div>
                </div>
                <div>
              <p className={styles.dprice}>Rs. 10,500</p>
              </div>
              <div className={styles.forhrs}>
              <div>For</div>
              <div style={{color:"#FF6C09", fontWeight:"bold", marginLeft:"5px"}}>3HRS</div>
              </div>
              </div>
        </div>
        <div className={styles.hotelscard}>
        <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Economic Stays</p>
              </div>
            <div className={styles.hoteldata}>
                <div>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}><IoLocationSharp />Andheri East....</p>
              </div>
              <div style={{color:"rgb(83, 83, 83)", fontWeight:"bold", padding:"2px 8px", boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px", borderRadius:"5px", border:"0.5px solid rgba(0, 0, 0, 0.15)"}}>
                <button>View Now</button>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"15px 16px 14px 16px", alignItems:"center"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"15px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}>Rs. 2,677</p>
                  <div className={styles.cutprice}>
                  </div>
                </div>
                <div>
              <p className={styles.dprice}>Rs. 10,500</p>
              </div>
              <div className={styles.forhrs}>
              <div>For</div>
              <div style={{color:"#FF6C09", fontWeight:"bold", marginLeft:"5px"}}>3HRS</div>
              </div>
              </div>
        </div>
        <div className={styles.hotelscard}>
        <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Economic Stays</p>
              </div>
            <div className={styles.hoteldata}>
                <div>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}><IoLocationSharp />Andheri East....</p>
              </div>
              <div style={{color:"rgb(83, 83, 83)", fontWeight:"bold", padding:"2px 8px", boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px", borderRadius:"5px", border:"0.5px solid rgba(0, 0, 0, 0.15)"}}>
                <button>View Now</button>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"15px 16px 14px 16px", alignItems:"center"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"15px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}>Rs. 2,677</p>
                  <div className={styles.cutprice}>
                  </div>
                </div>
                <div>
              <p className={styles.dprice}>Rs. 10,500</p>
              </div>
              <div className={styles.forhrs}>
              <div>For</div>
              <div style={{color:"#FF6C09", fontWeight:"bold", marginLeft:"5px"}}>3HRS</div>
              </div>
              </div>
        </div>
        <div className={styles.hotelscard}>
        <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Economic Stays</p>
              </div>
            <div className={styles.hoteldata}>
                <div>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}><IoLocationSharp />Andheri East....</p>
              </div>
              <div style={{color:"rgb(83, 83, 83)", fontWeight:"bold", padding:"2px 8px", boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px", borderRadius:"5px", border:"0.5px solid rgba(0, 0, 0, 0.15)"}}>
                <button>View Now</button>
              </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", margin:"15px 16px 14px 16px", alignItems:"center"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"15px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}>Rs. 2,677</p>
                  <div className={styles.cutprice}>
                  </div>
                </div>
                <div>
              <p className={styles.dprice}>Rs. 10,500</p>
              </div>
              <div className={styles.forhrs}>
              <div>For</div>
              <div style={{color:"#FF6C09", fontWeight:"bold", marginLeft:"5px"}}>3HRS</div>
              </div>
              </div>
        </div>
        <div>
            <div style={{height:"80px", width:"80px", backgroundColor:"#ff6800", color:"white", borderRadius:"50%", border:"2px solid #ff6800"}}><button style={{textAlign:"center", marginTop:"15%"}}>View More</button></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default belowpart