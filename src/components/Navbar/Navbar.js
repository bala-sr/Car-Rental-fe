import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(props) {

    const logout = () => {
        // localStorage.removeItem("login");
        // localStorage.removeItem("admin");
        localStorage.removeItem("email");
    }

    return (
        <Router>
            <nav className="navbar"> 
            {/* {console.log("login = ", localStorage.getItem("login"))}
            {console.log("typeof login = ", typeof localStorage.getItem("login"))} */}
                <h2 className="brand">
                    <Link to="/">Rental Sevices</Link> 
                </h2>        
            
                <ul>
                    {
                        props.admin && props.login ?
                        <li>
                            <a href="/users">Users</a>
                        </li> : null
                    } 
                    {
                        props.admin && props.login ?
                        <li>
                            <a href="/bookingHistory">Archive</a>
                        </li> : null
                    }
                    {
                        !props.admin && props.login ? 
                        <li>
                            <Link to="/cart">Booking History</Link>
                        </li> : null
                    }
                    {
                        props.login ?
                        <li>
                            <Link to="/" onClick={logout}>Logout</Link>
                        </li> :
                        <li>
                            <Link to="/login">Login</Link>
                        </li> 
                    }
                </ul>
            </nav>
        </Router>              
    )
}

export default Navbar
