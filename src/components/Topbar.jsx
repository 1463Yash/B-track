import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
function Topbar() {
  const navigate = useNavigate();
  const handleover = () => {
    navigate("/login");
  };
  const butstyle = {
    backgroundColor: "#1589FF",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  };
  return (
    <div
      style={{
        position:"relative",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#ececec",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Searchbar />
      <div style={{marginTop:"10px"}}><Link to="/login" onMo={handleover}>
        <button style={butstyle}>Login</button>
      </Link></div>
    </div>
  );
}

export default Topbar;
