import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledIntro = styled.section`
  position: relative;
  .text-box {
    position: absolute;
    top: 38%;
    right: 40%;
    color: white;
    line-height: 30px;
    font-size: 18px;
  }

  /* for medium size screens */

  @media (min-width: 678px) {
    .text-box {
      position: absolute;
      top: 38%;
      right: 40%;
      color: white;
      line-height: 60px;
      font-size: 36px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .text-box {
      position: absolute;
      top: 36%;
      right: 50%;
      color: white;
      line-height: 90px;
      font-size: 50px;
    }
  }
`;

const Home = () => {
  return (
    <StyledIntro>
      <StaticImage src='../images/homePage.jpg' alt='landing page photo' />
        <div className='text-box'>
            <p>Hi, my name is </p>
            <h1>Eric Bayasgalan.</h1>
            <p>I build things for the web.</p>
        </div>
    </StyledIntro>
  );
};

export default Home;
