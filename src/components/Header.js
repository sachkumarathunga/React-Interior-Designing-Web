import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Navigation from "./Navigation";
import logo from "../images/logo_removebg.png";
import "./Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isNavOpen]);

  return (
    <div>
      <AppBar position="fixed" className="appbar">
        <Toolbar className="header">
          <div className="logo">
            <Link to="/">
              {" "}
              {/* Link to the home page */}
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
          </div>
          <IconButton
            edge="end"
            color="black"
            aria-label="menu"
            onClick={toggleNav}
            className="menu-icon"
          >
            {isNavOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className={`nav-container ${isNavOpen ? "open" : ""}`}>
        {isNavOpen && <Navigation />}
      </div>
    </div>
  );
};

export default Header;
