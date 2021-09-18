import React from 'react';
import {Helmet} from 'react-helmet';
import './styles/layout.css';
import Navigation from './Nav';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio Site</title>
      </Helmet>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
