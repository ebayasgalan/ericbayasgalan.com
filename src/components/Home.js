import React from "react";
import styled from "styled-components";
import homePage from "../images/homePage.jpg";

const StyledIntro = styled.div`
  height: 860px;
  img {
    height: inherit;
    width: 100%;
    margin: 0;
  }
  .intro {
    position: absolute;
    bottom: 260px;
    left: 360px;
    text-align: center;
    color: #becfdc;
  }
  .name {
    font-size: 100px;
  }
  .title {
    font-size: 36px;
    margin-top: 80px;
  }
  button {
    background: #3a617f;
  }
`;

const Home = () => (
  <StyledIntro>
    <div className="home">
      <img src={homePage} alt="desk" />
      <div className="intro">
        <p className="name">ERIC BAYASGALAN</p>
        <p className="title">Full Stack Software Engineer</p>
        <button>color: #8AA5BA</button>
      </div>
    </div>
  </StyledIntro>
);

export default Home;
