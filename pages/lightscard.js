import React from 'react'
import Hotelstyles from '../styles/Hotels.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import axios from 'axios'

const baseURL = 'http://localhost:8000'


const lightscard = () => {
  const [lightdetails, setLightdetails] = useState()

useEffect(() => {
    axios.get(`${baseURL}/lightscard`).then((response) => {
      console.log(response.data)
      setLightdetails(response.data);
    });
  }, []);


  const router = useRouter();

  return (
    <>
    <Navbar/>
    <div className={Hotelstyles.container}>
      
      <div className={Hotelstyles.topdiv}>
      

        {lightdetails?.map((light)=>{
          return(
            <div onClick={()=> router.push(`/lightscard/${lights?._id}`)} className={Hotelstyles.maindiv} key={light.id}>
            <img className="w-full h-50" src={light.image} alt="Mountain"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{light.name}</div>
              {/* <p className="text-gray-700 text-base">
              {light.location}
              </p> */}
              <div className={Hotelstyles.price}>{light.price}</div>
            </div>
            <div className="px-6 pt-1 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{light.tag1}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{light.tag2}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{light.tag3}</span>
          </div>
          <div style={{ marginTop:"1rem", padding:"0 1rem"}}>
            <div className={Hotelstyles.buynow}><button>Buy Now</button></div>
            <div className={Hotelstyles.addtocart}><button>Add to cart +</button></div>
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

export default lightscard