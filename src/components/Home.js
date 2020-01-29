import React from 'react';
import styled from 'styled-components';
import homePage from '../images/homePage.jpg';

const StyledIntro = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .home {
    position: relative;
  }
  .text-box {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .text-box:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .intro {
    display: inline-block;
    color: #fff;
    margin: 8rem 1rem;
    padding: 0.5rem;
  }
  .intro p {
    font-size: 14px;
  }
  .intro .name {
    font-size: 34px;
  }
  .intro .subtitle {
    font-size: 28px;
  }
  .intro .description {
    width: 220px;
  }
  img {
    display: block;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    h1 {
      font-size: 56px;
    }
    p {
      padding-top: 1rem;
      font-size: 32px;
    }
    .intro p {
      font-size: 22px;
    }
    .intro .name {
      font-size: 56px;
    }
    .intro .subtitle {
      font-size: 58px;
    }
    .intro .description {
      width: 420px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .intro {
      margin: 15rem 12rem;
    }
    .intro p {
      font-size: 26px;
    }
    .intro .name {
      font-size: 68px;
    }
    .intro .subtitle {
      font-size: 66px;
    }
    .intro .description {
      width: 560px;
    }
  }
`;

const Home = () => {
  return (
    <StyledIntro>
      <div className='home'>
        <div className='text-box'>
          <div className='intro'>
            <p>Hi, my name is </p>
            <h1 className='name'>Eric Bayasgalan.</h1>
            <p className='subtitle'>I build things for the web.</p>
            <br />
            <p className='description'>
              I am a software engineer based in San Francisco, CA. I specialize
              in building high-quality websites and applications.
            </p>
          </div>
        </div>
        <img src={homePage} alt='desk' />
      </div>
    </StyledIntro>
  );
};

export default Home;
