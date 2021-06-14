import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    let history = useHistory();

    const login = async () => {
        await fetch("http://localhost:5000/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res.message == "Login Successful") {
                // props.setLogin(true);
                localStorage.setItem("login", true);
                if(email == "admin@gmail.com") {
                    // props.setAdmin(true);
                    localStorage.setItem("admin", true);
                }
                localStorage.setItem("email", email);
                history.push("/");
            }
            else {
                alert(res.message);
            }
        })
    }

    return (
        <div className="login-container">
            <h2 className="login">Login</h2>
            <label className="label">Email</label><br />
            <input className="inp" type="email" placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} /><br />
            <label className="label">Password</label><br />
            <input className="inp" type="password" placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} /><br />
            <input className="btn-login" type="submit" onClick={() => login()} />
            <a className="register" href="/register">Register</a>
        </div>
    )
}

export default Login;
