import React from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
  .home {
    height: 750px;
  }
  .intro {
    text-align: center;
    position: relative;
    top: 300px;
  }
`;

const Home = () => (
  <StyledIntro>
    <div className="home">
      <div className="intro">
        <h1>
          Hi,
          <br />
          I'm Enkhtaivan Bayasgalan and I make websites
        </h1>
      </div>
    </div>
  </StyledIntro>
);

export default Home;
