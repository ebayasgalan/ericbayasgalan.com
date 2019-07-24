import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/hotel.png";
import easyMarket from "../images/eCommerce.png";

const StyledComponent = styled.div`
  background: linear-gradient(#becfdc, #1d222b);
  .showcase {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
  img {
    border-radius: 1rem;
    margin-top: 1rem;
    height: auto;
    width: 220px;
  }
  .buttons {
    text-align: center;
    margin: 10px;
  }
  button {
    background: #becfdc;
    border-radius: 0.6rem;
    width: 7rem;
    height: 2.5rem;
    margin-right: 20px;
  }
  h1 {
    text-align: center;
    padding-top: 5rem;
  }
  .description {
    h2 {
      margin-top: 1rem;
    }
    font-size: 16px;
  }
  .builtWith {
    margin-top: 1rem;
  }
  @media (min-width: 478px) {
    img {
      width: 360px;
    }
    .description {
      font-size: 24px;
    }
    button {
      border-radius: 0.6rem;
      width: 9rem;
      height: 3rem;
      margin-right: 1rem;
      font-size: 20px;
    }
  }
  @media (min-width: 976px) {
    .showcase {
      grid-template-columns: 1fr 1fr;
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
        <p className="summary">
          A hotel web application that allows the user to make a reservation
          after signing in.
        </p>
        <p className="builtWith">
          Built with: Javascript | Next.js | Graphql-Yoga | Prisma | Apollo{" "}
        </p>
        <div className="buttons">
          <a
            href="https://hotel-next-prod.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See the Demo</button>
          </a>
          <a
            href="https://github.com/ebayasgalan/Ocean-Beach-Hotel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See the Code</button>
          </a>
        </div>
      </div>
      <div>
        <img src={easyMarket} alt="eCommerce" />
      </div>
      <div className="description">
        <h2>Easy Market</h2>
        <p className="summary">
          Ecommerce web application that allows the user to post or view items
          for sale.
        </p>
        <p className="builtWith">
          Built with: Javascript | Next.js | Apollo | Graphql-Yoga | Prisma |
          Stripe API | Cloudinary API
        </p>
        <div className="buttons">
          <a
            href="https://easy-market-next-prod.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See the Demo</button>
          </a>
          <a
            href="https://github.com/ebayasgalan/easy-market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>See the Code</button>
          </a>
        </div>
      </div>
    </div>
  </StyledComponent>
);

export default Projects;
