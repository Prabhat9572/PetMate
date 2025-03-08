import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Footer from "./components/Footer"; // ✅ Correctly imported Footer

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> {/* ✅ Correct placement inside Routes */}
      </Routes>
      <Footer /> {/* ✅ Footer stays outside Routes to show on all pages */}
    </Router>
  );
};

export default App;
