import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 695px;

  h2 {
    margin-top: 20px;
    text-align: center;
  }
  .description {
    margin: 5rem 3rem;
    padding: 0.3rem;
    text-align: center;
    font-size: 30px;
    align-content: center;
    line-height: 4rem;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>ABOUT</h2>
      <div className="about">
        <h3 className="description">
          Hi, I'm Enkhtaivan Bayasgalan also known as Eric.
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
