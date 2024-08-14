import React from "react";
import "./ArchitectureSection copy.css";
import image1 from "../images/services/Office - Ms Mamta.jpg"; // Replace with the path to your image
import image2 from "../images/services/Office - Ms Mamta.jpg"; // Replace with the path to your image

const ArchitectureSection2 = () => {
  return (
    <section className="architecture-section">
      <div className="architecture-images">
        <img src={image1} alt="Image 1" className="image1" />
        <img src={image2} alt="Image 2" className="image2" />
      </div>
      <div className="architecture-text">
        <h2>Consulting</h2>
        <p>
          Whether you need help brainstorming, developing, or executing your
          design, our skilled and dedicated team of architects and engineers are
          here to help you navigate the project, follow best practices, and
          achieve your vision.
        </p>
        <ul>
          <li>Commercial</li>
          <li>Environmental</li>
          <li>Industrial</li>
          <li>Medical</li>
          <li>Educational</li>
          <li>Municipal</li>
          <li>Housing</li>
        </ul>
      </div>
    </section>
  );
};

export default ArchitectureSection2;
