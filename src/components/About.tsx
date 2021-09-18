import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAbout = styled.section`
  min-height: 100vh;
  background: #323746;
  color: white;
  font-size: 20px;
  padding: 30px;
  .skills img {
    padding: 20px;
    /* background: rgba(254,194,91,.1); */
    background: white;
    border-radius: 20px;
  }
  .description {
    text-align: center;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .picture {
      img {
        height: 360px;
      }
    }
    .description {
      /* padding: 3rem; */
      font-size: 24px;
      line-height: 2.5rem;
    }
    .skills {
      img {
        margin-top: 3rem;
        height: 160px;
      }
    }
    h2 {
      font-size: 30px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .about {
      display: flex;
      padding: 6rem;
      align-content: space-around;
    }
    .description {
      font-size: 36px;
      margin-left: 5rem;
    }
    .skills {
      text-align: center;
      object-fit: cover;
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
            Hello! I'm Eric, a passionate software engineer residing in Chicago, IL.
            I enjoy building excellent user interfaces with efficient and modern technologies.     
          </p>
          <br />
          <p>
            I have over two years of experience in building websites
            and applications. Here are a few technologies I've been working
            with:
          </p>
          <div className='skills'>
            <StaticImage src="../images/webTechs.svg" height={200} alt='techs' />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
