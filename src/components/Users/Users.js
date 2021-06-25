import React, { useState, useEffect } from 'react';
import "./Users.css";

function Users() {
    const deleteUser = async (email) => {
        console.log("Email = ", email);
        await fetch("http://localhost:5000/deleteUser", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email
            })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            if(res.message === "User removed") {
                alert("User removed.");
            }
            else {
                alert("Unable to remove user.");
            }
        })
    };
    
    useEffect(async () => {
        await fetch("http://localhost:5000/getUsers")
            .then((res) => res.json())
            .then((res) => {
                // console.log("users list = ", res[1]);
                for(let i in res) {
                    let userEmail = document.createElement("div");
                    let userContainer = document.getElementById("user");
                    let userEmailData = document.createElement("div");
                    userEmailData.className = "userEmailData";
                    userEmail.className = "userEmail";
                    let deleteBtn = document.createElement("button");
                    deleteBtn.className = "delete-btn";
                    deleteBtn.innerText = "Delete"; 
                    deleteBtn.id = res[i];    
                    deleteBtn.onclick = () => deleteUser(deleteBtn.id)           
                    userEmailData.innerText = res[i];
                    userEmail.appendChild(userEmailData);
                    userEmail.appendChild(deleteBtn);
                    userContainer.appendChild(userEmail);
                }
            })
            .catch((err) => {
                console.log("Error = ", err)
            })
    });

    return (
        <div className="users-container" id="user">
            <h1>List of Users</h1>
        </div>
    )
}

export default Users;
