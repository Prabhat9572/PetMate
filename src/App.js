import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer"; // ✅ Correctly imported Footer

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Remove the incorrect Footer route */}
      </Routes>
      <Footer /> {/* ✅ Place Footer outside of Routes to show on all pages */}
    </Router>
  );
};

export default App;
