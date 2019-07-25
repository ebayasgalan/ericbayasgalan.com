import React from "react";
import styled from "styled-components";
import homePage from "../images/homePage.jpg";

const StyledIntro = styled.section`
  .home {
    position: relative;
  }
  .text-box {
    position: absolute;
    height: 100%;
    text-align: center;
    width: 100%;
  }
  .text-box:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  .intro {
    display: inline-block;
    color: #fff;
  }
  p {
    padding: 0.5rem;
    font-size: 16px;
  }
  img {
    display: block;
    width: 100%;
    height: 100vh;
  }
  h1 {
    font-size: 36px;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    h1 {
      font-size: 56px;
    }
    p {
      padding-top: 1rem;
      font-size: 32px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    h1 {
      font-size: 76px;
    }
    p {
      font-size: 42px;
    }
  }
`;

const Home = () => {
  return (
    <StyledIntro>
      <div className="home">
        <div className="text-box">
          <div className="intro">
            <h1 className="name">ERIC BAYASGALAN</h1>
            <p>Web Developer</p>
          </div>
        </div>
        <img src={homePage} alt="desk" />
      </div>
    </StyledIntro>
  );
};

export default Home;
