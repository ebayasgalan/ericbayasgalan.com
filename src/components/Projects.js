import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/OceanBeach.png";
import easyMarket from "../images/easyMarket.png";

const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  height: 695px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 3px;
  padding: 10px;
  a {
    padding: 3px 5px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
    margin-left: 0.5rem;
    :hover {
      color: white;
    }
  }
`;

const Projects = () => (
  <StyledComponent>
    <div>
      <img src={oceanBeach} alt="hotel picture" />
      <a href="https://hotel-next-prod.herokuapp.com/">See the Demo</a>
      <a href="https://github.com/ebayasgalan/Ocean-Beach-Hotel">
        See the Code
      </a>
    </div>
    <div>
      <img src={easyMarket} alt="easy-market picture" />
      <a href="https://easy-market-next-prod.herokuapp.com">See the Demo</a>
      <a href="https://github.com/ebayasgalan/easy-market">See the Code</a>
    </div>
  </StyledComponent>
);

export default Projects;
