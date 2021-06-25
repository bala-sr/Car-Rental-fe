import React, { useEffect } from 'react';
import "./BookingHistory.css";

function BookingHistory() {

    useEffect(async () => {
        await fetch("http://localhost:5000/bookingHistory")
        .then((res) => res.json())
        .then((res) => {
            let j = 0;
            for(let i in res.bookings) {
                // console.log(res.bookings);
                // console.log("j = ", j);
                // console.log("i = ", res);
                // console.log(res[i][1]);
                // console.log(res[i][0].email);
                // console.log(res[i][0].car);
                // console.log(res[i][0].fare);
                let email = document.createElement("td");
                email.innerText = res.bookings[i].email
                let car = document.createElement("td");
                car.innerText = res.bookings[i].car;
                let startDate = document.createElement("td");
                startDate.innerText = res.bookings[i].startDate;
                let endDate = document.createElement("td");
                endDate.innerText = res.bookings[i].endDate;
                let fare = document.createElement("td");
                fare.innerText = "Rs." + res.bookings[i].fare;
                let paymentStatus = document.createElement("td");
                paymentStatus.innerText = res.bookings[i].paid ? "Paid" : "Not Paid";

                let bookingContainer = document.createElement("tr");
                bookingContainer.id = "booking-container";
                bookingContainer.appendChild(email);
                bookingContainer.appendChild(car);
                bookingContainer.appendChild(startDate);
                bookingContainer.appendChild(endDate);
                bookingContainer.appendChild(fare);
                bookingContainer.appendChild(paymentStatus);
                let archiveContainer = document.getElementById("booking-table");
                archiveContainer.appendChild(bookingContainer);
                j++;
            }
        })
        .catch((err) => {
            console.log(err);
        })
    });

    return (
        <div id="archive-container">
            <h1>Booking History</h1>
            <table id="booking-table">
                <tr>
                    <th>Email</th>
                    <th>Car</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Fare</th>
                    <th>Payment</th>
                </tr>
            </table>
        </div>
    )
}

export default BookingHistory;
