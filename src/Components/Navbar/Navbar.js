import React from 'react'
import './Navbar.css'

import logo from './logo.png'

const Navbar = () => {
  return (
    <div>
        <nav className="responsive-width flex-container-row space-between pad-y-10 pad-x-20 box-shadow transtion-all-300">
            <figure className="flex-container-row logo">
                <img src={logo} alt="logo" title="Stay Healthy" className="logo" />
            </figure>
            <section className="flex-container-row left-items">
                <ul className="flex-container-row nav-ul-container">
                    <li className="flex-container-column">
                        <a href="www.ramioy.com" className="transtion-all-300 li-a">Home</a>
                    </li>
                    <li className="flex-container-row"><a href="www.ramioy.com" className="transtion-all-300 li-a">Appointments</a></li>
                    <li className="flex-container-row"><a href="www.ramioy.com" className="transtion-all-300 li-a">Health Blog</a></li>
                    <li className="flex-container-row"><a href="www.ramioy.com" className="transtion-all-300 li-a ">Reviews</a></li>
                </ul>
                <section className="flex-container-row button-container pad-y-10">
                <button type='button' className="flex-container-row nav-button transtion-all-300 box-shadow">Sign Up</button>
                <button type='button' className="flex-container-row nav-button transtion-all-300 box-shadow">Login</button>
                </section>
            </section>
        </nav>
    </div>
  )
}

export default Navbar;