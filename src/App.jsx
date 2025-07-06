import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/Home'
import Billing from './components/Billing'
import Inventory from './components/Inventory'
import Retailer from './components/Retailer'
import Vendors from './components/Vendors'
import Serachbar from './components/Serachbar'
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' , height: '100vh'}}>
        <Navbar />
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
          <Serachbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/retailer" element={<Retailer />} />
            <Route path="/vendors" element={<Vendors />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
