import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 40px;
  text-align: center;
  background-color: black;
  color: white;
  font-size: 5px;
  line-height: 40px;

  /* for medium size screens and up*/

  @media (min-width: 478px) {
    font-size: 8px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h1>©2021. All Rights Reserved.</h1>
  </FooterWrapper>
);

export default Footer;
