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
  img {
    border-radius: 2rem;
    margin-top: 2rem;
  }
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
  .buttons {
    text-align: center;
  }
  button {
    background: #80d6ff;
    border-radius: 0.4rem;
    width: 8rem;
    height: 3rem;
  }
`;

const Projects = () => (
  <StyledComponent>
    <div>
      <img src={oceanBeach} alt="hotel picture" />
      <div className="buttons">
        <a href="https://hotel-next-prod.herokuapp.com/">
          <button>See the Demo</button>
        </a>
        <a href="https://github.com/ebayasgalan/Ocean-Beach-Hotel">
          <button>See the Code</button>
        </a>
      </div>
    </div>
    <div>
      <img src={easyMarket} alt="easy-market picture" />
      <div className="buttons">
        <a href="https://easy-market-next-prod.herokuapp.com">
          <button>See the Demo</button>
        </a>
        <a href="https://github.com/ebayasgalan/easy-market">
          <button>See the Code</button>
        </a>
      </div>
    </div>
  </StyledComponent>
);

export default Projects;
