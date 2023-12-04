import React from 'react';
import styled from 'styled-components';
// import { StaticImage } from "gatsby-plugin-image";
import homePagePic from '../images/homePage.png';

const StyledIntro = styled.section`
  position: relative;
  height: 750px;
  img {
    object-fit: cover;
    height: 101%;
    width: 100%;
  }
  .text-box {
    position: absolute;
    top: 38%;
    right: 35%;
    color: white;
    line-height: 40px;
    font-size: 20px;
    .name {
      font-size: 30px;
    }
  }

  @media (min-width: 768px) {
    .text-box {
      position: absolute;
      top: 42%;
      right: 50%;
      color: white;
      line-height: 50px;
      font-size: 28px;
      .name {
        font-size: 36px;
      }
    }
  }

  @media (min-width: 1024px) {
    .text-box {
      position: absolute;
      top: 40%;
      left: 10%;
      color: white;
      line-height: 60px;
      font-size: 36px;
      .name {
        font-size: 46px;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledIntro>
      <img src={homePagePic} alt='Office desk with items on top' />
        <div className='text-box'>
          <p>Hi, my name is </p>
          <p className='name'>Eric Bayasgalan.</p>
          <p>I build things for the web.</p>
        </div>
    </StyledIntro>
  );
};

export default Home;