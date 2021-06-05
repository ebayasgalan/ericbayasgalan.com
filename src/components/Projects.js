import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import localReviewPic from '../images/App.png';
import CovidTrackerPic from '../images/covidTracker.png';
import newRelicPic from '../images/new_relic.png';
import oceanBeach from '../images/hotel.png';
import easyMarket from '../images/eCommerce.png';
import comingSoon from '../images/comingSoon.jpg';

const StyledComponent = styled.div`
  background: linear-gradient(#becfdc, #545c6b);
  .items {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .item {
    /* border: black solid 1px; */
    flex-basis: 400px;
    height: auto;
    margin-right: 20px;
  }
  img {
    /* border-radius: 1rem;
    margin-top: 1rem; */
    object-fit: cover;
    height: 200px;
    padding: 0.5rem;
    :hover {
      cursor: pointer;
    }
  }
  .buttons {
    text-align: center;
    padding: 1rem;
  }
  button {
    background: #becfdc;
    border-radius: 0.6rem;
    width: 6rem;
    height: 2.5rem;
    margin-right: 20px;
    :hover {
      cursor: pointer;
      color: white;
    }
  }
  h2 {
    text-align: center;
    font-size: 34px;
  }
  .description {
    font-size: 16px;
    padding: 1rem;
  }
  .builtWith {
    margin-top: 1rem;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    h1 {
      font-size: 40px;
    }
    img {
      width: 360px;
    }
    .description {
      font-size: 22px;
    }
    button {
      width: 9rem;
      height: 3.5rem;
      font-size: 20px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .showcase {
      grid-template-columns: 1fr 1fr;
    }
    h2 {
      font-size: 50px;
      padding-top: 2rem;
    }
    img {
      width: 380px;
    }
    .description {
      font-size: 24px;
      h3 {
        padding-top: 2rem;
      }
    }
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Projects = () => {
  const [card, setCard] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 300, friction: 70 },
  }));
  const [card2, setCard2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 300, friction: 70 },
  }));
  return (
    <StyledComponent>
      <h2>Projects</h2>
      <div className='items'>
      <div className='item'>Local Reviews
        <img src={localReviewPic} alt="reviews picture" />
        <div className="description">
          The local reviews section for the property page on a real estate website. It was built by React, styled-components, and Mongodb. This app includes list of reviews, dynamic rating, pop-up modal, and responsive design. 
        </div>
        <div className="buttons">
          <a
            href='https://youtu.be/EOjXjPxMcig'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>See the Demo</button>
          </a>
          <a
            href='https://github.com/Archon-Design/Local-Review'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>See the Code</button>
          </a>
        </div>
      </div>
      <div className='item'>Covid Tracker
        <img src={CovidTrackerPic} alt="covid picture" />
        <div className="description">
          Covid19 tracker that displays current impact on a selected country. This app was built as a challenge to have a minimum viable product in less than 2 days. It utilizes MERN stack. 
        </div>
        <div className="buttons">
          <a
            href='https://youtu.be/8roFU4GEeg4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>See the Demo</button>
          </a>
          <a
            href='https://github.com/ebayasgalan/Covid19'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>See the Code</button>
          </a>
        </div>
      </div>
      <div className='item'>System Design
        <img src={newRelicPic} alt="new relic picture" />
        <div className="description">
          Inherited backend legacy code and optimized it for high amount of traffic. 
        </div>
        <div className="buttons">
          <a
            href='https://github.com/3ephemeris/similar-products'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>See the Code</button>
          </a>
        </div>
      </div>
      </div>
    </StyledComponent>
  );
};

export default Projects;
