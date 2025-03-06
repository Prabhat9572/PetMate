import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import logoVideo from "../assets/videologo.mp4"; // Ensure you have a video file here
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <video autoPlay loop muted className="logo">
          <source src={logoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <h2>PETMATE</h2> */}
      </div>

      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}><h1>Home</h1></Link></li>
        <li><Link to="/adopt" onClick={closeMenu}><h1>Adopt</h1></Link></li>
        <li><Link to="/services" onClick={closeMenu}><h1>Services</h1></Link></li>
        <li><Link to="/lost-found" onClick={closeMenu}><h1>Lost & Found</h1></Link></li>
        {/* <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li> */}
        <li><Link to="/sign-in" onClick={closeMenu}><h1>Sign In</h1></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
