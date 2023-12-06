import React from 'react'
import styles from '../styles/Home.module.css'
import Aboutstyles from '../styles/About.module.css'

const about = () => {
  return (
    <div className={Aboutstyles.container}>
      <section className={Aboutstyles.about}>
        <h1>About Us</h1>
        <p>Hourlyrooms is growing daily!!!</p>
        <div className={Aboutstyles.aboutinfo}>
            <div className={Aboutstyles.aboutimg}>
                <img src="/hor.png" alt="Hourlyrooms Logo"/>
            </div>
            <div className={Aboutstyles.paradiv}>
     <p>Hourlyrooms is India's biggest and number one platform for booking hotel rooms on hourly basis. We are noticed on daiyhunt and various other news platforms for our achievements.
      Your <strong>privacy</strong> is our <strong>priority</strong>.
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
                    <h2 className={Aboutstyles.cardname}>Jane</h2>
                    <p className={Aboutstyles.cardrole}>CEO and Founder</p>
                    <p className={Aboutstyles.cardemail}>jane@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
            <div className={Aboutstyles.card}>
                <div className={Aboutstyles.cardimg}>
                    <img src="/man2.jpg" alt="User 2"/>
                </div>
                <div className={Aboutstyles.cardinfo}>
                    <h2 className={Aboutstyles.cardname}>Miller</h2>
                    <p className={Aboutstyles.cardrole}>Co-Founder</p>
                    <p className={Aboutstyles.cardemail}>Miller@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
            <div className={Aboutstyles.card}>
                <div className={Aboutstyles.cardimg}>
                    <img src="/man3.jpg" alt="User 3"/>
                </div>
                <div className={Aboutstyles.cardinfo}>
                    <h2 className={Aboutstyles.cardname}>Joe</h2>
                    <p className={Aboutstyles.cardrole}>Co-Founder</p>
                    <p className={Aboutstyles.cardemail}>Joe@example.com</p>
                    <p><button className={Aboutstyles.button}>Contact</button></p>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default about