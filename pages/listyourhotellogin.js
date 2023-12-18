import React from 'react'
import Image from 'next/image'
import Logo from '../public/hor.png'
import { useState } from 'react'
import styles from '../styles/Listprop.module.css'

const listyourproperty = () => {
        const [isHover, setIsHover] = useState(false);
     
        const handleMouseEnter = () => {
           setIsHover(true);
        };
     
        const handleMouseLeave = () => {
           setIsHover(false);
        };
    return (
        <div>
            <div style={{ marginTop: "4rem" }}>
                <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", fontFamily: "sans-serif" }}>Sign in to manage your property</h3>
                <div className={styles.formdiv}>
                    <form style={{ alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <label style={{ marginBottom: "10px" }}>Username</label>
                            <input placeholder='Also known as Login Name or ID' style={{ padding: "10px", border: "1px solid black", borderRadius: "5px", width: "100%" }} ></input>
                            <button type='submit' style={{ marginTop: "1rem", padding: "1rem", border: "none", borderRadius: "5px", backgroundColor: isHover ? "#2549c7": "#2243b6", cursor: "pointer", color: "white", fontWeight: "bold", fontSize: "15px" }} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Next</button>
                            <button type='button' style={{ marginTop: "1rem", padding: "1rem", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "blue" }}>Having trouble signing in?</button>
                        </div>
                        <div style={{ fontSize: "12px" }}>
                            <hr style={{ borderTop: "1px solid darkgrey" }} />
                            <p>Do you have questions about your property or the extranet? Visit</p>
                            <a href="/" style={{ color: "blue" }}>Partner Help </a>
                            or ask another question on the
                            <a href="/" style={{ color: "blue" }}> Partner Community </a>
                        </div>
                        <div>
                            <button type='button' style={{
                                marginTop: "1rem", padding: "1rem", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "blue", width: "100%",
                                border: "1px solid blue",
                                borderRadius: "5px",
                                fontSize: "17px",
                            }}>Create your partner account</button>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "2rem" }}>
                            <div style={{ textAlign: "center" }}>
                                <hr style={{ borderTop: "1px solid darkgrey" }} />
                                <div style={{ marginTop: "1rem" }}>
                                    By signing in or creating an account, you agree with our
                                    <a href="/" style={{ color: "blue" }}> Terms & conditions </a>
                                    and
                                    <a href="/" style={{ color: "blue" }}> Privacy statement </a>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "1rem" }}>
                            <div style={{ textAlign: "center" }}>
                                <hr style={{ borderTop: "1px solid darkgrey" }} />
                                <p>All rights reserved</p>
                                <p>Copyright (2020 - 2023) - Hourlyrooms.com™</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default listyourproperty