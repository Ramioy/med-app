import React from 'react'
import './Sign_Up.css'

const SignUp = () => {
    return (
        <div>
            <section className="flex-container-column">
                <h1>Sign Up</h1>
                <div className="go-login"><span>Already a member?</span> <span style={{color: 'blue', fontWeight: 700}}>Login</span>
                </div>
                <section className="flex-container-column">
                    <form action="">
                        <section className="flex-container-column form-group box-shadow transition-all-300">

                            <label for="role">
                                <span>Role</span>
                                <select required id="role" type="text">
                                    <option value="">Select a role</option>
                                </select>
                            </label>

                            <label for="name">
                                <span>name</span>
                                <input required id="name" type="text" placeholder="Enter your name" />
                            </label>

                            <label for="phone">
                                <span>Phone</span>
                                <input required id="phone" type="number" placeholder="Enter your phone number" />
                            </label>

                            <label for="email">
                                <span>Email</span>
                                <input required id="email" type="email" placeholder="Enter your email" />
                            </label>

                            <label for="password">
                                <span>Password</span>
                                <input minLength={10} required id="password" type="password" placeholder="Enter your password" />
                            </label>

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
