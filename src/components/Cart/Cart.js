import React, { useState, useEffect } from 'react';
import "./Cart.css";
import dotenv from "dotenv";

dotenv.config();

function Cart(props) {
    const [car, setCar] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fare, setFare] = useState(0);
    // let script = document.createElement("script");
    // script.src = "https://checkout.razorpay.com/v1/checkout.js";
    // document.body.appendChild(script);

    useEffect(() => {
        recentBooking();
    }, []);

    const recentBooking = async () => {
        await fetch("http://localhost:5000/bookingDetails", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": localStorage.getItem("email")
                })
            })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.booking);
                if(res) {
                    setCar(res.car);
                    setStartDate(res.startDate);
                    setEndDate(res.endDate);
                    setFare(res.fare);
                    let div = document.getElementById("hide");
                    div.removeAttribute("id");
                    div.setAttribute("id", "show");
                    let car = document.createElement("li");
                    car.innerText = "Car: " + res.booking.car;
                    let startDate = document.createElement("li");
                    startDate.innerText = "Start Date: " +res.booking.startDate;
                    let endDate = document.createElement("li");
                    endDate.innerText = "Start Date: " +res.booking.endDate;
                    let fare = document.createElement("li");
                    fare.innerText = "Fare: Rs." +res.booking.fare;
                    setFare(res.booking.fare);
                    let list = document.getElementById("booking-list");
                    list.appendChild(car);
                    list.appendChild(startDate);
                    list.appendChild(endDate);
                    list.appendChild(fare);
                }
            })
            .catch((err) => {
                alert(err);
            })
    }

    const payment = async (e) => {
        if(e) {
            console.log("Error processing payment = ", e);
        }
        console.log("pay btn clicked");
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        await fetch("http://localhost:5000/order", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "amount": fare * 100
                })
            }).then((res) => res.json())
            .then((res) => {
                console.log(res);

                var options = {
                    "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
                    "name": "Car Rental",
                    "description": "Test Transaction",
                    "image": "data:image/png;base64,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",
                    "order_id": res.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "callback_url": "http://localhost:5000/paymentStatus",
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                // var rzp1 = new Razorpay(options);
                    const paymentObject = new window.Razorpay(options);
                    paymentObject.open();
                });
}


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
}

    return (
        <div className="booking-container">
            <h2>Booking Details</h2>
            {/* {alert("login = ", props.login)}
            {alert("admin = ", props.admin)} */}
            
            {/* <button id="view-btn" onClick={recentBooking}>View Booking</button> */}
            <section className="booking-details" id="hide">
                <ul id="booking-list">
                        
                </ul>
                <button id="pay-btn" onClick={payment}>Pay Now</button>
            </section>
        </div>
    )
}

export default Cart;
