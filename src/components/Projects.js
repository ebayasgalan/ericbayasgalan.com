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
  background: linear-gradient(#becfdc, #1d222b);
  height: 800px;
  .showcase {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1px;
    margin: 3px;
    padding: 10px;
    width: 90%;
    text-align: center;
  }
  img {
    border-radius: 2rem;
    margin-top: 2rem;
    height: auto;
    width: 350px;
  }
  .buttons {
    text-align: center;
  }
  button {
    background: #becfdc;
    border-radius: 0.7rem;
    width: 8rem;
    height: 2.5rem;
    margin: 3px 6px;
    :hover {
      background: white;
      cursor: pointer;
    }
  }
  h1 {
    text-align: center;
    padding-top: 6rem;
    margin-top: 20px;
  }
  .description {
    h2 {
      margin-top: 1.5rem;
    }
    font-size: 20px;
    p {
      margin: 1rem;
    }
  }
  @media (max-width: 768px) {
    .showcase {
      grid-template-columns: 1fr;
    }
    img {
      width: 400px;
    }
    .projects {
      margin-top: 100px;
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
      </div>
      <div className="description">
        <h2>Ocean Beach Hotel</h2>
        <p className="builtWith">
          Built with: Javascript | Next.js | Graphql-Yoga | Prisma | Apollo{" "}
        </p>
        <p className="summary">
          A hotel web application that allows the user to make a reservation
          after siging in.
        </p>
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
      </div>
      <div className="description">
        <h2>Easy Market</h2>
        <p className="builtWith">
          Built with: Javascript | Next.js | Apollo | Graphql-Yoga | Prisma |
          Stripe API | Cloudinary API
        </p>
        <p className="summary">
          Ecommerce web application that allows the user to post or view items
          for sale.
        </p>
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
