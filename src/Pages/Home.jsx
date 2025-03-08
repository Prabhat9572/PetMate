import React from "react";
import "../Style/Home.css";
import backgroundImage from "../assets/background.webp"; // Ensure the image exists
import MiddilePage from "../Pages/MiddilePage.jsx";
// import Petimage from "./petimage.jsx";

const Home = () => {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="hero-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh", // Restrict the height
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.3)", // Darkens background
            zIndex: 1,
          }}
        ></div>

        {/* Hero Content */}
        <div className="hero-section" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text">
            <h1>Adopt A Pet</h1>
            <h1>Find Your New Best Friend</h1>

            {/* Modern Search Bar */}
            <div className="search-bar">
              <input type="text" placeholder="Search for pets..." />
              <button>🔍</button>
            </div>
            

            {/* Button Row */}
            <div className="button-row">
              <button className="animated-btn">Search</button>
              
            </div>
            <p>Your new best friend is waiting! Browse our adorable pets looking for a loving home.</p>
          </div>
        </div>
      </div>

      {/* Middile Page without Background */}
      <div className="middle-page" style={{ background: "#fff", padding: "20px 0" }}>
        {/* <Petimage /> */}
        <MiddilePage />
      </div>
    </>
  );
};

export default Home;
