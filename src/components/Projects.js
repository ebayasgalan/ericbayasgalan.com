import React from 'react';
import styled from 'styled-components';
import eCommerce from '../images/eCommerce.png';
import localReview from '../images/localReview.png';
import newRelic from '../images/new_relic.png';

const StyledComponent = styled.section`
  background: #252733;
  color: white;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    text-align: center;
    margin-bottom: 50px;
  }
  .items {
    display: flex;
    text-align: center;
    flex-direction: column;
    gap: 20px;
    .item {
      flex: 1;
      img {
        object-fit: cover;
        border-radius: 30px;
        height: 140px;
        width: 300px;
        padding: 3px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }

  .buttons button {
    width: 110px;
    height: 30px;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
    font-size: 18px;
    overflow-y: hidden;
    opacity: .8;
    :hover {
      cursor: pointer;
      background: #000;
      color: white;
    }
  }

  .description, .buttons, .title {
    display: none;
  }

  @media (min-width: 768px) {
    height: 900px;
    .title {
      display: block;
      font-size: 24px;
    }
    h2 {
      font-size: 36px;
      padding: 5px;
    }
    .items .item img {
      height: 200px;
      width: 450px;
    }
    .description {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    height: 800px;
    .buttons {
      display: block;
      button {
        height: 44px;
      }
    }

    .items {
      flex-direction: row;
      gap: 0;
      .item img {
        width: 320px;
      }
    }
    h2 {
      font-size: 38px;
    }
    .title {
      font-size: 28px;
    }
    .description {
      font-size: 24px;
      padding: 20px;
      display: block;
    }
  }
`;

const Projects = () => {
  return (
    <StyledComponent id="projects">
      <h2>Projects</h2>
      <div className='items'>
        <div className='item'><span className="title">Local Reviews</span>
          <a href="https://youtu.be/EOjXjPxMcig" target='_blank' rel='noopener noreferrer'><img src={localReview} alt="reviews of people who have visited the property" /></a>
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
        <div className='item'><span className="title">Ecommerce</span>
          <a href="https://easy-market-iota.vercel.app" target='_blank' rel='noopener noreferrer'><img src={eCommerce} alt="List of items for sale" /></a>
          <div className="description">
            Full stack ecommerce web app that's focused on user experience and optimized for performance. It's built with Nextjs-13.4, Typescript, Tailwind, Sass, Nodejs, Prisma, Postgresql, Stripe, Next-Auth, and AWS-S3. 
            It allows the user to post an item for sale or place an order and view it. 
          </div>
          {/* <div className="description">
            Currently working on this project
          </div> */}
          <div className="buttons">
            <a
              href='https://easy-market-iota.vercel.app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>Demo</button>
            </a>
            <a
              href='https://github.com/ebayasgalan/easy-market'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>&lt;Code /&gt;</button>
            </a>
          </div>
        </div>
        <div className='item'><span className="title">System Design</span>
          <img src={newRelic} alt="new relic performance metrics" />
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
