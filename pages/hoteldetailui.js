import React, { useState } from 'react'
import { useEffect } from 'react';
import styles from '../styles/Hoteldetailui.module.css'
import { FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { PiCheckCircleLight } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import { LuParkingCircle } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { FaSwimmingPool } from "react-icons/fa";

const hoteldetailui = () => {
    const imgs = [
        {
            id: 0,
            value: "man2.jpg"
        },
        {
            id: 1,
            value: "man1.jpg"
        }
    ];
    const [sliderData, setSliderData] = useState(imgs[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % imgs.length;
            setSliderData(imgs[nextIndex]);
            setCurrentIndex(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex, imgs]);

    const handleClick = (index) => {
        setSliderData(imgs[index]);
        setCurrentIndex(index);
    };
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
                <div style={{ backgroundColor: "#FF6C09" }}>
                    <div className={styles.searchinputs}>
                        <div className={styles.dropmaindiv}>
                            <form style={{ display: "flex", marginTop: "8px" }}>
                                <div className={styles.dropdown}>
                                    <label style={{ display: "flex", alignItems: "center" }} for="fname">City,Area or Landmark<FaChevronDown style={{ marginLeft: "1rem" }} /></label>
                                    <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="Mumbai" />
                                </div>
                                <div className={styles.dropdown}>
                                    <label style={{ display: "flex", alignItems: "center" }} for="fname">Check-In Date<FaChevronDown style={{ marginLeft: "1rem" }} /></label>
                                    <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="Wed, 9 Dec 2023" />
                                </div>
                                <div className={styles.dropdown}>
                                    <label style={{ display: "flex", alignItems: "center" }} for="fname">Check-In Time<FaChevronDown style={{ marginLeft: "1rem" }} /></label>
                                    <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="2:00 PM" />
                                </div>
                                <div className={styles.dropdown}>
                                    <label style={{ display: "flex", alignItems: "center" }} for="fname">Rooms & Guests<FaChevronDown style={{ marginLeft: "1rem" }} /></label>
                                    <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="1 Rooms, 2 Adults" />
                                </div>
                            </form>
                            <div className={styles.dropdownbutton}><button>Update search</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.sortdiv}>
                    <div style={{ fontWeight: "bold", fontSize: "20px", marginTop: "12px" }}>
                        <p>Sort By:</p>
                    </div>
                    <button className={styles.buttons}>Best Match</button>
                    <button className={styles.buttons}>Price: Low to High</button>
                    <button className={styles.buttons}>Price: High to Low</button>
                    <button className={styles.buttons}>Nearby Me</button>
                </div>
                <div style={{ backgroundColor: "rgb(247, 240, 230)" }}>
                    <div className={styles.matchdiv}><button className={styles.matchp}>Best Match<FaAngleRight /></button><p style={{ margin: "10px 30px" }}>Hotels in Mumbai</p></div>
                    <div style={{ display: "flex" }}>
                        <div className={styles.filtermaindiv}>
                            <div className={styles.filterdiv}><p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "0" }}>Filters</p><button style={{ fontSize: "18px", color: "grey" }}>Clear</button>
                            </div>
                            <br />
                            <div style={{ borderBottom: "1px solid grey" }}>
                                <div className={styles.popfdiv}><p style={{ fontSize: "18px", color: "rgb(103, 103, 103)", fontWeight: "bold" }}>Popular Filters</p>
                                    <input className={styles.popinput} type="checkbox" id="vehicle1" name="filter1" value="Couple Friendly" />
                                    <label className={styles.poplabel} for="filter1">Couple Friendly</label><br />
                                    <input className={styles.popinput} type="checkbox" id="vehicle2" name="filter2" value="Travellers Adda" />
                                    <label className={styles.poplabel} for="filter2">Travellers Adda</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter3" name="vehicle3" value="Devotee Special" />
                                    <label className={styles.poplabel} for="filter3">Devotee Special</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">Family Travellers</label><br />
                                </div>
                            </div>
                            <br />
                            <div style={{ borderBottom: "1px solid grey" }}>
                                <div className={styles.popfdiv}><p style={{ fontSize: "18px", color: "rgb(103, 103, 103)", fontWeight: "bold" }}>Price</p>
                                    <input className={styles.popinput} type="checkbox" id="vehicle1" name="filter1" value="Couple Friendly" />
                                    <label className={styles.poplabel} for="filter1">Under ₹2,000</label><br />
                                    <input className={styles.popinput} type="checkbox" id="vehicle2" name="filter2" value="Travellers Adda" />
                                    <label className={styles.poplabel} for="filter2">₹2,000 to ₹4,000</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter3" name="vehicle3" value="Devotee Special" />
                                    <label className={styles.poplabel} for="filter3">₹4,000 to ₹6,000</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">₹6,000 to ₹8,000</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">₹8,000 to ₹20,000</label><br />
                                </div>
                            </div>
                            <br />
                            <div style={{ borderBottom: "1px solid grey" }}>
                                <div className={styles.popfdiv}><p style={{ fontSize: "18px", color: "rgb(103, 103, 103)", fontWeight: "bold" }}>Hotel Stars</p>
                                    <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
                                        <button className={styles.ratebutton}><p style={{ margin: "0" }}>1</p><FaStar className={styles.ratingstar} /></button>
                                        <button className={styles.ratebutton}><p style={{ margin: "0" }}>2</p><FaStar className={styles.ratingstar} /></button>
                                        <button className={styles.ratebutton}><p style={{ margin: "0" }}>3</p><FaStar className={styles.ratingstar} /></button>
                                        <button className={styles.ratebutton}><p style={{ margin: "0" }}>4</p><FaStar className={styles.ratingstar} /></button>
                                        <button className={styles.ratebutton}><p style={{ margin: "0" }}>5</p><FaStar className={styles.ratingstar} /></button>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div style={{ borderBottom: "1px solid grey" }}>
                                <div className={styles.popfdiv}><p style={{ fontSize: "18px", color: "rgb(103, 103, 103)", fontWeight: "bold" }}>User Ratings</p>
                                    <input className={styles.popinput} type="checkbox" id="vehicle1" name="filter1" value="Couple Friendly" />
                                    <label className={styles.poplabel} for="filter1">Excellent : 4.2+</label><br />
                                    <input className={styles.popinput} type="checkbox" id="vehicle2" name="filter2" value="Travellers Adda" />
                                    <label className={styles.poplabel} for="filter2">Very Good : 3.5+</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter3" name="vehicle3" value="Devotee Special" />
                                    <label className={styles.poplabel} for="filter3">Good : 3+</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">Average : 1+</label><br />
                                </div>
                            </div>
                            <br />
                            <div style={{ borderBottom: "1px solid grey" }}>
                                <div className={styles.popfdiv}><p style={{ fontSize: "18px", color: "rgb(103, 103, 103)", fontWeight: "bold" }}>Amenities</p>
                                    <input className={styles.popinput} type="checkbox" id="vehicle1" name="filter1" value="Couple Friendly" />
                                    <label className={styles.poplabel} for="filter1">First Aid Kit</label><br />
                                    <input className={styles.popinput} type="checkbox" id="vehicle2" name="filter2" value="Travellers Adda" />
                                    <label className={styles.poplabel} for="filter2">Air Conditioning</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter3" name="vehicle3" value="Devotee Special" />
                                    <label className={styles.poplabel} for="filter3">Internet - Wifi</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">Wake-Up Call</label><br />
                                    <input className={styles.popinput} type="checkbox" id="filter2" name="vehicle2" value="Family Travellers" />
                                    <label className={styles.poplabel} for="filter2">Car Parking</label><br />
                                </div>
                            </div>
                            <br />
                            <div className={styles.filterdiv}><p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "0" }}></p><button style={{ fontSize: "18px", color: "grey" }}></button>
                            </div>
                        </div>
                        <div style={{ width: "77%" }}>
                            <div style={{ display: "flex", marginLeft: "2rem", marginRight: "2rem", backgroundColor: "white", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;", justifyContent: "space-between" }}>
                                <div>
                                    <div className={styles.hotelimagediv}>
                                        <div className={styles.slider}>
                                            <img className={styles.thumbnail} src={sliderData.value} height={800} width={400} />
                                            <p>Premium Stays</p>
                                        </div>
                                        <div style={{display:"flex", justifyContent:"center", paddingRight:"1rem"}}>
                                        {
                                            imgs.map((data, i) =>
                                            <div style={{paddingRight:"15px", paddingTop:"15px"}}>
                                                <img className={styles.smallcrousel} key={data.id} src={data.value} onClick={() => handleClick(i)} height={70} width={100} />
                                                </div>)
                                        }
                                        </div>
                                    </div>
                                </div>

                                <div style={{ margin: "2rem 2rem 2rem 0", justifyContent: "space-between", width: "60%" }}>
                                    <div style={{ display: "flex" }}>
                                        <div className={styles.hoteldata}>
                                            <p className={styles.hotelname}>Hotel Golden Lawn</p>
                                            <div className={styles.starimg}><img src="star.png" height={20} width={20} /><img src="star.png" height={20} width={20} /><img src="star.png" height={20} width={20} /></div>
                                            <p className={styles.hoteladdress}><IoLocationSharp />Andheri East....</p>
                                        </div>
                                        <div className={styles.ratingdiv}><div className={styles.rating}>3.5</div>Very Good <p style={{ margin: "0 5px", color: "black" }}>( 8 Ratings )</p></div>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.5rem 7rem 0.5rem 0" }}>
                                        <p style={{ display: "flex", alignItems: "center", color: "green", fontWeight: "bold" }}><PiCheckCircleLight style={{ marginRight: "5px", fontSize: "18px" }} />Couple Friendly</p>
                                        <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "#FF6C09" }}><RxCrossCircled style={{ marginRight: "5px", fontSize: "18px" }} />Local ID not Accepted</p>
                                        <p style={{ display: "flex", alignItems: "center", fontWeight: "bold", color: "green" }}><PiCheckCircleLight style={{ marginRight: "5px", fontSize: "18px" }} />Pay at Hotel</p>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <p style={{marginRight:"2rem", marginBottom:"0"}}><LuParkingCircle style={{fontSize:"25px"}}/></p>
                                            <p style={{marginRight:"2rem", marginBottom:"0"}}><TbAirConditioning style={{fontSize:"25px"}}/></p>
                                            <p style={{marginRight:"2rem", marginBottom:"0"}}><FaSwimmingPool style={{fontSize:"25px"}}/></p>
                                            <p style={{marginRight:"2rem", marginBottom:"0"}}>+7 more</p>
                                        </div>
                                        <div style={{display:"flex", alignItems:"baseline", marginTop:"2rem", marginRight:"4rem"}}>
                                            <p style={{marginRight:"10px", marginBottom:"0"}}>Full Day</p>
                                            <div style={{ position: "relative" }}>
                                                <p style={{ fontSize: "22px", fontWeight: "bold", color: "darkgrey", padding: 0, margin: 0 }}> ₹ 2677</p>
                                                <div className={styles.cutprice}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-between", marginTop:"1rem", width:"90%"}}>
                                        <div className={styles.pricesdiv}><p style={{marginBottom:"0", fontSize:"25px", fontWeight:"bold"}}> ₹700</p><p style={{marginBottom:"0", color:"#FF6C09", fontWeight:"bold"}}>3HRS</p></div>
                                        <div className={styles.pricesdiv}><p style={{marginBottom:"0", fontSize:"25px", fontWeight:"bold"}}>₹1200</p><p style={{marginBottom:"0", color:"#FF6C09", fontWeight:"bold"}}>6HRS</p></div>
                                        <div className={styles.pricesdiv}><p style={{marginBottom:"0", fontSize:"25px", fontWeight:"bold"}}>₹1400</p><p style={{marginBottom:"0", color:"#FF6C09", fontWeight:"bold"}}>9HRS</p></div>
                                        <div className={styles.pricesdiv}><p style={{marginBottom:"0", fontSize:"25px", fontWeight:"bold"}}>₹1600</p><p style={{marginBottom:"0", color:"#FF6C09", fontWeight:"bold"}}>12HRS</p></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default hoteldetailui