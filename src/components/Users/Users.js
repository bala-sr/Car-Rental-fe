import React, { useState, useEffect } from 'react';
import "./Users.css";

function Users() {
    let [count, setCount] = useState(1);
    let i = 0;
    // const getUsers = async () => {
    //     await fetch("http://localhost:5000/getUsers")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res);
    //     })
    // };
    useEffect(async () => {
        await fetch("http://localhost:5000/getUsers")
            .then((res) => res.json())
            .then((res) => {
                res.map((user) => {                        
                    console.log("users list = ", user);
                            // let sno = document.createElement("td");
                            // let email = document.createElement("p");
                            // email.innerText = user[0];
                            // console.log("email = ", email);
                            // let userContainer = document.getElementsByClassName("users-container");
                            // userContainer.appendChild(email);
                            // let actions = document.createElement("td");
                            // let table = document.getElementById("user-table");
                            // var row = table.insertRow(count);
                            // sno.innerText = count;
                            // setCount(count++);
                            // email.innerText = user[0].email;
                            // actions.innerText = "delete";
                            // sno = row.insertCell(0);
                            // email = row.insertCell(1);
                            // actions = row.insertCell(2);
                            // tr.appendChild(sno);
                            // tr.appendChild(email);
                            // tr.appendChild(actions);
                            // table.appendChild(row);
                })
            })
            .catch((err) => {
                console.log(err)
            })
    });

    return (
        <div className="users-container">
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
