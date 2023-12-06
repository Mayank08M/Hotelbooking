import React, { useState } from 'react'
import Contactstyles from '../styles/Contact.module.css'
import { useRouter } from 'next/router'

const contact = () => {
  let router = useRouter();
  const [firstname, setFirstname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, sePhone] = useState('')
  function handleOnchangeFirstName(e) {
    setFirstname(e.target.value)
  }
  function handleOnchangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleOnchangePhone(e) {
    setPhone(e.target.value)
  }
  function myFunction() {

    if (!(firstname && email && phone)) {
      alert(`Please enter ${!firstname ? "First name" : !email ? "Email" : !phone ? "Phone No." : null}`)
    } else {
      alert("Submitted Successfully!!!");
      router.push('/');
    }
  }
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
                    <input type="text" name="firstname" value={firstname} onChange={(e) => handleOnchangeFirstName(e)} />
                  </div>
                </div>

                <div className={Contactstyles.col}>
                  <div className={Contactstyles.formgroup}>
                    <label>Surname</label>
                    <input type="text" name='lastname' />
                  </div>
                </div>

                <div className={Contactstyles.col}>
                  <div className={Contactstyles.formgroup}>
                    <label>Email</label>
                    <input type="text" name='email' value={email} onChange={(e) => handleOnchangeEmail(e)} />
                  </div>
                </div>

                <div className={Contactstyles.col}>
                  <div className={Contactstyles.formgroup}>
                    <label>Phone</label>
                    <input type="text" name='email' value={phone} onChange={(e) => handleOnchangePhone(e)}  />
                  </div>
                </div>

                <div className={Contactstyles.col}>
                  <div className={Contactstyles.formgroup}>
                    <label>Message</label>
                    <textarea></textarea>
                  </div>
                </div>

                <div className={Contactstyles.col}>
                  <button onClick={myFunction} type="submit" value="Submit">Submit</button>
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