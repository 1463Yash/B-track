import React from 'react'
import { Link } from 'react-router-dom';
const linkstyle={
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: 'black',
}
function Navbar() {
  return (
    <div className="sidebar" style={{borderRight: '1px solid black', padding: '20px', width: '20vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 style={{fontSize:'30px', margin:0,padding:0,borderBottom:'2px solid black'}}>B-track</h2>
        
      <ul style={{ listStyle: 'none',display: 'flex', flexDirection: 'column',width: '10vw',gap: '20px'}}>
        <li><Link to="/"  style={linkstyle}>Home</Link></li>
        <li><Link to="/Inventory" style={linkstyle}>Inventory</Link></li>
        <li><Link to="/Retailers" style={linkstyle}>Retailers</Link></li>
        <li><Link to="/Vendors" style={linkstyle}>Vendors</Link></li>
        <li><Link to="/Billing" style={linkstyle}>Billing</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
