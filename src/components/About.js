import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 695px;
  .description {
    margin: 4rem 3rem;
    padding: 0.3rem;
    text-align: center;
    font-size: 30px;
    align-content: center;
    line-height: 4rem;
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

  .about::after {
    position: absolute;
    height: 100px;
    width: 100%;
    z-index: -1;
    content: "";
    transform-origin: top right;
    transform: skewY(2.5deg);
    background: linear-gradient(to left, #fde57e, #9d8210 70%);
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <h3 className="description">
          <br />
          <h1>About Me</h1>
          <br />I am a software engineer living and working in the Bay Area. I
          have big passion on web development and I am dedicated to my work.
          Every project or a problem is a chance for me to improve my knowledge
          and better myself as a developer and co-worker. I see myself as a
          flexible developer, able to work with any team and understand the goal
          of each project.
        </h3>
      </div>
    </StyledAbout>
  );
};

export default About;
