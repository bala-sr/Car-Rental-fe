import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Homepage from "./components/Homepage/Homepage.js";
import Cart from "./components/Cart/Cart.js";
import Users from "./components/Users/Users.js";
import BookingHistory from "./components/BookingHistory/BookingHistory";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn]=  useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <Navbar login={isLoggedIn} setLogin={setIsLoggedIn} admin={isAdmin} setAdmin={setIsAdmin} />
        <Switch>
          <Route exact path="/">
              <Homepage login={isLoggedIn} admin={isAdmin} />
          </Route>
            {/* <Route path="/cart" exact component={Cart}/> */}
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>  
            {/* <Route path="/login"  component={Login} /> */}
            {/* <Route exact path="/login" render = {() => (
              <Login setLogin={setIsLoggedIn} setAdmin={setIsAdmin} />
            )} /> */}
          <Route exact path="/login">
            <Login setLogin={setIsLoggedIn} setAdmin={setIsAdmin} />
          </Route>
          <Route path='/users' exact>
            <Users />
          </Route>    
            <Route path='/bookingHistory'>
              <BookingHistory />
            </Route>      
        </Switch>  
    </>
  );
}

export default App;

//https://codesandbox.io/s/dazzling-jepsen-8x5c7
