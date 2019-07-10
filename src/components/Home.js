import React from "react";
import styled from "styled-components";
import homePage from "../images/homePage.jpg";

const StyledIntro = styled.div`
  img {
    width: 100%;
    margin: 0;
  }
  .home {
    position: relative;
    width: auto;
  }
  .intro {
    position: absolute;
    top: 45%;
    left: 18rem;
    text-align: center;
    color: white;
  }
  .name {
    font-size: 86px;
  }
  .title {
    font-size: 36px;
    margin-top: 3rem;
  }
  @media (max-width: 768px) {
    .intro {
      left: 9rem;
    }
    .name {
      font-size: 44px;
    }
    .title {
      font-size: 26px;
    }
  }
`;

const Home = () => (
  <StyledIntro>
    <div className="home">
      <img src={homePage} alt="desk" />
      <div className="intro">
        <p className="name">ERIC BAYASGALAN</p>
        <p className="title">Full Stack Software Engineer</p>
      </div>
    </div>
  </StyledIntro>
);

export default Home;
