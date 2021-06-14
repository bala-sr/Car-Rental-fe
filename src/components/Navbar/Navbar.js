import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {

    const logout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("admin");
        localStorage.removeItem("email");
    }

    return (

            <nav className="navbar"> 
            {console.log("login = ", localStorage.getItem("login"))}
                <h2 className="brand">
                    <Link to="/">Rental Sevices</Link> 
                </h2>        
            
                <ul>
                    {/* {
                        props.login && props.admin ?
                        <li>
                            <a href="/users">Users</a>
                        </li> : null
                    } */}
                    {/* {
                        props.login && props.admin ?
                        <li>
                            <a href="/bookingHistory">Booking History</a>
                        </li> : null
                    } */}
                    {
                        localStorage.getItem("login") ? 
                        <li>
                            <Link to="/cart">Booking History</Link>
                        </li> : null
                    }
                    {
                        localStorage.getItem("login") ?
                        <li>
                            <Link to="/" onClick={logout}>Logout</Link>
                        </li> :
                        <li>
                            <Link to="/login">Login</Link>
                        </li> 
                    }
                </ul>
            </nav>

    )
}

export default Navbar
