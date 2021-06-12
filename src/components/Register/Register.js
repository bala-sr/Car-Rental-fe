import React, { useState } from 'react';
import "./Register.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {
        console.log("email: ", email);
        console.log("pass: ", password);
        console.log("confirm pass: ", confirmPassword);
        if(password !== confirmPassword) {
            alert("Passwords not matching!!!")
        }
        else {
            await fetch("http://localhost:5000/register", {
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
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className="register-container">
            <h2 className="login">Register</h2>
            <label className="label">Email</label><br />
            <input className="inp" type="email" placeholder="Enter your email" 
            onChange={(e) => setEmail(e.target.value)} /><br />
            <label className="label">Password</label><br />
            <input className="inp" type="password" placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)}/><br />
            <label className="label">Confirm Password</label><br />
            <input className="inp" type="password" placeholder="Re-enter your password" 
            onChange={(e) => setConfirmPassword(e.target.value)}/><br />
            <input onClick={register} className="btn-register" type="submit" />
            <a className="register" href="/login">Login</a>
        </div>
    )
}

export default Register;
