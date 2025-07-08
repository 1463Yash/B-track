import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Billing from "./components/Billing";
import Inventory from "./components/Inventory";
import Retailer from "./components/Retailer";
import Vendors from "./components/Vendors";
import Searchbar from "./components/Searchbar";
import Loginpage from "./Sign_in_up_components/loginpage"; 
import  Topbar from "./components/topbar"; 
function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", height: "100vh", backgroundColor: "#eaeaea" }}
      >
        <Navbar />
        <div
          style={{
            marginLeft: "0px",
            paddingLeft: "20px",
            paddingTop: "5px",
            paddingRight: "20px",
            width: "100%",
          }}
        >
          <Topbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/retailer" element={<Retailer />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/login" element={<Loginpage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
