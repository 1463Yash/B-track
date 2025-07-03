import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../../B_tract/src/components/Home";
import Yourdeals from "../../B_tract/src/components/Yourdeals";
import About from "../../B_tract/src/components/About";
import Services from "../../B_tract/src/components/Services";
import Navbar from '../../B_tract/src/components/Navbar';
import Footer from '../../B_tract/src/components/footer';
import Loginpage from '../../B_tract/src/components/Loginpage';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourdeals" element={<Yourdeals />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path='/login' element={<Loginpage />}/>
      </Routes>
    </Router>
    <Footer />
    </>

  );
}

export default App;
