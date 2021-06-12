import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import {BrowserRouter , Route } from 'react-router-dom';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Homepage from "./components/Homepage/Homepage.js";
import Cart from "./components/Cart/Cart.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn]=  useState(false);

  return (
    <div className="App">

      <Navbar login={isLoggedIn} />

      <BrowserRouter>
       
          <Route path="/" exact component={Homepage} />
          <Route path="/cart" exact component={Cart}/>
          <Route path="/register" exact component={Register}/>
          <Route exact path='/login' component={Login} login={isLoggedIn} setLogin={setIsLoggedIn} />
          {/* <Route path='/orders' exact component={Orders}/>
          <Route path='/admin' component={Admin}/> */}
       
       </BrowserRouter>
    </div>
  );
}

export default App;
