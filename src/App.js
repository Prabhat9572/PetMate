import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Adopt from './pages/Adopt';
// import Services from './pages/Services';
// import LostFound from './pages/LostFound';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/services" element={<Services />} />
        <Route path="/lost-found" element={<LostFound />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
