import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

import './Login.css'

const Login = () => {

// State variables for email and password
const [password, setPassword] = useState("");
const [email, setEmail] = useState('');
// Get navigation function from react-router-dom
const navigate = useNavigate();
// Check if user is already authenticated, then redirect to home page
useEffect(() => {
  if (sessionStorage.getItem("auth-token")) {
    navigate("/");
  }
}, []);
// Function to handle login form submission
const login = async (e) => {
  e.preventDefault();
  // Send a POST request to the login API endpoint
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  // Parse the response JSON
  const json = await res.json();
  if (json.authtoken) {
    // If authentication token is received, store it in session storage
    sessionStorage.setItem('auth-token', json.authtoken);
    sessionStorage.setItem('email', email);
    // Redirect to home page and reload the window
    navigate('/');
    window.location.reload();
  } else {
    // Handle errors if authentication fails
    if (json.errors) {
      for (const error of json.errors) {
        alert(error.msg);
      }
    } else {
      alert(json.error);
    }
  }
};

  return (
    <div>

<section class="flex-container-column">
      <h1>Login</h1>
      <div class="go-login"><span>Are you a member?</span> <span>
        <Link style={{color: 'blue', fontWeight: 700}} to={{pathname: '/signup'}}>
            Sign Up Here
        </Link>
      </span>
      </div>
      <section class="flex-container-column">
        <form method='POST' onSubmit={login}>
          <section class="flex-container-column form-group box-shadow transition-all-300">

            <label for="name">
              <span>Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} required name='email' id="email" type="email" placeholder="Enter your email"/>
            </label>

            <label for="password">
              <span>Password</span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} minLength={10} required name="password" id="password" type="password" placeholder="Enter your password"/>
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