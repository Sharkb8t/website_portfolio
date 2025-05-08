/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../Assets/images/milkyway.jpg";

const imageAltText = "view of the milk way galaxy";

const Portfolio = ({ projects }) => {
  return (
    <section className="padding" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-container">
        <div className="portfolio-image">
          <img 
            src={image} 
            alt={imageAltText}
            loading="lazy"
            style={{ 
              width: '100%',
              height: 'auto',
              objectPosition: 'center center'
            }}
          />
          <p className="small" style={{ textAlign: 'center', marginTop: '1rem' }}>
            {imageAltText}
          </p>
        </div>
        <div className="portfolio-projects">
          {projects.map((project) => (
            <article className="project-card box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="project-thumbnail"
                  />
                )}
                <h3>{project.title}</h3>
                <p className="small">{project.description}</p>
                {project.skills && (
                  <div className="project-skills">
                    {project.skills.join(" • ")}
                  </div>
                )}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Portfolio;