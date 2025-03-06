import React from "react";
import "../Style/MiddilePage.css"; // Ensure you have a CSS file for styling

const MiddilePage = () => {
  return (
    <div className="buttons-container">
      <div className="button-row">
        <button className="styled-btn">Pet Care</button>
        <button className="styled-btn">Lost & Found</button>
        <button className="styled-btn">More</button>
      </div>
    </div>
  );
};

export default MiddilePage;
