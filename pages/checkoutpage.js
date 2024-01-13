import React from 'react'
import styles from '../styles/Checkout.module.css'
import { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaHandMiddleFinger } from "react-icons/fa";
import { LuBanana } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";

const checkoutpage = () => {
    const [coupon, setCoupon] = useState(false)
    const handleClick = () =>{
        setCoupon(!coupon)
    }
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
                <div style={{ display: "flex", backgroundColor: "rgb(0, 145, 0)", alignItems: "center" }}>
                    <div style={{ padding: "2rem" }}><img src='./check.svg' height={50} width={100}></img></div>
                    <div>
                        <div style={{ marginBottom: "1rem" }}><p style={{ margin: "0", color: "white", fontWeight: "bold", fontSize: "25px" }}>Booking Confirmed!</p></div>
                        <div><p style={{ margin: "0", color: "white" }}>Details has been sent to mayank@gmail.com</p></div>
                    </div>
                </div>
                <div style={{ display: "flex", margin: "1rem 4rem", justifyContent: "space-between" }}>
                    <div style={{ width: "50%" }}>
                        <div>
                            <div style={{ fontWeight: "bold", fontSize: "25px", borderBottom: "1px solid grey", width: "80%", margin: "1rem 2rem", paddingBottom: "1rem" }}>Guest Information</div>
                            <div style={{ margin: "0 2rem", fontWeight: "bold", color: "rgb(83, 83, 83)" }}>Guest Name</div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "0 2rem", width: "80%" }}><div>Mayank Mishra</div><div style={{ display: "flex" }}><p style={{ marginRight: "1rem" }}>1 Room</p><p>2 Adult</p></div></div>
                            <div style={{ margin: "0 2rem", fontWeight: "bold", color: "rgb(83, 83, 83)" }}>Contact Information</div>
                            <div style={{ display: "flex", justifyContent: "space-between", margin: "0 2rem", width: "80%" }}><p>mayank@gmail.com</p><p>+91 8885588852</p></div>
                            <div style={{ display: "flex", justifyContent: "center", width: "88%", alignItems: "center", margin: "2rem 0 0 0" }}>
                                <div style={{ marginRight: "3rem", marginLeft: "3rem" }}><img src='./direction.svg' height={100} width={100}></img></div>
                                <div style={{ marginRight: "3rem", marginLeft: "3rem" }}><img src='./cancelbooking.svg' height={100} width={100}></img></div>
                                <div style={{ marginRight: "3rem", marginLeft: "3rem" }}><img src='./needhelp.svg' height={100} width={100}></img></div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", width: "88%", alignItems: "center", margin: "1rem 0 2rem 0" }}>
                                <div style={{ marginRight: "2.8rem", marginLeft: "1rem", fontSize: "18px", color: "#FF6C09", fontWeight: "bold" }}>Directions</div>
                                <div style={{ marginRight: "1.6rem", marginLeft: "2rem", fontSize: "18px", fontWeight: "bold", color: "#FF1818" }}>Cancel Booking</div>
                                <div style={{ marginRight: "1rem", marginLeft: "3rem", fontSize: "18px", color: "#FF6C09", fontWeight: "bold" }}>Need Help</div>
                            </div>
                        </div>
                        <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width: "80%", margin: "1rem 2rem" }}>
                            <div>
                                <p style={{ fontSize: "25px", fontWeight: "bold", padding: "2rem 0 0 2rem" }}>Cancellation Policy</p>
                            </div>
                            <div style={{ margin: "1rem 4.5rem 1rem 2.5rem" }}>
                                <div style={{ display: "flex", padding: "1rem 0 1rem 2.5rem" }}>
                                    <ul style={{ listStyle: "initial", color: "rgb(83, 83, 83)", fontSize: "18px" }}>
                                        <li>Un-married couples should be above 18+ years for booking.</li>
                                        <li>According to gov regulations, a valid original Photo ID has to be carried by every person above the age of 21 staying at the hotel.</li>
                                        <li>Local IDs are allowed.</li>
                                        <li>Unmarried couples are allowed.</li>
                                        <li>Smoking is allowed within the room.</li>
                                        <li>Drinking and smoking within the room.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width: "80%", margin: "1rem 2rem" }}>
                            <div>
                                <p style={{ fontSize: "25px", fontWeight: "bold", padding: "2rem 0 0 2rem" }}>Hotel Policies</p>
                            </div>
                            <div style={{ margin: "1rem 4.5rem 1rem 2.5rem" }}>
                                <div style={{ display: "flex", padding: "1rem 0 1rem 2.5rem" }}>
                                    <ul style={{ listStyle: "initial", color: "rgb(83, 83, 83)", fontSize: "18px" }}>
                                        <li>Un-married couples should be above 18+ years for booking.</li>
                                        <li>According to gov regulations, a valid original Photo ID has to be carried by every person above the age of 21 staying at the hotel.</li>
                                        <li>Local IDs are allowed.</li>
                                        <li>Unmarried couples are allowed.</li>
                                        <li>Smoking is allowed within the room.</li>
                                        <li>Drinking and smoking within the room.</li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    {coupon && (
                                <div style={{height:"100%", backgroundColor:"rgba(0,0,0, 0.347)", backdropFilter:"blur(5px)", width:"100%", position:"fixed", display:"flex", justifyContent:"center", top:"0", left:"0", alignItems:"center"}}><div style={{display:"flex", backgroundColor:"white", padding:"2rem", alignItems:"center"}}><FaHandMiddleFinger style={{fontSize:"100px", height:"120px", width:"200px", color:"red", stroke:"black"}}/><p className={styles.kela}>Congratulations you got my Kela</p><LuBanana style={{cursor:"pointer", fontSize:"50px", color:"black"}} onClick={handleClick}/></div></div>
                            )}
                    <div style={{ width: "50%", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", margin:"1rem 3rem" }}>
                        <div>
                            <div style={{ fontWeight: "bold", fontSize: "25px", borderBottom: "1px solid grey", width: "60%", margin: "1rem 2rem", paddingBottom: "1rem" }}>Booking Details</div>
                            <div style={{display:"flex"}}>
                            <div className={styles.hoteldata}>
                                <p className={styles.hotelname}>Hotel Golden Lawn</p>
                                <div className={styles.starimg}><img src="star.png" height={30} width={30} /><img src="star.png" height={30} width={30} /><img src="star.png" height={30} width={30} /></div>
                                <p className={styles.hoteladdress}><IoLocationSharp style={{fontSize:"25px", marginRight:"10px"}}/>Sakinaka Road, Maril Naka, Andheri East....</p>
                            </div>
                            <div style={{width:"50%", marginRight:"2rem"}}>
                            <img style={{borderRadius:"5px"}} src='./room.svg' height={250} width={300}></img>
                            </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", margin:"1rem 2rem", padding:"0.8rem 2rem", border:"1px solid grey", borderRadius:"8px", alignItems:"center"}}>
                                <div>
                                    <p style={{margin:"0", color: "rgb(83, 83, 83)", fontSize:"15px", marginBottom:"0.5rem", fontWeight:"bold"}}>Check-In-Date</p>
                                    <p style={{fontWeight:"bold", fontSize:"20px", marginBottom:"0.1rem"}}>Thu, 09 Nov</p>
                                    <p style={{marginBottom:"0"}}>08:00 AM</p>
                                </div>
                                <div><img src='./rightsidearrow.svg'></img></div>
                                <div>
                                    <p style={{margin:"0", color: "rgb(83, 83, 83)", fontSize:"15px", marginBottom:"0.5rem", fontWeight:"bold"}}>Check-Out-Date</p>
                                    <p style={{fontWeight:"bold", fontSize:"20px", marginBottom:"0.1rem"}}>Thu, 09 Nov</p>
                                    <p style={{marginBottom:"0"}}>11:00 AM</p>
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", margin:"2rem 2rem"}}>
                                <div style={{width:"48%", border:"1px solid grey", borderRadius:"8px", fontWeight:"bold", fontSize:"15px", alignItems:"center", textAlign:"center", paddingTop:"1rem"}}>
                                    <div style={{color: "rgb(83, 83, 83)"}}><p style={{marginBottom:"0.5rem"}}>Room & Guest Details</p></div>
                                    <div style={{fontSize:"20px", fontWeight:"bold"}}><p style={{marginBottom:"1rem"}}>1 Room, 2 Guests</p></div>
                                </div>
                                <div style={{width:"48%", border:"1px solid grey", borderRadius:"8px", fontWeight:"bold", fontSize:"15px", alignItems:"center", textAlign:"center", paddingTop:"1rem"}}>
                                    <div style={{color: "rgb(83, 83, 83)"}}><p style={{marginBottom:"0.5rem"}}>Duration</p></div>
                                    <div style={{fontSize:"20px", fontWeight:"bold"}}><p style={{marginBottom:"1rem"}}>9 Hours</p></div>
                                </div>
                            </div>
                            
                            <div onClick={handleClick} style={{margin:"1rem 2rem", cursor:"pointer"}}><img src='./coupon.svg'></img></div>
                            <div style={{border:"1px solid grey", borderRadius:"8px", margin:"1rem 2rem", padding:"1rem 2rem"}}>
                                <div style={{fontSize:"18px", fontWeight:"bold"}}>Price Breakup</div>
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", borderBottom:"1px solid grey", marginRight:"1rem", paddingBottom:"1rem", alignItems:"center"}}>
                                    <div><div>1 Room x 3 Hours</div><div>Base Price</div></div>
                                    <div>₹ 2,752</div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", borderBottom:"1px solid grey", marginRight:"1rem", paddingBottom:"1rem", alignItems:"center"}}>
                                    <div style={{color:"green", display:"flex", alignItems:"center"}}>Total Discount<CiCircleInfo style={{marginLeft:"15px", fontSize:"20px"}}/></div>
                                    <div style={{color:"green"}}>- ₹ 752</div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", borderBottom:"1px solid grey", marginRight:"1rem", paddingBottom:"1rem", alignItems:"center"}}>
                                    <div>Price after Discount</div>
                                    <div>₹ 1,752</div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", borderBottom:"1px solid grey", marginRight:"1rem", paddingBottom:"1rem", alignItems:"center"}}>
                                    <div style={{display:"flex", alignItems:"center"}}>Hotel Taxes<CiCircleInfo style={{marginLeft:"15px", fontSize:"20px"}}/></div>
                                    <div>₹ 252</div>
                                </div>
                                <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", marginRight:"1rem", paddingBottom:"1rem", alignItems:"center"}}>
                                    <div style={{fontWeight:"bold", fontSize:"20px"}}>Total Amount to be Paid</div>
                                    <div style={{fontWeight:"bold", fontSize:"20px"}}>₹ 1,752</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default checkoutpage