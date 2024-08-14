import React, { useState } from "react";
import "./HiddenDoor.css";

import cardImage from "../images/contactus/card.jpeg";

const HiddenDoor = () => {
  const [doorOpen, setDoorOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleDoorToggle = () => {
    setDoorOpen(!doorOpen);
    if (doorOpen) {
      setZoomLevel(1); // Reset zoom level when closing the door
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Max zoom level is 3x
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom level is 1x (original size)
  };

  return (
    <div className="hidden-door-section">
      <h2 className="section-header">Connect with Our Visionary</h2>
      <div className="hidden-door-container">
        <div
          className={`door ${doorOpen ? "open" : ""}`}
          onClick={handleDoorToggle}
        >
          <div className="door-handle"></div>
        </div>
        <div className={`card-container ${doorOpen ? "visible" : "hidden"}`}>
          <img
            src={cardImage}
            alt="Executive Director"
            className="card-image"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          {doorOpen && (
            <div className="zoom-controls">
              <button onClick={handleZoomIn}>Zoom In</button>
              <button onClick={handleZoomOut}>Zoom Out</button>
              <button onClick={handleDoorToggle}>Close </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HiddenDoor;
