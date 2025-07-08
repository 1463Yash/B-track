import React from "react";
import { Link } from "react-router-dom";
const linkstyle = {
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "#1589FF",
};
function Navbar() {
  return (
    <div
      className="sidebar"
      style={{
        borderRight: "1px solid #ccc",
        width: "20vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
        backgroundColor: "#ececec",
        color: "#333333",
      }}
    >
      <h2 style={{ fontSize: "32px", color: "#2c3e50" }}>B-track</h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
          padding: "0",
          fontSize: "2rem",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <li>
          <Link to="/" style={linkstyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Inventory" style={linkstyle}>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/retailer" style={linkstyle}>
            Retailers
          </Link>
        </li>
        <li>
          <Link to="/Vendors" style={linkstyle}>
            Vendors
          </Link>
        </li>
        <li>
          <Link to="/Billing" style={linkstyle}>
            Billing
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
