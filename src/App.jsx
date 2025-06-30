import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Yourdeals from "./components/Yourdeals";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Loginpage from './components/Loginpage';
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
