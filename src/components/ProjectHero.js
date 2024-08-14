import React from "react";
import "./ProjectHero.css";

const ProjectHero = () => {
  return (
    <section className="project-hero">
      <div className="hero-content">
        <h1>Marquette County Medical Care Facility</h1>
        <span className="location">Ishpeming, MI</span>
        <p>
          The Marquette County Medical Care Facility (MCMCF) provides a
          family-oriented environment, where people both young and old can share
          their lives together. Located in a quiet, country setting in
          Michigan’s Upper Peninsula, this single-story facility provides all
          the comforts of home, offering housing for short-term and long-term
          residents.
        </p>
      </div>
      <div className="hero-image-container">
        <img
          src="https://images.prismic.io/idi2019/d9ac03ab-a700-4263-a3bc-719c380dd199_project_mcmcf_2.jpg?auto=compress,format&w=1800&h=840&fit=crop&fm=pjpg"
          alt="Marquette County Medical Care Facility"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default ProjectHero;
