import React from "react";
import "./ServicesHero.css";
import heroImage from "../images/services/hero1.jpg"; // Replace with the path to your image

const ServicesHero = () => {
  return (
    <section className="ServicesHero">
      <div className="ServicesHero__MediaWrap">
        <div className="ServicesHero__HeroImg">
          <img src={heroImage} alt="Services Hero" />
        </div>
      </div>
      <div className="ServicesHero__HeroCopy">
        <h1 className="ServicesHero__Title">Services</h1>
        
      </div>
    </section>
  );
};

export default ServicesHero;
