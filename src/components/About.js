import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";

const StyledAbout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .about {
    display: flex;
    .one {
      flex: 1;
    }
  }
  img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    margin: 0.3rem;
    padding: 0.3rem;
  }
  h2 {
    text-align: center;
  }
  .description {
    height: 250px;
    width: auto;
    margin: 0.2rem;
    padding: 0.3rem;
    text-align: center;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>ABOUT</h2>
      <div className="about">
        <span className="one" />
        <div className="picture">
          <img src={proPic} alt="profile picture" />
        </div>
        <span className="one" />
      </div>
      <h3 className="description">
        Hi, I'm Enkhtaivan Bayasgalan also known as Eric.
        <br />I am a software engineer living and working in the Bay Area. I am
        dedicated to my work and passionate about making websites. I believe
        writing efficient, scalable and maintainable code is essential to
        programming. Every project or a problem is a chance for me to improve my
        knowledge and better myself as a developer and co-worker. I see myself
        as a flexible developer, able to work with any team and understand the
        goal of each project. I am currently seeking a full time position in
        software engineering or web development.
      </h3>
    </StyledAbout>
  );
};

export default About;