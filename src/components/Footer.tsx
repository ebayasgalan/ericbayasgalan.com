import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 50px;
  background-color: black;
  color: white;
  font-size: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 8px;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h1>©2024. All Rights Reserved.</h1>
  </FooterWrapper>
);

export default Footer;
