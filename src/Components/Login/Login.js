import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <div>

<section class="flex-container-column">
      <h1>Login</h1>
      <div class="go-login"><span>Are you a member?</span> <span style={{color: 'blue', fontWeight: 700}}>Sign Up
          Here</span>
      </div>
      <section class="flex-container-column">
        <form action="">
          <section class="flex-container-column form-group box-shadow transition-all-300">

            <label for="name">
              <span>name</span>
              <input required id="name" type="text" placeholder="Enter your name"/>
            </label>

            <label for="password">
              <span>Password</span>
              <input required id="password" type="password" placeholder="Enter your password"/>
            </label>

          </section>
          <div class="flex-container-row button-group">
            <button type='submit' class="transition-all-300 btn submit-btn">Login</button>
            <button type='reset' class="transition-all-300 btn reset-btn">Reset</button>
          </div>
        </form>
        <span class="forgot">Forgot Password?</span>
      </section>
    </section>
        
    </div>
  )
}

export default Login;