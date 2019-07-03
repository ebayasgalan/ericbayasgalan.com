import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";
import webTechs from "../images/webTechs.svg";

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 880px;
  .about {
    background: linear-gradient(#1d222b, #becfdc);
    color: #000;
  }
  .pictures {
    text-align: center;
    margin: 10px;
    img {
      border-radius: 50%;
      height: 280px;
    }
  }
  .description {
    padding: 0.3rem;
    text-align: center;
    line-height: 2rem;
    font-size: 28px;
  }
  h1 {
    margin-top: 10px;
    padding-top: 4rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    .description {
      font-size: 26px;
      margin: 10px 0.5rem;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <h1>About me</h1>
        <div className="pictures">
          <img src={proPic} alt="atLibrary" />
        </div>
        <p className="description">
          I am a full stack software developer and I love building web
          applications. Every project is exciting and a chance for me to
          improve. I see myself as a flexible developer, able to work with any
          team and understand the goal of each project.
        </p>
        <h1>Skills</h1>
        <img src={webTechs} alt="" height="360px" width="100%" />
      </div>
    </StyledAbout>
  );
};

export default About;
