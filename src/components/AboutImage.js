import React from "react";
import "./AboutImage.css"; // Assuming you will put CSS in this file
import main1 from "../images/about us/main.jpg"
import main2 from "../images/about us/main2 - Copy (2).jpg"
import main3 from "../images/about us/pantry - Copy.jpg"

const AboutImages = () => {
  return (
    <div className="about-story-images">
      <div className="main-image">
        <img
          alt="Marquette employees outside at Black Rocks at Presque Isle."
          src={main1}
        />
      </div>
      <div className="angled-image angled-image-1" >
        <img
          alt="Marquette employees riding bikes on trails in the fall"
          src={main2}
        />
      </div>
      <div className="angled-image angled-image-2">
        <img
          alt="Marquette employees getting drinks at the Delft Bistro"
          src={main3}
        />
      </div>
    </div>
  );
};

export default AboutImages;
