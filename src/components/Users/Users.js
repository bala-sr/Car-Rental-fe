import React from 'react';
import "./Users.css";

function Users() {

    // const getUsers = async () => {
    //     await fetch("http://localhost:5000/getUsers")
    //     .then((res) => res.json())
    //     .then((res) => {
    //         console.log(res);
    //     })
    // };
    return (
        <div className="users-container">
            {/* <button onClick={getUsers}>Get list of users</button>
            <h1>List of Users</h1>
            <table>
                <th>
                    <td>Email</td>
                    <td>Actions</td>
                </th>
            </table> */}
            users
        </div>
    )
}

export default Users;
