import React, { useState, useEffect } from 'react';
import carsData from "../../CarData.js";
import "./Homepage.css";

function Homepage(props) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [startHour, setStartHour] = useState("");
    const [endHour, setEndHour] = useState("");
    const [total, setTotal] = useState(0);
    const [isPaid, setIsPaid] = useState(false);
    let rateDisplay = document.createElement("p");
    let hours = 0;

    const calculate = (carName, rate) => {
        let error = false;
        if(!startDate || !endDate || !startDate || !endDate) {
            alert("Please fill all the details..");
            error = true;
        }
    
        console.log(carName);
        let totalHour = Math.abs(parseInt(startHour) - parseInt(endHour));
        console.log("Hourly Rate:", rate);
        let date1 = new Date(startDate);
        let date2 = new Date(endDate);
        setStartDate(date1);
        setEndDate(date2);
        console.log("start date = ", startDate);
        console.log("end date = ", endDate);
        console.log("start time = ", startHour);
        console.log("end time = ", endHour);
        hours = Math.abs(date2 - date1);
        hours = hours/ (60 * 60 * 1000);
        if(parseInt(startHour) > parseInt(endHour)) {
            hours = hours - totalHour;
        }
        else {
            hours = hours + totalHour;
        }
        if(!error) {
            console.log("hours = ", hours);      
            let totalFareCost = hours * rate;
            setTotal(totalFareCost);  
            console.log("Total fare = ", totalFareCost);
            console.log("RateDisplay = ", rateDisplay.innerText);
            rateDisplay.setAttribute("id", "rate-display");
            if(total !== totalFareCost) {
                rateDisplay.innerText = "Total Fare = " + totalFareCost;
                document.getElementById(carName).appendChild(rateDisplay);
            }
            
        }
    }

    //Booking Car
    const book = async (car) => {
        if(props.login === false) {
            alert("Please login to book your vehicle.");
        }
        else if(!startDate || !endDate) {
            alert("Please specify start date and end date.");
        }
        else {
            await fetch("https://rental-service-be.herokuapp.com/book", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Authorization": localStorage.urlWebToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": localStorage.getItem("email"),
                    "car": car,
                    "startDate": startDate.toString().substr(4, 11) + " " + startHour,
                    "endDate": endDate.toString().substr(4, 11) + " " + endHour,
                    "fare": total,
                    "paid": false    
                    
                })
            })
            .then((res) => res.json())
            .then((res) => {
                if(res.message == "Booking successful!") 
                alert("Booking successful. Please proceed to pay.");
                else {
                    alert("Unable to book. Try after sometime.");
                }
            })  
            setStartDate("");
            setEndDate("");
            setStartHour("");
            setEndHour("");
            setTotal(0);
        }
    }

    return (
        <div className="container">
            {/* {console.log("Start date = ", startDate)} */}
            {
                carsData.map((car) => {
                    return (
                        <div id={car.name} className="car-container">
                            <img src={car.image} />
                            <h3 id="carName">{car.name}</h3>
                            <p className="car-seater"><b>Seater:</b> {car.seater}</p>
                            <p className="hourly-rate"><b>Hourly Rate:</b> Rs.{car.hourlyRate}</p>
                            From:<br /><input name="from" type="date" 
                            onChange={(e) => setStartDate(e.target.value)} />
                            <input name="start-time" type="time" onChange={(e) => setStartHour(e.target.value)} /><br />
                            To:<br /><input name="from" type="date"
                            onChange={(e) => setEndDate(e.target.value)} />
                            <input name="start-time" type="time" onChange={(e) => setEndHour(e.target.value)} /><br />
                            {/* <p id="total-hours" className={car.name} hidden>Total fare:</p> */}
                            <button className="btn-calculate" onClick={() => calculate(car.name, car.hourlyRate)}>Total Fare</button>
                            {
                                props.admin ? null : <button className="btn-book" onClick={() => book(car.name)}>Book</button>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Homepage;
