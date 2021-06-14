import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import {BrowserRouter , Route } from 'react-router-dom';
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Homepage from "./components/Homepage/Homepage.js";
import Cart from "./components/Cart/Cart.js";
import Users from "./components/Users/Users.js";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn]=  useState("hello");
  const [isAdmin, setIsAdmin] = useState(0);
  // admin={isAdmin} setAdmin={setIsAdmin} 

  return (
    <div className="App">

      <Navbar login={isLoggedIn} setLogin={setIsLoggedIn} />

      <BrowserRouter>
       
          <Route path="/" exact 
          render={() => (
            <Homepage login={isLoggedIn} />    
          )}
          />
          {/* <Route path="/cart" exact component={Cart}/> */}
          <Route exact path='/cart' 
          render = {() => (
            <Cart admin={isAdmin}  login={isLoggedIn} />
          )} 
          />
          <Route path="/register" exact component={Register}/>
          <Route exact path='/login' 
          render = {() => (
            <Login admin={isAdmin} setAdmin={setIsAdmin}  login={isLoggedIn} setLogin={setIsLoggedIn} />
          )} 
          />
          {/* <Route path='/users' exact component={Users}/> */}
          {/* <Route path='/admin' component={Admin}/> */}
       
       </BrowserRouter>
    </div>
  );
}

export default App;
