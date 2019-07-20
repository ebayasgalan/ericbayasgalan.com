import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/hotel.png";
import easyMarket from "../images/eCommerce.png";

const StyledComponent = styled.div`
  background: linear-gradient(#becfdc, #1d222b);
  .showcase {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1px;
    padding: 10px;
    text-align: center;
  }
  img {
    border-radius: 1.5rem;
    margin-top: 2rem;
    height: auto;
    width: 260px;
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
    padding-top: 1.5rem;
  }
  .description {
    h2 {
      margin-top: 1rem;
    }
    font-size: 16px;
  }
  .builtWith {
    margin-bottom: 0.5rem;
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
          after signing in.
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
