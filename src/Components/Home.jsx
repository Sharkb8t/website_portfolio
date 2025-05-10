/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../Assets/images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../Assets/images/sunset.jpg";

const imageAltText = "Picture of myself during a sunset on Madeira, Portugal.";
/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 *
 * @param {string} name - Your name
 * @param {string} title - Your title
 */

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt={imageAltText} />
      <div className="home-content">
        <div className="name-title-wrapper">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="scroll-indicator">
        <img src={arrowSvg} alt="Scroll down indicator" />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
