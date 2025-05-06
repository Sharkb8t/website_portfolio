/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import socialIcons from "../Assets/socialIcons.js";

const Footer = ({ socialLinks, name }) => {
  return (
    <footer id="footer">
      <div className="social-links">
        {Object.entries(socialLinks).map(([key, value]) => (
          value && (
            <a
              key={key}
              href={value.url || `mailto:${value}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
            >
              <img src={socialIcons[key]} alt={key} />
            </a>
          )
        ))}
      </div>
      <p className="copyright">Created by {name}</p>
    </footer>
  );
};

Footer.propTypes = {
  socialLinks: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default Footer;