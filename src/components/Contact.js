import React from 'react';
import styled from 'styled-components';
import deskTop from '../images/contactPage.jpg';
import myPic from '../images/proPic.jpeg';

const StyledComponent = styled.div`
  .contact {
    position: relative;
    a {
      text-decoration: none;
      color: black;
      font-size: 13px;
      :hover {
        color: #becfdc;
      }
    }
  }

  .info img {
    position: absolute;
    top: 16%;
    left: 45%;
    border-radius: 80%;
    height: 260px;
    width: 260px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
  .header {
    color: white;
    font-size: 30px;
    position: absolute;
    left: 9.5rem;
  }
  .cards {
    position: absolute;
    top: 2.5rem;
    left: 8.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .card_items {
    color: black;
    font-size: 17px;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .cards {
      top: 6rem;
      right: 2rem;
      a {
        font-size: 30px;
      }
    }
    .card_items {
      font-size: 28px;
      margin-bottom: 2rem;
    }
    .header {
      padding-top: 1rem;
      font-size: 40px;
      left: 46%;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .card_items {
      font-size: 36px;
      margin-bottom: 4rem;
    }
    .header {
      font-size: 50px;
    }
    .cards {
      position: absolute;
      height: 100%;
      text-align: center;
      max-width: 100%;
      margin-top: 4rem;
    }
    .cards:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
`;

const Contact = () => (
  <StyledComponent>
    <div className='contact'>
      <div className='info'>
        <p className='header'>Get In Touch</p>
        <img src={myPic} alt='profile picture' />
      </div>
      <img src={deskTop} alt='workSpace' />
    </div>
  </StyledComponent>
);

export default Contact;
