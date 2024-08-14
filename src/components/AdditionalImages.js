import React from "react";
import "./AdditionalImages.css";
import aboutImage2 from "../images/about_hero-brighton.avif"; // Replace with your image path
import aboutImage3 from "../images/higher-education.avif"; // Replace with your image path

const AdditionalImages = () => {
  return (
    <section className="additional-images">
      <div className="additional-images-wrapper">
        <img className="large-image" src={aboutImage2} alt="Living Area" />
        <img className="small-image" src={aboutImage3} alt="Higher Education" />
      </div>
    </section>
  );
};

export default AdditionalImages;
