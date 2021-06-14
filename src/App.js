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
  const [isLoggedIn, setIsLoggedIn]=  useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  // admin={isAdmin} setAdmin={setIsAdmin} 

  return (
    <div className="App">


      <Navbar login={isLoggedIn} admin={isAdmin} />
      <BrowserRouter>
       
          <Route exact path="/"  exact component={Homepage} />
          {/* <Route path="/cart" exact component={Cart}/> */}
          <Route path="/cart" exact component={Cart}/>
          <Route path="/register" exact component={Register}/>
          {/* <Route path="/login"  component={Login} /> */}
          <Route path="/login" render = {() => (
            <Login setLogin={setIsLoggedIn} setAdmin={setIsAdmin} />
          )} />
          {/* <Route path='/users' exact component={Users}/> */}
          {/* <Route path='/admin' component={Admin}/> */}
       
       </BrowserRouter>
    </div>
  );
}

export default App;
