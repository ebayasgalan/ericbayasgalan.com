import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import {IconGitHub, IconLinkedin, Email} from '../icons';

// orange: #fec25b 
// dark: #252733 
// light dark: #323746 

const StyledComponent = styled.div`
  background: #323746 ;
  height: 400px;
  color: white;
  h1 {
    text-align: center;
    padding: 30px;
  }
  .contact {
    display: flex;
    align-items: center;
    flex-direction: column;
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

  @media (min-width: 478px) {
    /* .header {
      padding-top: 1rem;
      font-size: 40px;
      left: 46%;
    } */
  }

  /* for large size screens */

  @media (min-width: 976px) {
    height: 100vh;
    /* .header {
      font-size: 50px;
    } */
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
  @media screen and (min-width: 478px) {
    svg {
      width: 42px;
      height: 42px;
    }
  }
`;

const Contact = () => (
  <StyledComponent id="contact">
    <h1>Get in Touch</h1>
    <div className='contact'>
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
