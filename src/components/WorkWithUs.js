// src/components/WorkWithUs.js
import React from "react";
import "./WorkWithUs.css";
import join from "../images/about us/Join with us.jpg";

const WorkWithUs = () => {
  return (
    <section className="work-with-us">
      <div className="work-with-us-container">
        <div className="work-with-us-image">
          <img
            src={join}
            alt="Team working"
          />
        </div>
        <div className="work-with-us-content">
          <h2 className="work-with-us-heading">Join with us</h2>
          <p className="work-with-us-text">
            Eager to bring your vision to life? We’re ready to help!
          </p>
          <p className="work-with-us-text">
            Serving clients across the UAE, our team is based in Dubai. Reach
            out to us at +971 55 5891992, or simply click the link below to fill
            out our contact form. We’re excited to collaborate with you!
          </p>
          <a href="/contact" className="work-with-us-button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
