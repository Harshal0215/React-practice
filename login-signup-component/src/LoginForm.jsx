import React, { useState } from 'react'
import './App.css'
function LoginForm() {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
    <div className='container'>
<div className="form-container">
    <div className="form-toggle">
        <button className={loggedIn ? 'active' :" "} onClick={()=>{setLoggedIn(true)}}>Login</button>
        <button className={!loggedIn ? 'active' :" "} onClick={()=>{setLoggedIn(false)}}>Sign Up</button>
    </div>
    {loggedIn? <>
    <div className="form">
    <h2>Login Form</h2>
    <input type="email" placeholder='email' name="" id="" />
    <input type="password" placeholder='password' />
    <h4><a href="/login">Forgot Password ?</a></h4>
    </div>
     </>:<> <div className="form">
        <h2>SignUp</h2>
        <input type="text" name="" id="" placeholder='Email' />
        <input type="password" name="" id="" placeholder='Password' />
        <input type="text" name="" id="" placeholder='Confirm Password' />
        
        </div> </>}
</div>

    </div>
    </>
  )
}

export default LoginForm