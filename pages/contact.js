import React from 'react'
import Contactstyles from '../styles/Contact.module.css'

const contact = () => {
  return (
    <>
    <div className={Contactstyles.body}>
    <div className={Contactstyles.upbody}>
    <div className={Contactstyles.container}>
      <div className={Contactstyles.card}>
        <h2>Contact Us</h2>
      <div className={Contactstyles.row}>
    <div className={Contactstyles.col}>
      <div className={Contactstyles.formgroup}>
        <label>First Name</label>
        <input type="text"/>
      </div>
    </div>

    <div className={Contactstyles.col}>
      <div className={Contactstyles.formgroup}>
        <label>Surname</label>
        <input type="text"/>
      </div>
    </div>

    <div className={Contactstyles.col}>
      <div className={Contactstyles.formgroup}>
        <label>Email</label>
        <input type="text"/>
      </div>
    </div>

    <div className={Contactstyles.col}>
      <div className={Contactstyles.formgroup}>
        <label>Phone</label>
        <input type="text"/>
      </div>
    </div>

    <div className={Contactstyles.col}>
      <div className={Contactstyles.formgroup}>
        <label>Message</label>
        <textarea></textarea>
      </div>
    </div>

    <div className={Contactstyles.col}>
      <button type="submit" value="Submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    
    </>
  )
}                                                                       


export default contact