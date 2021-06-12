import React, { useState, useEffect } from 'react';
import carsData from "../../CarData.js";
import DateTimePicker from 'react-datetime-picker';
import "./Homepage.css";

function Homepage() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startHour, setStartHour] = useState();
    const [endHour, setEndHour] = useState();
    // const [totalFare, setTotalFare] = useState(0);
    let rateDisplay = document.createElement("p");
    let hours = 0;

    const calculate = (carName, rate) => {
        console.log(carName);
        let totalHour = Math.abs(parseInt(startHour) - parseInt(endHour));
        console.log("Hourly Rate:", rate);
        let date1 = new Date(startDate);
        let date2 = new Date(endDate);
        hours = Math.abs(date2 - date1);
        hours = hours/ (60 * 60 * 1000);
        if(parseInt(startHour) > parseInt(endHour)) {
            hours = hours - totalHour;
        }
        else {
            hours = hours + totalHour;
        }
        console.log("hours = ", hours);      
        let totalFareCost = hours * rate;
        // setTotalFare(totalFareCost);  
        console.log("Total fare = ", totalFareCost);
        rateDisplay.innerText = "Total Fare = " + totalFareCost;
        rateDisplay.setAttribute("id", "rate-display");
        document.getElementById(carName).appendChild(rateDisplay);
    }

    return (
        <div className="container">
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
                            <button className="btn-book">Book Now</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Homepage;
