import React from 'react';
import "./Navbar.css";

function Navbar(props) {
    // let login = localStorage.getItem("login");

    const logout = () => {
        localStorage.removeItem("login");
    }

    return (
        <nav className="navbar"> 
            <h2 className="brand">
                <a href="/">Rental Sevices</a> 
            </h2>                 
            <ul>
                {
                    props.login ? 
                    <li>
                        <a href="/cart">Fare Details</a>
                    </li> : null
                }
                {
                    props.login ?
                    <li>
                        <a href="/" onClick={logout}>Logout</a>
                    </li> :
                    <li>
                        <a href="/login">Login</a>
                    </li> 
                }
            </ul>
        </nav>
    )
}

export default Navbar
