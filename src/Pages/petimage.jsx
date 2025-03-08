import React from "react";
import { motion } from "framer-motion";
import "../Style/petimage.css"; // Import the CSS file
import { FaDog, FaCat } from "react-icons/fa";
import video1 from "../assets/video1.mp4";

const Petimage = () => {
  return (
    <div className="container">
      <div className="content">
        {/* Video Section */}
        <div className="video-section">
          <video autoPlay loop muted className="video-content">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Section with Animation */}
        <motion.div 
          className="text-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>
            <FaDog className="icon" /> Every pet deserves a loving home. Will it be yours? <FaCat className="icon" /> 
          </h2>
          <p>
            A pet won’t change the world, but for that one pet, the world changes forever. Adopt today!
          </p>

          {/* Animated Button */}
          <motion.button 
            className="adopt-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Adopt Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Petimage;
