import React from "react";
import "./HeroSection.css";
import videoSource from "../video/v1.mp4"; // Replace with your video path

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <h1>Creating Spaces that Work</h1>
        <p>
          Whether you’re working on simple renovations or a large-scale new
          facility, our dedicated staff of architects and engineers are here to
          offer professional and experienced advice. Our team gives you the care
          and attention you deserve, with solution-based feedback in all phases
          of the project and field observation on all types of construction
          projects. Quality shouldn’t come at a price. No matter what your
          vision, we’ll work with you to create functional and cost-effective
          designs that work for you and your community.
        </p>
      </div>
      <div className="hero-section-video">
        <video src={videoSource} alt="Nature Pathway" controls></video>
      </div>
    </section>
  );
};

export default HeroSection;
