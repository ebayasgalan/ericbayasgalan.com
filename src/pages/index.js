import React from 'react';
import Layout from '../components/layout';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
