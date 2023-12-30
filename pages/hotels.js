import React from 'react'
import styles from '../styles/Home.module.css'
import Hotelstyles from '../styles/Hotels.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import axios from 'axios'

const baseURL = 'http://localhost:8000'


const hotels = () => {
  const [hoteldetails, setHoteldetails] = useState()

useEffect(() => {
    axios.get(`${baseURL}/hotels`).then((response) => {
      console.log(response.data)
      setHoteldetails(response.data);
    });
  }, []);


  const router = useRouter();

  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      
      <div className={Hotelstyles.topdiv}>
      

        {hoteldetails?.map((hotel)=>{
          return(
            <div onClick={()=> router.push(`/hotels/${hotel?._id}`)} className={Hotelstyles.maindiv} key={hotel.id}>
            <img className="w-full" src={hotel.image} alt="Mountain"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{hotel.name}</div>
              <p className="text-gray-700 text-base">
              {hotel.location}
              </p>
              <div className={Hotelstyles.price}>{hotel.fprice}</div>
            </div>
            <div className="px-6 pt-1 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag2}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag3}</span>
          </div>
            </div>
          )
        })}
        </div>
    </div>
    <Footer/>
    </>

  )
}

export default hotels