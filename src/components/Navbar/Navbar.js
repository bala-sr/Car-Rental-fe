import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar(props) {

    const logout = () => {
        // localStorage.removeItem("login");
        // localStorage.removeItem("admin");
        props.setLogin(false);
        props.setAdmin(false);
        localStorage.removeItem("email");
    }

    return (
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
                            <Link to="/users">Users</Link>
                        </li> : null
                    } 
                    {
                        props.admin && props.login ?
                        <li>
                            <Link to="/bookingHistory">Archive</Link>
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
                            <Link to="/" onClick={logout}>
                                Logout
                            </Link>
                        </li> :
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    }
                </ul>
            </nav>            
    )
}

export default Navbar



