import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Login() {
    const [action,setaction]=useState("") 
    console.log(action);
    
    
    const registerLink=()=>{
        setaction("active")
    }

    const loginLink=()=>{
        setaction("")
    }


  return (
    <>
      <div className={`wrapped ${action}`}>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required />
                    <FaLock className='icon' />
                </div>
                <div className="reminder">
                    <label >
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="#">Forget Password</a>
                </div>
                <button type='submit'>Login</button>
                <div className="registeration-link">
                    <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    
                </div>
            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="emaik" placeholder='Email' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='password' required />
                    <FaLock className='icon' />
                </div>
                <div className="reminder">
                    <label >
                        <input type="checkbox" />
                        I am agree to term and condition
                    </label>
                    
                </div>
                <button type='submit'>Register</button>
                <div className="registeration-link">
                    <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    
                </div>
            </form>
        </div>
        
        
      </div>
    </>
  )
}

export default Login
