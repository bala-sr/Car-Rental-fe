import React, { useEffect } from 'react';
import "./BookingHistory.css";

function BookingHistory() {

    useEffect(async () => {
        await fetch("http://localhost:5000/bookingHistory")
        .then((res) => res.json())
        .then((res) => {
            console.log(typeof res);
            for(let i in res) {
                // console.log(res[i][0].email);
                // console.log(res[i][0].car);
                // console.log(res[i][0].fare);
                let email = document.createElement("p");
                email.innerText = "Email: " + res[i][0].email
                let car = document.createElement("p");
                car.innerText = "Car: " + res[i][0].car;
                let startDate = document.createElement("p");
                startDate.innerText = "Start Date: " + res[i][0].startDate;
                let endDate = document.createElement("p");
                endDate.innerText = "End Date: " + res[i][0].endDate;
                let fare = document.createElement("p");
                fare.innerText = "Fare: Rs." + res[i][0].fare;
                let payment = document.createElement("p");
                payment = "Payment: " + res[i][0].payment;
                let bookingContainer = document.createElement("div");
                bookingContainer.id = "booking-container";
                bookingContainer.appendChild(email);
                bookingContainer.appendChild(car);
                bookingContainer.appendChild(startDate);
                bookingContainer.appendChild(endDate);
                bookingContainer.appendChild(fare);
                bookingContainer.appendChild(payment);
                let archiveContainer = document.getElementById("archive-container");
                archiveContainer.appendChild(bookingContainer);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    });

    return (
        <div id="archive-container">
            
        </div>
    )
}

export default BookingHistory;
