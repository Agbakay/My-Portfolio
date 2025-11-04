import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Homepage/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Navbar from "./components/Navbar";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
