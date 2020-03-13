import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  text-align: center;
  background-color: black;
  height: 3.3rem;
  padding-top: 0.4rem;
  p {
    color: white;
    font-size: 12px;
  }
  a {
    font-size: 0.7rem;
    padding-top: 0.8rem;
    margin: 0.5rem;
    border-radius: 50%;
    background-color: gray;
    img {
      width: 50px;
      height: 20px;
    }
    :hover {
      background-color: white;
    }
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    height: 6rem;
    padding: 1rem;
    p {
      font-size: 18px;
    }
    a {
      font-size: 2rem;
      img {
        width: 60px;
        height: 34px;
      }
    }
  }
`;

// const SocialLinks = styled.ul`
//   list-style: none;
//   padding: 2px;
//   display: flex;
//   justify-content: center;
// `;

const Footer = () => (
  <FooterWrapper>
    {/* <SocialLinks> */}
    <p>Designed and built by Eric Bayasgalan</p>
    {/* </SocialLinks> */}
  </FooterWrapper>
);

export default Footer;
