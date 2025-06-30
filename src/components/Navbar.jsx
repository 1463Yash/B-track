// File: my-project/src/components/navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "./Navbar.css";
import Loginpage from "./Loginpage";

function Navbar() {
  return (
    <div >
      <div className="header-p2p">
        <h1>P2P</h1>
        <Link to="/login"><Loginpage /><button>Login</button></Link>
      </div>
      <br />
      <div className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/yourdeals">Your Deals</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </div>
      <div className="search-bar"><Searchbar /></div>
     
      
    </div>
  );
}

export default Navbar;
