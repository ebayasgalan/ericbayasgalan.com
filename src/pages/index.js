import React from "react";
import Layout from "../components/layout";
import Home from "../components/Home";
// import SEO from "../components/seo";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
    <Home />
    <About />
    <Projects />
    <Contact />
    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
