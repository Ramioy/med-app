import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Navbar.css'

import logo from './logo.png'

const Navbar = () => {

    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail.split('@')[0]);
          }
        }, []);

  return (
    <div>
        <nav className="responsive-width flex-container-row space-between pad-y-10 pad-x-20 box-shadow transtion-all-300">
            <figure className="flex-container-row logo">
                <Link to={{pathname: '/'}}><img src={logo} alt="logo" title="Stay Healthy" className="logo" /></Link>
            </figure>
            <section className="flex-container-row left-items">
                <ul className="flex-container-row nav-ul-container">
                    <li className="flex-container-column">
                        <Link className="transtion-all-300 li-a" to="/">Home</Link>
                    </li>
                    <li className="flex-container-row">
                        <Link className="transtion-all-300 li-a" to="/appointments">Appointments</Link>
                    </li>
                    <li className="flex-container-row">
                        <Link className="transtion-all-300 li-a" to="/health-blog">Health Blog</Link>
                    </li>
                    <li className="flex-container-row">
                        <Link className="transtion-all-300 li-a" to="/reviews">Reviews</Link>
                    </li>
                </ul>
                <section className="flex-container-row button-container pad-y-10">
                    {
                        isLoggedIn ? (<>
                            <span>Welcome, {username}</span>
                            <button onClick={handleLogout} type='button' className="flex-container-row nav-button transtion-all-300 box-shadow">Log out</button>
                        </>) : (<>
                            <button type='button' className="flex-container-row nav-button transtion-all-300 box-shadow"><Link to={{pathname: '/signup'}}>Sign Up</Link></button>
                            <button type='button' className="flex-container-row nav-button transtion-all-300 box-shadow"><Link to={{pathname: '/login'}}>Login</Link></button>
                        </>)

                    }

                </section>
            </section>
        </nav>
    </div>
  )
}

export default Navbar;