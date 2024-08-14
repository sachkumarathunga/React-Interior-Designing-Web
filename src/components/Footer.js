// src/components/Footer.js
import React from "react";
import logo from "../images/logo_removebg.png";
import "./Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="IDI Logo" />
        </div>
        <div className="footer-address">
          <p>
            Warehouse# 4, Ras al Khor Industrial Area 2 <br />
            Dubai, UAE <br />
          </p>
        </div>
        <div className="footer-address">
          <p>
            Mobile: 0555891992 <br />
            Mobile: 0509380025 <br />
          </p>
        </div>
        <div className="footer-address">
          <p>
            Email: <a href="mailto:sales@kottoor.com">sales@kottoor.com</a>{" "}
            <br />
            Website:{" "}
            <a
              href="http://www.kottoor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.kottoor.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
