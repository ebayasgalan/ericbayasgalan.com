import React from 'react';
import styled from 'styled-components';
import proPic from '../images/proPic.jpeg';

import {IconGitHub, Email, IconLinkedin} from '../icons';

const StyledComponent = styled.section`
  background: #323746;
  height: 650px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 30px;
      margin-bottom: 50px;
    }
    .social_links {
      display: flex;
      width: auto;
      height: auto;
      padding-bottom: 10px;
    }
    img {
      border-radius: 50%;
      height: 220px;
      width: 220px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 750px;
    .contact {
      img {
      height: 260px;
      width: 260px;
      }
      svg {
        width: 40px;
        height: 40px;
      }
      h1 {
        font-size: 34px;
        padding: 32px;
        margin-bottom: 20px;
    }
    }
  }

  @media (min-width: 1024px) {
    .contact {
      img {
      height: 300px;
      width: 300px;
      }
      svg {
        width: 50px;
        height: 50px;
      }
      h1 {
        font-size: 46px;
        padding: 40px;
      }
    }
  }
`;

const StyledLink = styled.a`
  padding: 30px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

const Contact = () => (
  <StyledComponent id="contact">
    <div className='contact'>
    <h1>Get in Touch</h1>
        <img src={proPic} alt='profile picture'/>
        <div className="social_links">
          
            <StyledLink
              href='https://github.com/ebayasgalan'
              target='_blank'
              rel='nofollow noopener noreferrer'
            >
              <IconGitHub />
            </StyledLink>
            <StyledLink
              href='https://www.linkedin.com/in/enkhtaivan-bayasgalan-849824149/'
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='linkedin icon'
            >
              <IconLinkedin />
            </StyledLink>
            <StyledLink
              href='mailto:eric.bayasgalan@gmail.com'
              aria-label='email icon'
            >
              <Email />
            </StyledLink>
        </div>
    </div>
  </StyledComponent>
);

export default Contact;
