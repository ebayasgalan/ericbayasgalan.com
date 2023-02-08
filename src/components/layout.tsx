import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import './styles/layout.css';
import Navigation from './Nav';

const StyledLayout = styled.div`
  position: relative;
`;


const Layout = ({ children }: any) => {
  return (
    <StyledLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Site</title>
      </Helmet>
      <Navigation />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
