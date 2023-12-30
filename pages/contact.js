import React, { useState } from 'react';
import Contactstyles from '../styles/Contact.module.css';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'

const contact = () => {
  const router = useRouter();
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');

  function handleOnchangeFirstName(e) {
    setFirstname(e.target.value);
  }
  function handleOnchangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleOnchangePhone(e) {
    setPhone(e.target.value);
  }
  function handleOnchangeSurname(e) {
    setSurname(e.target.value);
  }
  function handleOnchangeMessage(e) {
    setMessage(e.target.value);
  }

  async function myFunction() {
    if (!(firstname && email && phone)) {
      alert(`Please enter ${!firstname ? 'First name' : !email ? 'Email' : !phone ? 'Phone No.' : null}`);
    } else {
      alert('Submitted Successfully!!!');
      try {
        const response = await fetch('http://localhost:8000/adduser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstname, surname, email, phone, message }), // Ensure all variables are properly set in the component state
        });
  
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
  
        const data = await response.json();
        console.log('New user added:', data);
        router.push('/');
      } catch (error) {
        console.error('Error adding user:', error);
        // Handle error (display error message, retry logic, etc.)
      }
    }
  }
  return (
    <>
      <Navbar/>
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
                    <input type="text" name='lastname' value={surname} onChange={(e) => handleOnchangeSurname(e)} />
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
                    <textarea value={message} onChange={(e) => handleOnchangeMessage(e)}></textarea>
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
      <Footer/>
    </>
  )
}


export default contact