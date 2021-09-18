import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import {IconGitHub, IconLinkedin, Email} from '../icons';

const StyledComponent = styled.div`
  background: #323746 ;
  height: 400px;
  color: white;
  display: grid;
  place-items: center;
  overflow-y: hidden;
  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 30px;
      padding: 30px;
    }
    .social_links {
      display: flex;
      width: auto;
      height: auto;
    }
    img {
      border-radius: 50%;
      height: 220px;
      width: 220px;
    }
  }

  /* for medium size screens */

  @media screen and (min-width: 478px) {
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
    }
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    height: 100vh;
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
        <StaticImage src="../images/proPic.jpeg" alt='profile picture'/>
        <div className="social_links">
            <StyledLink
              href='https://github.com/ebayasgalan'
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='github icon'
            >
              <IconGitHub />
            </StyledLink>
            <StyledLink
              href='https://www.linkedin.com/in/eric-bayasgalan-849824149/'
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label='github icon'
            >
              <IconLinkedin />
            </StyledLink>
            <StyledLink
              href='mailto:eric.bayasgalan@gmail.com'
              aria-label='mail icon'
            >
              <Email />
            </StyledLink>
        </div>
    </div>
  </StyledComponent>
);

export default Contact;
