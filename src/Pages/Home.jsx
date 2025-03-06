import React from "react";
import "../Style/Home.css";
import backgroundImage from "../assets/background.webp"; // Ensure you have a background image in your assets

const Home = () => {
  return (
    <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Adopt A Pet</h1>
          <h1>Find Your New Best Friend</h1>
          
          {/* Modern Search Bar */}
          <div className="search-bar">
            <input type="text" placeholder="Search for pets..." />
            <button>🔍</button>
          </div>
          <p>Your new best friend is waiting! Browse our adorable pets looking for a loving home.</p>
          
          {/* Button Row */}
          <div className="button-row">
            <button className="animated-btn">Adopt</button>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Home;
