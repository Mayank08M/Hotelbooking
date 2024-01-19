import React from 'react'
import Aboutstyles from '../styles/About.module.css'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'

const about = () => {
  return (
    <>
    <Navbar/>
    <div className={Aboutstyles.container}>
      <section className={Aboutstyles.about}>
        <h1 style={{color:"red"}}>About Us</h1>
        <p>ShivShakti Enterprises is Growing Daily!!!</p>
        <div className={Aboutstyles.aboutinfo}>
            <div className={Aboutstyles.aboutimg}>
                <img src="/shivshakti.png" alt="Hourlyrooms Logo"/>
            </div>
            <div className={Aboutstyles.paradiv}>
     <p>Shivshakti enterprises is a well experienced light vendor in Mumbai since <strong>2005.</strong> Customer satisfaction is our <strong>first priority</strong>.
     </p>
                <button className={Aboutstyles.button}>Read More...</button>
            </div>
        </div>
    </section>
 
    <section className={Aboutstyles.team}>
        <h1>Meet Our Team</h1>
        <div className={Aboutstyles.teamcards}>
            <div className={Aboutstyles.card}>
                <div className={Aboutstyles.cardimg}>
                    <img src="/man1.jpg" alt="User 1"/>
                </div>
                <div className={Aboutstyles.cardinfo}>
                    <h2 className={Aboutstyles.cardname}>Arvind Mishra</h2>
                    <p className={Aboutstyles.cardrole}>CEO and Founder</p>
                    <p className={Aboutstyles.cardemail}>arvindmishra@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
            <div className={Aboutstyles.card}>
                <div className={Aboutstyles.cardimg}>
                    <img src="/man2.jpg" alt="User 2"/>
                </div>
                <div className={Aboutstyles.cardinfo}>
                    <h2 className={Aboutstyles.cardname}>Suraj Mishra</h2>
                    <p className={Aboutstyles.cardrole}>Son of CEO</p>
                    <p className={Aboutstyles.cardemail}>Chutiya@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
            <div className={Aboutstyles.card}>
                <div className={Aboutstyles.cardimg}>
                    <img src="/man3.jpg" alt="User 3"/>
                </div>
                <div className={Aboutstyles.cardinfo}>
                    <h2 className={Aboutstyles.cardname}>Shivam Mishra</h2>
                    <p className={Aboutstyles.cardrole}>Son of Founder</p>
                    <p className={Aboutstyles.cardemail}>Shivam@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
        </div>
    </section>

    </div>
    <Footer/>
    </>
  )
}

export default about