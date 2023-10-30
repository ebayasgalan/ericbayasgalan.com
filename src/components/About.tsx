import React from 'react';
import styled from 'styled-components';
import webStack from '../images/techs.svg';

const StyledAbout = styled.section`
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #323746;
  color: white;
  font-size: 18px;
  .description {
    width: 85%;
    margin: auto;
    text-align: center;
    img {
      margin-top: 100px;
      height: 120px;
      width: 300px;
      padding: 5px;
      background: white;
      border-radius: 10px;
    }
  }

  @media (min-width: 768px) {
    height: 745px;
    .description {
      font-size: 28px;
      img {
        height: 220px;
        width: 600px;
        margin-top: 60px;
      }
    }
  }

  @media (min-width: 1024px) {
    .description {
      font-size: 30px;
      img {
        height: 240px;
      }
    }
  }
`;

const About = () => {
  return (
    <StyledAbout id="about"
    >
      <div>
        <div className='description'
          data-sal="slide-left"
          data-sal-duration="1000" 
        >
          <p>
            Hello, I love working with software technologies and deliver top-notch user experience that focuses on performance.
            I also enjoy collaborating with others as well as contributing to open source projects. 
          </p>
          <br />
          <p>
            I have over three years of experience. Here are the technologies I've been working
            with:
          </p>
          <img src={webStack} alt='list of modern technologies' />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
