import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import styles from '../styles/City.module.css'
import hotelsData from '../components/hotelsData.json'
import Hotelstyles from '../styles/Hotels.module.css'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'

const city = () => {
  const imgs = [
    {
      id:0,
      value:"ad2.jpg"
    },
    {
      id:1,
      value:"offer.svg"
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
      <div className={styles.slider}>
        <img className={styles.thumbnail} src={sliderData.value} height={640} width={1728} />
        {
          imgs.map((data, i)=>
          <img className={styles.smallcrousel} key={data.id} src={data.value} onClick={()=> handleClick(i)} height={70} width={100}/>)
        }
      </div>
    </div>
    <div>
      <div className={styles.hotelcardsheader}>
      <p>Recommended Rooms Nearby You</p>
      </div>
      <div className={styles.hotelcardsmaindiv}>
      <div className={styles.hotelscard}>
            <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Premium Stays</p>
              </div>
            <div className={styles.ratingdiv}><div className={styles.rating}>3.5</div>Very Good</div>
            <div className={styles.hoteldata}>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}>Andheri East....</p>
              <div className={styles.starimg}><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/></div>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", marginRight:"8px"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"22px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}> ₹ 2677</p>
                  <div className={styles.cutprice}>

                  </div>
                </div>
                
              </div>
            <div className={styles.discountedprice}>
              <p className={styles.dphead}>Starting from</p>
              <p className={styles.dprice}>₹ 10,500</p>
              </div>
        </div>
        <div className={styles.hotelscard}>
        <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/>
              <p>Premium Stays</p>
              </div>
            <div className={styles.ratingdiv}><div className={styles.rating}>3.5</div>Very Good</div>
            <div className={styles.hoteldata}>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}>Andheri East....</p>
              <div className={styles.starimg}><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/></div>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", marginRight:"8px"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"22px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}> ₹ 2,677</p>
                  <div className={styles.cutprice}>

                  </div>
                </div>
                
              </div>
            <div className={styles.discountedprice}>
              <p className={styles.dphead}>Starting from</p>
              <p className={styles.dprice}>₹ 10,500</p>
              </div>
        </div>
        <div className={styles.hotelscard}>
            <div className={styles.hotelimagediv}>
              <img src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"/><p>Premium Stays</p></div>
            <div className={styles.ratingdiv}><div className={styles.rating}>3.5</div>Very Good</div>
            <div className={styles.hoteldata}>
              <p className={styles.hotelname}>The Star Hotel</p>
              <p className={styles.hoteladdress}>Andheri East....</p>
              <div className={styles.starimg}><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/><img src="star.png" height={20} width={20}/></div>
            </div>
            <div style={{display:"flex", justifyContent:"flex-end", marginRight:"8px"}}>
                <div style={{position:"relative"}}>
                  <p style={{fontSize:"22px", fontWeight:"bold", color:"darkgrey" , padding:0, margin:0}}> ₹ 2677</p>
                  <div className={styles.cutprice}>

                  </div>
                </div>
                
              </div>
            <div className={styles.discountedprice}>
              <p className={styles.dphead}>Starting from</p>
              <p className={styles.dprice}>₹ 10,500</p>
              </div>
        </div>
      </div>
    </div>
      <div>
        <p className={styles.mediahead}>Overheard from Media</p>
        <div>
          <div className={styles.maincarddiv}>
          <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
        <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
        <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
        <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
        <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
        <div className={styles.card}>
            <div className={styles.innercard}>
            <div className={styles.cardheader}>"</div>
            <div className={styles.cardcontent}>
              <p>Introducing hotel booking ka chota recharge Hourly Rooms</p>
            </div>
            <div><img className={styles.logoimg} src='https://e7.pngegg.com/pngimages/486/101/png-clipart-apptrailers-dailyhunt-india-mobile-phones-india-text-rectangle.png'></img></div>
            <div className={styles.cardfooter}>
              <a href="#" className={styles.btn}>Read Full Article<FaAngleRight /></a>
            </div>
            </div>
        <div className={styles.hr}></div>
        </div>
          </div>
        </div>
      </div>
      </div>
    </>

  )
}

export default city