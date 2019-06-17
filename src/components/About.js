import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .description {
    margin: 4rem 3rem;
    padding: 0.3rem;
    text-align: center;
    align-content: center;
    line-height: 4rem;
    font-size: 30px;
  }
  .about::before {
    position: absolute;
    height: 100px;
    width: 100%;
    z-index: -1;
    content: "";
    transform-origin: top right;
    transform: skewY(2.5deg);
    background: linear-gradient(to left, #fde57e, #9d8210 70%);
  }
  h1 {
    padding-top: 6rem;
    text-align: center;
  }
  height: 700px;
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <h1>About</h1>
        <h3 className="description">
          I am a front-end engineer living and working in the Bay Area. I love
          building websites and I am dedicated to my work. Every project or a
          problem is a chance for me to improve my knowledge and better myself
          as a developer and co-worker. I see myself as a flexible developer,
          able to work with any team and understand the goal of each project.
        </h3>
      </div>
    </StyledAbout>
  );
};

export default About;
