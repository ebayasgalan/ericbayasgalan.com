import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/hotel.png";
import easyMarket from "../images/eCommerce.png";
import comingSoon from "../images/comingSoon.jpg";

const StyledComponent = styled.div`
  background: linear-gradient(#becfdc, #545c6b);
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
    padding: 1rem;
  }
  .buttons {
    text-align: center;
    margin: 10px;
  }
  button {
    background: #becfdc;
    border-radius: 0.6rem;
    width: 6rem;
    height: 2.5rem;
    margin-right: 20px;
  }
  h1 {
    text-align: center;
    font-size: 34px;
  }
  .description {
    font-size: 16px;
    padding: 1rem;
  }
  .builtWith {
    margin-top: 1rem;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    h1 {
      padding: 3rem 0;
      font-size: 46px;
    }
    img {
      width: 400px;
    }
    .description {
      font-size: 24px;
    }
    button {
      width: 9rem;
      height: 3.5rem;
      font-size: 20px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .showcase {
      grid-template-columns: 1fr 1fr;
    }
    h1 {
      font-size: 56px;
    }
    img {
      width: 450px;
    }
    .description {
      font-size: 28px;
      h3 {
        padding-top: 2rem;
      }
    }
  }
`;

const Projects = () => (
  <StyledComponent>
    <div className="projects" />
    <h1>Projects</h1>
    <div className="showcase">
      {/* Hotel application */}

      <div>
        <img src={oceanBeach} alt="hotel" />
      </div>
      <div className="description">
        <h3>Ocean Beach Hotel</h3>
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

      {/* Ecommerce application */}

      <div>
        <img src={easyMarket} alt="eCommerce" />
      </div>
      <div className="description">
        <h3>Easy Market</h3>
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

      {/* coming soon */}

      {/* <div>
        <img src={comingSoon} alt="currently working on it" />
      </div>
      <div className="description">
        <h3>Next Project</h3>
        <p className="summary">Currently working on it.</p>
      </div> */}
    </div>
  </StyledComponent>
);

export default Projects;
