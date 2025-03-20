import React, { useState } from 'react'
import './Sign_Up.css'

import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const SignUp = () => {

    // State variables using useState hook
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router
    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // =================================== component

    return (
        <div>
            <section className="flex-container-column">
                <h1>Sign Up</h1>
                <div className="go-login"><span>Already a member?</span> <span><Link style={{color: 'blue', fontWeight: 700}} to={{pathname: '/login'}} >Login</Link></span>
                </div>
                <section className="flex-container-column">
                    <form method='POST' onSubmit={register} >
                        <section className="flex-container-column form-group box-shadow transition-all-300">

                            <label htmlFor="role">
                                <span>Role</span>
                                <select value={role} onChange={(e) => setRole(e.target.value)} required name="role" id="role" type="text">
                                    <option value="">Select a role</option>
                                    <option value="pacient">Pacient</option>
                                </select>
                            </label>

                            <label htmlFor="name">
                                <span>name</span>
                                <input value={name} onChange={(e) => setName(e.target.value)} required name="name" id="name" type="text" placeholder="Enter your name" />
                            </label>

                            <label htmlFor="phone">
                                <span>Phone</span>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} required name="phone" id="phone" type="number" placeholder="Enter your phone number" />
                            </label>

                            <label htmlFor="email">
                                <span>Email</span>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} required name="email" id="email" type="email" placeholder="Enter your email" />
                            </label>

                            <label htmlFor="password">
                                <span>Password</span>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} minLength={10} required name='password' id="password" type="password" placeholder="Enter your password" />
                            </label>
                            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                        </section>
                        <div className="flex-container-row button-group">
                            <button type='submit' className="transition-all-300 btn submit-btn">Submit</button>
                            <button type='reset' className="transition-all-300 btn reset-btn">Reset</button>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    )
}

export default SignUp;
