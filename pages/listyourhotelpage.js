import React from 'react'
import styles from '../styles/listproperties.module.css'
import Image from 'next/image'
import PhoneUser from '../public/phoneusing.jpg'
import PhoneUser1 from '../public/phoneusing1.jpg'
import { FaRegCheckCircle } from "react-icons/fa";
import Header from '../pages/listyourpropheader.js'
import Footer from '../pages/listyourpropfooter.js'


const listproperty = () => {
  return (
    <div>
      <Header/>
      <div className={styles.backgrounddiv}>
        <div className={styles.uppermaindiv}>
          <div>
            <div>
              <p className={styles.headingpara}>Reach a unique global customer base</p>
            </div>
          </div>
          <div className={styles.griddiv}>
            <div className={styles.cardsdiv}>
              <div>
                <p className={styles.number}>2/3</p>
              </div>
              <div className={styles.text}>of holiday rental guests return to book with us again</div>
            </div>
            <div className={styles.cardsdiv}>
              <div>
                <p className={styles.number}>48%</p>
              </div>
              <div className={styles.text}>of nights booked on Booking.com in 2022 were for international stays</div>
            </div>
            <div className={styles.cardsdiv}>
              <div>
                <p className={styles.number}>33%</p>
              </div>
              <div className={styles.text}>of holiday rental customers are Genius loyalty level 2 or 3 who tend to spend more per booking</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.maindiv}>
          <div className={styles.leftdiv}>
            <div>
              <div className={styles.headingpara}><p>Get quality bookings quickly</p></div>
              <div className={styles.ticksmaindiv}>
                {dataArr?.map((e) => {
                  return (
                    <div key={e?.id} className={styles.ticksdiv}>
                    <FaRegCheckCircle fontSize={32} />
                    <p className={styles.textarea}>{e?.data}</p>
                  </div>
                  )
                })}

              </div>
            </div>
          </div>
          <div className={styles.rightdiv}>
            <div className={styles.phoneuserimg}>
              <Image src={PhoneUser} width={750} height={750}/>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className={styles.midcontent}>
          <div className={styles.midcontentpart1}>
          <div className={styles.phoneuserimg}>
              <Image src={PhoneUser1} className={styles.secondimg} width={550} height={400}/>
            </div>
          </div>
          <div className={styles.midcontentpart2}>
          <div className={styles.belowtextelements}>
          <div className={styles.headingpara}><p>Maintain full control over your property and finances</p></div>
          <div className={styles.ticksmaindiv}>
                {data2Arr?.map((e) => {
                  return (
                    <div key={e?.id} className={styles.ticksdiv}>
                    <FaRegCheckCircle fontSize={32} />
                    <p className={styles.textarea}>{e?.data}</p>
                  </div>
                  )
                })}

              </div>
          </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default listproperty


// data array below

const dataArr = [
  {
    id:1,
    data:"Your review scores on other travel websites are converted and displayed on your property page until you receive your first Booking.com guest review"
  },
  {
    id:2,
    data:"Stand out in search results with the ‘New to Booking.com’ label on your property"
  },
  {
    id:3,
    data:"Our listing strength checklist helps you complete your property setup to attract more guests"
  },
  {
    id:4,
    data:"Get discovered quickly with our innovative Quality rating system"
  },
  {
    id:5,
    data:"Sell up to 30% more nights with the Smart Flex Reservations programme, which adds flexibility to some of your existing cancellation policies to attract more guests. If a guest cancels, we’ll look for a replacement"
  },
]
const data2Arr = [
  {
    id:1,
    data:"For extra reassurance, we’ll facilitate damage payment requests on your behalf in case of damage up to €/$/£500"
  },
  {
    id:1,
    data:"Receive protection against liability claims from guests and neighbours up to €/£/$1,000,000 for every reservation"
  }
]