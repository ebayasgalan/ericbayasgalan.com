import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";

const StyledIntro = styled.div`
  .home {
    height: 695px;
  }
  .intro {
    text-align: center;
  }
  .picture {
    display: flex;
    .one {
      flex: 1;
    }
  }
  img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    margin: 2rem;
    padding: 0.3rem;
  }
`;

const Home = () => (
  <StyledIntro>
    <div className="home">
      <div className="intro">
        <div className="picture">
          <span className="one" />
          <img src={proPic} alt="profile picture" />
          <span className="one" />
        </div>
        <h1>
          Hi,
          <br />
          I'm Enkhtaivan Bayasgalan and I make web apps
        </h1>
      </div>
    </div>
  </StyledIntro>
);

export default Home;
