// src/components/OurClients.js
import React from "react";
import "./OurClients.css"; // Ensure you have this CSS file for styling

const OurClients = () => {
  return (
    <section className="our-clients">
      <h2 className="clients-heading">Our Clients</h2>
      <div className="clients-row">
        <span className="client-name">D.J. Jacobetti Home for Veterans</span>
        <span className="client-name">Marquette County YMCA</span>
        <span className="client-name highlight">
          Bay Mills Community College
        </span>
        <span className="client-name">Keweenaw Bay Indian Community</span>
        
      </div>
      <div className="clients-row">
        <span className="client-name">Superior Extrusions Inc.</span>
        <span className="client-name">Embers Credit Union</span>
        <span className="client-name">Lincoln Consolidated Schools</span>
        <span className="client-name highlight">The Delft Bistro</span>
        
      </div>
      <div className="clients-row">
        <span className="client-name highlight">Brighton Area Schools</span>
        <span className="client-name">Barrel + Beam</span>
        <span className="client-name">Cliffs Natural Resources</span>
        
      </div>
      <div className="clients-row">
        <span className="client-name">Wyandotte Public Schools</span>
        <span className="client-name">Northern Michigan University</span>
        <span className="client-name highlight">
          Peter White Public Library
        </span>
        <span className="client-name">Alpena Public Schools</span>
        
      </div>
      <div className="clients-row">
        <span className="client-name">Harrison Community Schools</span>
        <span className="client-name highlight">
          Michigan Technological University
        </span>
        <span className="client-name">
          Marquette County Medical Care Facility
        </span>
        <span className="client-name">
          Elkton-Pigeon Bay Port Lakers Schools
        </span>
        
      </div>
      <div className="clients-row">
        <span className="client-name">Rippling River Resort Campground</span>
        <span className="client-name">Hannahville Indian Community</span>
        <span className="client-name highlight">Meridian Public Schools</span>
        <span className="client-name">George Young Recreation Complex</span>
      </div>
    </section>
  );
};

export default OurClients;
