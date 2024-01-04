import React, { useState } from 'react'
import { useEffect } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import styles from '../styles/City.module.css'
import hotelsData from '../components/hotelsData.json'
import Hotelstyles from '../styles/Hotels.module.css'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import Adv from '../public/ad2.jpg'

const city = () => {
  const imgs = [
    {
      id:0,
      value:{Adv}
    },
    {
      id:1,
      value:"https://upload.wikimedia.org/wikipedia/commons/7/76/BAHU_FORT_JAMMU_%26_KASHMIR_2.jpg"
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
    <div>
      <div className={styles.slider}>
        <img className={styles.thumbnail} src={sliderData.value} height={300} width={500} />
        {
          imgs.map((data, i)=>
          <img className={styles.smallcrousel} key={data.id} src={data.value} onClick={()=> handleClick(i)} height={70} width={100}/>)
        }
      </div>
    </div>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "2rem", fontFamily: "sans-serif", fontWeight: "bold" }}>Overheard from Media</h3>
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
    </>

  )
}

export default city