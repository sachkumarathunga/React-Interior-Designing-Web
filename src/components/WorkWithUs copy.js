// src/components/WorkWithUs.js
import React from "react";
import "./WorkWithUs copy.css";
import join from "../images/about us/Join with us.jpg";

const WorkWithUs2 = () => {
  return (
    <section className="work-with-us">
      <div className="work-with-us-container">
        <div className="work-with-us-image">
          <img src={join} alt="Team working" />
        </div>
        <div className="work-with-us-content">
          <h2 className="work-with-us-heading">Work with us</h2>
          <p className="work-with-us-text">Ready to get started? So are we!</p>
          <p className="work-with-us-text">
            We serve clients in the upper Midwest from our offices in Marquette
            and Brighton, Michigan. Please feel free to contact us , or fill out
            our contact form by clicking the link below. We look forward to
            working with you!
          </p>
          <p>
            Mobile: 0555891992 <br />
            Mobile: 0509380025 <br />
          </p>
          <a href="/contact" className="work-with-us-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs2;
