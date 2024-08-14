import React from "react";
import "./WhatWeOffer.css";
import offerImage from "../images/home horizontal image.avif"; // Replace with your image path

const WhatWeOffer = () => {
  return (
    <div className="Section-sc-1vjgz5n-0 gMfwoD">
      <div className="Container-sc-1uyjznq-0 eBZEyY Grid-sc-1gc00t8-0 fakLAl">
        <div className="Grid__Item-sc-1gc00t8-1 CenteredContent__ContentWrap-sc-yfj9nq-0 lbvRqf">
          <h3 className="H__H1-sc-be5gk5-0 HomeIndustries__IndustryHeading-sc-12x8pk9-1 eGDaCZ">
            What We Offer
          </h3>
          <p>
            From conception to construction, we pride ourselves on offering our
            expertise in architecture and structural, mechanical, electrical and
            civil engineering to help your vision come to life. Whether you need
            a student center or a place to build or sell your goods, we’ll work
            with you to create a design that is creative, affordable and
            functional.
          </p>
        </div>
      </div>
      <div className="ImageContainer">
        <img src={offerImage} alt="What We Offer" className="OfferImage" />
      </div>
      <div className="Container-sc-1uyjznq-0 eBZEyY Grid-sc-1gc00t8-0 fakLAl">
        <div className="Grid__Item-sc-1gc00t8-1 HomeIndustries__MainIndustryContent-sc-12x8pk9-4 evdcvr">
          <h4 className="H__H4-sc-be5gk5-2 HomeIndustries__MainIndustryHeading-sc-12x8pk9-3 hVZaQy">
            K-12 Education
          </h4>
          <p>
            We’re building the future, one brick at a time. From the commons to
            the classroom, we create spaces that help students reach their full
            potential.
          </p>
          <a
            aria-label="K-12 Education"
            className="StyledLink-sc-zurfbq-0 vQgHw"
            href="/k12-education"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
