import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAbout = styled.section`
  height: 100vh;
  display: grid;
  place-items: center;
  background: #323746;
  color: white;
  font-size: 18px;
  padding: 20px;
  .description {
    text-align: center;
    img {
      height: 120px;
      padding: 10px;
      background: white;
      border-radius: 20px;
    }
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .description {
      font-size: 28px;
      img {
        height: 200px;
        margin-top: 20px;
      }
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .description {
      font-size: 36px;
      img {
        height: 240px;
        margin-top: 10px;
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout 
    >
      <div id="about">
        <div className='description'
          data-sal="slide-left"
          data-sal-duration="1000" 
        >
          <p>
            Hello! I love working with software technologies and contributing to open source projects. I enjoy building excellent user interfaces which focuses on user experience. 
            I've built multiple full stack applications working with remote scrum team using various tech stacks. 
          </p>
          <br />
          <p>
            I have over three years of experience in building web applications. Here are the technologies I've been working
            with:
          </p>
          <StaticImage src="../images/webTechs.svg" alt='techs' />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
