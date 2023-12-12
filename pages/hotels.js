import React from 'react'
import styles from '../styles/Home.module.css'
import hotelsData from '../components/hotelsData.json'
import Hotelstyles from '../styles/Hotels.module.css'
import Hoteldetail from '../pages/Hoteldetail'
import Router, { useRouter } from 'next/router'


const hotels = () => {


  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={Hotelstyles.topdiv}>
      

        {hotelsData?.map((hotel)=>{
          console.log(hotel, 'imagesss');
          return(
            <div onClick={()=> router.push("/Hoteldetail")} className={Hotelstyles.maindiv} key={hotel.id}>
            <img className="w-full" src={hotel.image} alt="Mountain"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{hotel.name}</div>
              <p className="text-gray-700 text-base">
              {hotel.location}
              </p>
              <div className={Hotelstyles.price}>{hotel.price}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag2}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{hotel.tag3}</span>
          </div>
            </div>
          )
        })}
        </div>
    </div>

  )
}

export default hotels