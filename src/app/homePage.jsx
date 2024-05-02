'use client';

import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import { FaMoon, FaSun } from "react-icons/fa";
import HeaderHorizontal from "../components/header/HeaderHorizontal";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
// import Contact from "../components/Contact";
import Address from "../components/Address";
import Footer from "../components/footer/Footer";
// import Map from "../components/Map";
import HeaderMobile from "../components/header/HeaderMobile";
import "../styles/index.scss";

const homePage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""} page-wrapper`}>
      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        }
      />
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${
          isDark ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="portfolio-section" id="portfolio">
        <div className="container">
          <div className="titles">
            <h3>Portfolio</h3>
          </div>
          <Portfolio />
        </div>
      </div>
      {/* End Portfolio */}

      <div className="contact-section" id="contact">
        <div className="container">
          <div className="titles">
            <h3>Contact</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          {/* <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>

              <div className="fields">
                <Contact />
              </div>

            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>

          </div> */}
        </div>
      </div>
      {/* /CONTACT */}
      <Footer />
      <ToastContainer />
      {/* <!-- Scroll To Top --> */}
      <ScrollToTop />
    </div>
  );
};

export default homePage;
