import React from 'react'
import RouteView from '../view/RouteView'
import './auth.css'

function Login() {
  return (
    <div className="login">
      <RouteView title='Log in' content="Welcome back!"/>
      <div className="auth-container">
      <div className="auth-form-container">
        <div className="login-card">
          <h4>IP Address Blocked</h4>
          <p>This IP address is currently blocked. The latest block log entry is provided below for reference.</p>
          
          <code>blocked with an expiration time of 6 days and 23 hours (account login blocked) (blocked p2p proxy | ip)</code>
        </div>
        <form>
          <input type='text' placeholder='Username' required></input>
          <input type='password' placeholder='Password' required></input>
          <button type='submit' id='login-btn' >Login</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login