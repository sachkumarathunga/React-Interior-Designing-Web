// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/Our Portfolio">Our Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
