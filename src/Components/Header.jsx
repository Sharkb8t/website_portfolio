/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#home">Home</a>
      <span className="nav-divider"></span>
      <a href="#about">About</a>
      <span className="nav-divider"></span>
      <a href="#portfolio">Portfolio</a>
      <span className="nav-divider"></span>
      <a href="#footer">Contact</a>
    </header>
  );
};

export default Header;
