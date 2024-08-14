// src/components/OurProcess.js
import React from "react";
import "./OurProcess.css"; // Create a CSS file for styling
import heroImage from "../images/about us/about_hero_image2.webp";
import heroImage2 from "../images/about us/ourprocessimage2.webp";

const OurProcess = () => {
  return (
    <div className="our-process">
      <div className="text-content">
        <h1>Our Process</h1>
        <p>
          At Kottoor, our process starts with a thorough understanding of your
          needs and vision. We collaborate closely with you to define your
          goals, preferences, and functional requirements. This approach ensures
          that every design detail aligns with your objectives, resulting in a
          space that is both visually stunning and highly functional.
        </p>
        <p>
          Once the design is finalized, our in-house team steps in to bring your
          vision to life. With our own joinery facility and skilled craftsmen,
          we manage every aspect of the project—from material selection to final
          installation. This allows us to maintain the highest quality standards
          and deliver your project on time, making the entire experience
          seamless and stress-free.
        </p>
      </div>
      <div className="image-content">
        <img
          className="main-image"
          src={heroImage}
          alt="Person working on architectural plans"
        />
        <img
          className="secondary-image"
          src={heroImage2}
          alt="Field view from above"
        />
      </div>
    </div>
  );
};

export default OurProcess;
