import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";
import webTechs from "../images/webTechs.svg";

const StyledAbout = styled.section`
  .about {
    background: linear-gradient(#1d222b, #becfdc);
    color: #000;
  }
  .picture {
    text-align: center;
    margin: 0.5rem;
    img {
      border-radius: 50%;
      height: 260px;
    }
  }
  .description {
    padding: 1rem;
    text-align: center;
    line-height: 1.7rem;
    font-size: 20px;
  }
  h1 {
    padding-top: 1rem;
    text-align: center;
    font-size: 32px;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <h1>About me</h1>
        <div className="picture">
          <img src={proPic} alt="atLibrary" />
        </div>
        <p className="description">
          Hi, I am a full stack developer and I love creating web apps. I have
          passion for learning new technologies and building great user
          experience applications. Aside from coding, I enjoy being outdoors,
          playing basketball, and spending time with family and friends.
        </p>
        <h1>Skills</h1>
        <img src={webTechs} alt="" height="200px" width="100%" />
      </div>
    </StyledAbout>
  );
};

export default About;
