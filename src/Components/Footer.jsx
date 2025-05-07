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

import socialIcons from "../Assets/socialIcons";

const Footer = ({ socialLinks, name }) => {
  return (
    <footer id="footer">
      <div className="social-links">
        {Object.entries(socialLinks).map(([platform, url]) => {
          if (!url || !socialIcons[platform]) return null;
          
          return (
            <a
              key={platform}
              href={platform === 'email' ? `mailto:${url}` : url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform}
            >
              <img 
                src={socialIcons[platform]} 
                alt={`${platform} icon`}
                className="social-icon"
                onError={(e) => {
                  e.target.style.display = 'none'; // Hide broken icons
                }}
              />
            </a>
          );
        })}
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