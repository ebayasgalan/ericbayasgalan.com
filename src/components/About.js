import React from 'react';
import styled from 'styled-components';
import proPic from '../images/proPic.jpeg';
import webTechs from '../images/webTechs.svg';

const StyledAbout = styled.section`
  .about {
    background: linear-gradient(#1d222b, #becfdc);
    color: #000;
  }
  .picture {
    text-align: center;
    padding-top: 2rem;
    img {
      border-radius: 10%;
      height: 260px;
    }
  }
  .skills {
    img {
      height: 160px;
      width: 100%;
    }
  }
  .description {
    padding: 0.5rem;
    line-height: 1.5rem;
    font-size: 20px;
  }
  h2 {
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
      padding: 3rem;
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
      padding: 10rem;
      align-content: space-around;
    }
    .picture {
      img {
        height: 360px;
        /* margin-top: 4rem; */
        object-fit: cover;
      }
    }
    .description {
      font-size: 24px;
      margin-left: 5rem;
    }
    .skills {
      img {
        margin-top: 3rem;
        height: 200px;
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className='about'>
        <div className='picture'>
          <img src={proPic} alt='atLibrary' />
        </div>
        <div className='description'>
          <p>
            Hello! I'm Eric, a software engineer residing in San Francisco, CA.
            I enjoy building high quality user interfaces with efficient and
            modern backends. I believe anything is possible through commitment
            and hardwork. I'm always up for learning new things.
          </p>
          <br />
          <p>
            I have over two years of experience in building exceptional websites
            and applications. Here are a few technologies I've been working
            with:
          </p>
          <div className='skills'>
            <img src={webTechs} alt='' />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
