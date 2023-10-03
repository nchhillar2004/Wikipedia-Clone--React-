import React from 'react'
import RouteView from "../view/RouteView";
import './auth.css';

function Register() {
  return (
    <div className="auth-register">
      <RouteView title="Create account" content="Create a free wikipedia account now"/>
      <div className="auth-container">
      <div className="auth-form-container">
      <div className="login-card">
          <h4>IP Address Blocked</h4>
          <p>This IP address is currently blocked. The latest block log entry is provided below for reference.</p>
          
          <code>blocked with an expiration time of 6 days and 23 hours (account creation blocked) (blocked p2p proxy | ip)</code>
        </div>
        <form>
          <input type='text' placeholder='Username' id='username' required></input>
          <input type='password' placeholder='Create Password' id='password' required></input>
          <input type='email' placeholder='Email (recommended)' id='email' ></input>
          <button type='submit' id='register-btn'>Register</button>
        </form>
      </div>
      <div className="auth-image-container">
        <img></img>
      </div>
      </div>
    </div>
  )
}

export default Register