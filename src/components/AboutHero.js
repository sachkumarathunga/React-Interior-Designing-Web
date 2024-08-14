import React, { useState, useEffect } from "react";
import heroVideo from "../video/about_hero.mp4";
import heroImage from "../images/about us/about_hero_image.jpg"
import "./AboutHero.css";

const AboutHero = () => {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlayVideo(true);
    }, 4000); // 6000ms = 6 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <section className="AboutHero__StyledAboutHero">
      <div className="HeroMedia__VideoWrap">
        {playVideo ? (
          <video autoPlay loop muted playsInline className="HeroMedia__Video">
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={heroImage} alt="Hero" className="HeroMedia__Image" />
        )}
      </div>
    </section>
  );
};

export default AboutHero;
