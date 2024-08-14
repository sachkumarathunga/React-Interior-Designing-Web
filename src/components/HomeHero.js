import React, { useState, useEffect } from "react";
import "./HomeHero.css";
import heroImage1 from "../images/hero.avif";
import heroImage2 from "../images/hero2.avif";


const images = [heroImage1, heroImage2];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero-container">
      <img src={images[currentImageIndex]} alt="Hero" className="hero-image" />
      
    </div>
  );
};

export default Hero;
