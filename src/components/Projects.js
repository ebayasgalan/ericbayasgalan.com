import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/hotel.png";
import easyMarket from "../images/eCommerce.png";

const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .showcase {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin: 3px;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  img {
    border-radius: 2rem;
    margin-top: 2rem;
    height: auto;
    width: 450px;
    :hover {
      border: solid 0.2rem #fde57e;
    }
  }
  .buttons {
    text-align: center;
  }
  button {
    background: #fde57e;
    border-radius: 0.7rem;
    width: 8rem;
    height: 2.5rem;
    margin: 3px 6px;
  }
  .projects {
    margin-top: 200px;
  }
  .projects::before {
    position: absolute;
    height: 50px;
    width: 100%;
    z-index: -1;
    content: "";
    transform-origin: top right;
    transform: skewY(2.5deg);
    background: linear-gradient(to left, #fde57e, #9d8210 70%);
  }
  h1 {
    text-align: center;
    padding-top: 6rem;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    .showcase {
      grid-template-columns: 1fr;
    }
    img {
      width: 300px;
    }
    .projects {
      margin-top: 0;
    }
  }
`;

const Projects = () => (
  <StyledComponent>
    <div className="projects" />
    <h1>Projects</h1>
    <div className="showcase">
      <div>
        <img src={oceanBeach} alt="hotel" />
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
        <img src={easyMarket} alt="eCommerce" />
        <div className="buttons">
          <a href="https://easy-market-next-prod.herokuapp.com">
            <button>See the Demo</button>
          </a>
          <a href="https://github.com/ebayasgalan/easy-market">
            <button>See the Code</button>
          </a>
        </div>
      </div>
    </div>
  </StyledComponent>
);

export default Projects;
