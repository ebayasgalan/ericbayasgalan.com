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
    margin-top: 60px;
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
    padding-top: 2rem;
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
          Hi, I am a full stack developer and I love creating web apps. I have
          passion for learning new technologies and building great user
          experience applications. Aside from coding, I enjoy being outdoors,
          playing basketball, and spending time with family and friends.
        </p>
        <h1>Skills</h1>
        <img src={webTechs} alt="" height="360px" width="100%" />
      </div>
    </StyledAbout>
  );
};

export default About;
