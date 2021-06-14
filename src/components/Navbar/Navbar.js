import React from 'react';
import "./Navbar.css";

function Navbar(props) {

    const logout = () => {
        props.setLogin(0);
        localStorage.removeItem("email");
    }

    return (
        <nav className="navbar"> 
            <h2 className="brand">
                <a href="/">Rental Sevices</a> 
            </h2>        
            {alert("navbar login = ", props)}         
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
                    props.login == 1 ? 
                    <li>
                        <a href="/cart">Booking History</a>
                    </li> : null
                }
                {
                    props.login == 1 ?
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
