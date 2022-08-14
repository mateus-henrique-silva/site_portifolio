import React from "react";
import AsideBox from "../../Components/AsideBox/AsideBox";
import AboutBody from "../../Components/AboutComponent/AboutComponent";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="flexComponents">
        <AsideBox />
        <AboutBody />
      </div>
    </>
  );
};

export default About;
