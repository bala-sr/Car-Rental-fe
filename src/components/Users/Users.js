import React, { useState, useEffect } from 'react';
import "./Users.css";

function Users() {
    
    useEffect(async () => {
        await fetch("http://localhost:5000/getUsers")
            .then((res) => res.json())
            .then((res) => {
                // console.log("users list = ", res[1]);
                for(let i in res) {
                    let userEmail = document.createElement("div");
                    let userContainer = document.getElementById("user");
                    userEmail.className = "userEmail";
                    let img = document.createElement("img");
                    img.id = "dustbin"
                    img.src = "https://icon-library.com/images/delete-icon/delete-icon-13.jpg";
                    userEmail.innerText = res[i];
                    userEmail.appendChild(img);
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
            {/* <table id="user-table"> 
                <th>
                    <td>S.No</td>
                    <td>Email</td>
                    <td>Actions</td>
                </th>
            </table> */}
        </div>
    )
}

export default Users;
