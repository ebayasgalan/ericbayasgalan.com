import React from "react";
import styled from "styled-components";
import oceanBeach from "../images/hotel.png";
import easyMarket from "../images/eCommerce.png";
import comingSoon from "../images/comingSoon.jpg";
import { CSSTransitionGroup } from "react-transition-group";

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
    padding: 0.5rem;
    :hover {
      cursor: pointer;
    }
  }
  .buttons {
    text-align: center;
    padding: 1rem;
  }
  button {
    background: #becfdc;
    border-radius: 0.6rem;
    width: 6rem;
    height: 2.5rem;
    margin-right: 20px;
    :hover {
      cursor: pointer;
      color: white;
    }
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
  /* @-webkit-keyframes fadeOutLeft {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes fadeOutLeft {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
  .fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  } */

  /* for medium size screens */

  @media (min-width: 478px) {
    h1 {
      font-size: 40px;
    }
    img {
      width: 380px;
    }
    .description {
      font-size: 22px;
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
      font-size: 50px;
      padding-top: 2rem;
    }
    img {
      width: 400px;
    }
    .description {
      font-size: 24px;
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
        <a
          href="https://hotel-next-prod.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={oceanBeach} alt="hotel" />
        </a>
      </div>
      <div className="description">
        <h3>Ocean Beach Hotel</h3>
        <p className="summary">
          Hotel application that allows a user to make reservations after
          signing in.
        </p>
        <p className="builtWith">
          Built with: Javascript | Next.js | Graphql-Yoga | Prisma | Apollo
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
        <a
          href="https://easy-market-next-prod.herokuapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={easyMarket} alt="eCommerce" />
        </a>
      </div>
      <div className="description">
        <h3>Easy Market</h3>
        <p className="summary">
          Ecommerce application designed to allow users to post or view items
          for sale. After signing in, the user can place an order and use credit
          card.
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
