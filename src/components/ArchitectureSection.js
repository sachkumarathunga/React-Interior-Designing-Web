import React from "react";
import "./ArchitectureSection.css";
import image1 from "../images/services/Office - Ms Mamta.jpg"; // Replace with the path to your image
import image2 from "../images/services/Office - Ms Mamta.jpg"; // Replace with the path to your image

const ArchitectureSection = () => {
  return (
    <section className="architecture-section">
      <div className="architecture-images">
        <img src={image1} alt="Image 1" className="image1" />
        <img src={image2} alt="Image 2" className="image2" />
      </div>
      <div className="architecture-text">
        <h2>Architecture</h2>
        <p>
          Our goal is to create spaces that enhance your community. With
          expertise in renovations, new construction, construction
          administration, and much more, our architectural team has the skill
          and know-how to bring your vision to life, all while keeping you on
          track and on budget.
        </p>
        <ul>
          <li>Interior renovations</li>
          <li>Conceptual design</li>
          <li>New construction</li>
          <li>Computer rendering</li>
          <li>Building restoration</li>
          <li>Construction administration</li>
        </ul>
      </div>
    </section>
  );
};

export default ArchitectureSection;
