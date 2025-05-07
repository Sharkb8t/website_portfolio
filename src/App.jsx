/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const primaryColor = "rgba(211, 120, 67, 0.75)";
const secondaryColor = "rgba(95, 64, 46, 0.8)";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */

const App = () => {
  const siteData = {
    name: "Dalton Schmidt",
    title: "Data Scientist & Machine Learning Engineer",
    description: "I'm a Data Analyst who originally studied Marine Science. My passion for understanding the world has motivated me to pursuing a career in Data Analytics. I am always eager to learn, and am always looking for new challenges. I believe that data has the power to change the world, and I am excited to be a part of that change.",
    skills: [
      "Data Analysis & Visualization",
      "Python & R Languages/Libraries",
      "SQL & Power BI",
      "JavaScript & Web Development",
      "Neural Networks",
      "Machine Learning & AI",
    ],
    socialLinks: {
      email: "daltonaschmidt@gmail.com",
      gitHub: "https://github.com/Sharkb8t",
      linkedIn: "https://linkedin.com/in/dalton-a-schmidt",
      kaggle: "https://www.kaggle.com/daltonschmidt",
      bluesky: "https://bsky.app/profile/daltonaschmidt.bsky.social",
      instagram: "",
      medium: "",
      youTube: "https://www.youtube.com/@DaltonASchmidt",
      microsoft: "",
      twitter: "",
    }
  };
  
  return (
    <div id="main">
      <Header />
      <Home name={siteData.name} title={siteData.title} />
      <About 
        description={siteData.description}
        skillsList={siteData.skills}
        detailOrQuote="'The mystery of life isn't a problem to solve, but a reality to experience.' - Frank Herbert (God Emperor of Dune)"
      />
      <Portfolio />
      <Footer 
        socialLinks={siteData.socialLinks} 
        name={siteData.name} 
      />
    </div>
  );
};

export default App;
