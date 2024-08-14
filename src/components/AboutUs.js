import React from "react";
import "./AboutUs.css";
import aboutImage1 from "../images/kalkaska-schools_4.avif"; // Replace with your image path
import aboutImage2 from "../images/living.avif"; // Replace with your image path
import aboutImage3 from "../images/higher-education.avif"; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <button>About Us</button>
      </div>
      <div className="about-us-images">
        <img src={aboutImage1} alt="Building" />
        
      </div>
    </section>
  );
};

export default AboutUs;
