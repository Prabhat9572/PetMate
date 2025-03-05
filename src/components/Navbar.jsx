import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../assets/dog-logo.jpg"; // Ensure you have a dog logo in this path
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
        <img src={logo} alt="Dog Logo" className="logo" />
        <h2>PetMate</h2>
      </div>

      <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/adopt" onClick={closeMenu}>Adopt</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/lost-found" onClick={closeMenu}>Lost & Found</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        <li><Link to="/sign in" onClick={closeMenu}>Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
