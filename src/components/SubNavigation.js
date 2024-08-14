import React from "react";
import "./SubNavigation.css";
import k12Image from "../images/k12.avif";
import businessImage from "../images/business.avif";
import higherEducationImage from "../images/higher-education.avif";
import livingImage from "../images/living.avif";
import municipalImage from "../images/municipal.avif";

const SubNavigation = () => {
  return (
    <div className="subnav-container">
      <div className="subnav">
        <div className="subnav-item">
          <img src={k12Image} alt="K-12 Education" />
          <p>K-12 Education</p>
        </div>
        <div className="subnav-item">
          <img src={businessImage} alt="Business" />
          <p>Business</p>
        </div>
        <div className="subnav-item">
          <img src={higherEducationImage} alt="Higher Education" />
          <p>Higher Education</p>
        </div>
        <div className="subnav-item">
          <img src={livingImage} alt="Living" />
          <p>Living</p>
        </div>
        <div className="subnav-item">
          <img src={municipalImage} alt="Municipal/Industrial" />
          <p>Municipal/Industrial</p>
        </div>
      </div>
    </div>
  );
};

export default SubNavigation;
