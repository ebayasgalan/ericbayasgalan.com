import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";

const StyledIntro = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1 {
    text-align: center;
  }
  .pic {
    display: flex;
    .one {
      flex: 1;
    }
    padding-top: 3rem;
  }

  img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    margin: 3rem;
    padding: 0.3rem;
    border: 0.2rem solid #fde57e;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const Home = () => (
  <StyledIntro>
    <div className="home">
      <div className="pic">
        <span className="one" />
        <img src={proPic} alt="profile" />
        <span className="one" />
      </div>
      <h1>
        Hi,
        <br />
        I'm Enkhtaivan Bayasgalan and I am a web developer
      </h1>
    </div>
  </StyledIntro>
);

export default Home;
