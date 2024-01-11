import React from 'react'
import { useState, useCallback, useEffect, useRef } from 'react'

const practice = () => {

    const [password, setPassword] = useState()
    const [length, setLength] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const passRef = useRef(null)

    const passGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numberAllowed) str += "1234567890"
        if (charAllowed) str += "!@#$%^&*"

        for (let i = 1; i <= length; i++) {
              let char = Math.floor(Math.random()* str.length + 1)
              pass += str.charAt(char)
        }
        setPassword(pass)

    }, [length, numberAllowed, charAllowed, setPassword])

    const copyPass = useCallback(()=>{
        passRef.current?.select();
        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(()=>{passGenerator()}, [length, charAllowed, numberAllowed,passGenerator])


  return (
    <>
        <div style={{height:"100vh", margin:"0"}}>
            <p style={{textAlign:"center", fontWeight:"bold", fontSize:"25px", marginBottom:"2rem"}}>Password Generator App</p>
            {/* <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", margin:"2rem 10rem", alignItems:"center", backgroundColor:"white", padding:"1rem 2rem", borderRadius:"20px"}}>
                <button onClick={() => setColor("red")} style={{backgroundColor:"red", padding:"20px", borderRadius:"20px", fontWeight:"bold", color:"black"}}>Red</button>
                <button onClick={() => setColor("blue")} style={{backgroundColor:"blue", padding:"20px", borderRadius:"20px", fontWeight:"bold", color:"black"}}>Blue</button>
                <button onClick={() => setColor("green")} style={{backgroundColor:"green", padding:"20px", borderRadius:"20px", fontWeight:"bold", color:"black"}}>Green</button>
                <button onClick={() => setColor("yellow")} style={{backgroundColor:"yellow", padding:"20px", borderRadius:"20px", fontWeight:"bold", color:"black"}}>Yellow</button>
            </div> */}
            <div style={{background:"grey", padding:"1rem 2rem", margin:"1rem 30rem", borderRadius:"15px"}}>
                <div style={{display:"flex", justifyContent:"center", margin:"1rem 0"}}>
                <input style={{background:"#000", borderRadius:"15px", color:"white", padding:"5px 12px"}} type='text' placeholder='Password' ref={passRef} value={password} readOnly></input>
                <button style={{color:"white", background:"blue", padding:"8px 16px", borderRadius:"15px", marginLeft:"1rem"}} onClick={copyPass}>Copy</button>
                </div>
                <div style={{display:"flex", justifyContent:"center", gap:"1rem"}}>
                    <input type='range' min={8} max={25} value={length} onChange={(e)=> (setLength(e.target.value))}></input>
                    <label>Length: {length}</label>
                    <input type='checkbox' onChange={()=> {setNumberAllowed((prev) => !prev);}}></input>
                    <label>Number</label>
                    <input type='checkbox' onChange={()=> {setCharAllowed((prev) => !prev);}}></input>
                    <label>Char</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default practice