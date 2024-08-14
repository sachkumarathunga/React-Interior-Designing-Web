import React from "react";
import "./EngineeringSection.css";
import image1 from "../images/services/meeting room.jpg"; // Replace with the path to your image
import image2 from "../images/services/Quality.jpg"; // Replace with the path to your image

const EngineeringSection = () => {
  return (
    <section className="engineering-section">
      <div className="engineering-text">
        <h2>Engineering</h2>
        <p>
          Inspired by the potential of technology, our designs are just as
          innovative as they are efficient. With experience in civil,
          mechanical, electrical and structural engineering, our engineers can
          create a space that celebrates both structure and the natural assets
          of the community.
        </p>
        <ul>
          <li>Civil</li>
          <li>Mechanical</li>
          <li>Structural</li>
          <li>Electrical</li>
        </ul>
      </div>
      <div className="engineering-images">
        <img src={image1} alt="Engineering Image 1" className="image1" />
        <img src={image2} alt="Engineering Image 2" className="image2" />
      </div>
    </section>
  );
};

export default EngineeringSection;
