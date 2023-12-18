import React from 'react'
import { useState } from 'react'
import styles from '../styles/Listprop.module.css'

const listyourproperty = () => {
    return (
        <div>
            <div style={{ marginTop: "4rem" }}>
                <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: "20px", fontFamily: "sans-serif" }}>Sign in to manage your property</h3>
                <div className={styles.formdiv}>
                    <form style={{ alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            <label style={{ marginBottom: "10px" }}>Username</label>
                            <input placeholder='Also known as Login Name or ID' style={{ padding: "10px", border: "1px solid black", borderRadius: "5px", width: "100%" }} ></input>
                            <button type='submit' className={styles.nextbutton}>Next</button>
                            <button type='button' style={{ marginTop: "1rem", padding: "1rem", border: "none", cursor: "pointer", backgroundColor: "transparent", color: "rgb(255, 75, 75)" }}>Having trouble signing in?</button>
                        </div>
                        <div style={{ fontSize: "12px" }}>
                            <hr style={{ borderTop: "1px solid darkgrey" }} />
                            <p>Do you have questions about your property or the extranet? Visit Partner Help or ask another question on the Partner Community</p>
                            
                            
                        </div>
                        <div>
                            <button type='button' className={styles.createbutton} >Create your partner account</button>
                        </div>
                        <div style={{ fontSize: "12px", marginTop: "2rem", marginBottom:"3rem" }}>
                            <div style={{ textAlign: "center" }}>
                                <hr style={{ borderTop: "1px solid darkgrey" }} />
                                <div style={{ marginTop: "1rem" }}>
                                    By signing in or creating an account, you agree with our
                                    <a href="/" className={styles.highlighttext}> Terms & conditions </a>
                                    and
                                    <a href="/" className={styles.highlighttext}> Privacy statement </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default listyourproperty