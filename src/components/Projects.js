import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledComponent = styled.div`
  background: #252733;
  color: white;
  height: 100vh;
  display: grid;
  place-items: center;
  h2 {
    text-align: center;
  }
  .items {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .item img {
    border-radius: 30px;
    height: 120px;
    width: 240px;
    padding: 3px;
    :hover {
      cursor: pointer;
    }
  }
  .description, .buttons, .title{
    display: none;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .buttons, .title{
      display: block;
    }
    .title {
      font-size: 22px;
    }
    h2 {
      font-size: 36px;
      padding: 5px;
    }
    .items {
      flex-direction: row;
    }
    .items img {
      height: 200px;
      width: 320px;
    }
    .description {
      font-size: 18px;
    }
    .buttons button {
      width: 90px;
      height: 30px;
      border-radius: 10px;
      padding: 5px;
      margin: 5px;
      font-size: 18px;
      overflow-y: hidden;
      :hover {
        cursor: pointer;
        background: #000;
        color: white;
      }
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    height: 100vh;
    .description {
      display: block;
    }
    h2 {
      font-size: 38px;
    }
    .title {
      font-size: 26px;
    }
    .description {
      font-size: 24px;
      overflow-y: hidden;
      padding: 20px;
    }
    .buttons button {
      height: 44px;
    }
  }
`;

const Projects = () => {
  return (
    <StyledComponent id="projects">
      <h2>Projects</h2>
      <div className='items'>
      <div className='item'><span className="title">Local Reviews</span>
        <a href="https://youtu.be/EOjXjPxMcig" target='_blank' rel='noopener noreferrer'><StaticImage src='../images/localReview.png' alt="reviews picture" /></a>
        <div className="description">
          The local reviews section for the property page on a real estate website. It was built by React, styled-components, and Mongodb. This app includes list of reviews, dynamic rating, pop-up modal, and responsive design. 
        </div>
        <div className="buttons">
          <a
            href='https://youtu.be/EOjXjPxMcig'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Demo</button>
          </a>
          <a
            href='https://github.com/Archon-Design/Local-Review'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>&lt;Code /&gt;</button>
          </a>
        </div>
      </div>
      <div className='item'><span className="title">Covid Tracker</span>
        <a href="https://youtu.be/8roFU4GEeg4" target='_blank' rel='noopener noreferrer'><StaticImage src='../images/covidTracker.png' alt="covid picture" /></a>
        <div className="description">
          Covid19 tracker that displays current impact on a selected country. This app was built as a challenge to have a minimum viable product in less than 2 days. It utilizes MERN stack. 
        </div>
        <div className="buttons">
          <a
            href='https://youtu.be/8roFU4GEeg4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>Demo</button>
          </a>
          <a
            href='https://github.com/ebayasgalan/Covid19'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>&lt;Code /&gt;</button>
          </a>
        </div>
      </div>
      <div className='item'><span className="title">System Design</span>
        <StaticImage src='../images/new_relic.png' alt="new relic picture" />
        <div className="description">
          Inherited backend REST API of ecommerce website and optimized for high amounts of traffic. It was built by Nodejs, Postgresql, Nginx, Docker, and deployed on AWS EC2 instances.  
          It supports 0 - 10,000rps under 40ms with a 0% error rate. 
        </div>
        <div className="buttons">
          <a
            href='https://github.com/3ephemeris/similar-products'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button>&lt;Code /&gt;</button>
          </a>
        </div>
      </div>
      </div>
    </StyledComponent>
  );
};

export default Projects;
