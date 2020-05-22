import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import oceanBeach from '../images/hotel.png';
import easyMarket from '../images/eCommerce.png';
import comingSoon from '../images/comingSoon.jpg';

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
    width: 200px;
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
  h2 {
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
      font-size: 40px;
    }
    img {
      width: 360px;
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
    h2 {
      font-size: 50px;
      padding-top: 2rem;
    }
    img {
      width: 380px;
    }
    .description {
      font-size: 24px;
      h3 {
        padding-top: 2rem;
      }
    }
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Projects = () => {
  const [card, setCard] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 300, friction: 70 },
  }));
  const [card2, setCard2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 300, friction: 70 },
  }));
  return (
    <StyledComponent>
      <div className='projects' />
      <h2>Some things I've built</h2>
      <div className='showcase'>
        {/* Hotel application */}

        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) =>
            setCard({ xys: calc(x, y) })
          }
          onMouseLeave={() => setCard({ xys: [0, 0, 1] })}
          style={{ transform: card.xys.interpolate(trans) }}
        >
          <a
            href='https://hotel-next-prod.herokuapp.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={oceanBeach} alt='hotel' />
          </a>
        </animated.div>
        <div className='description'>
          <h3>Ocean Beach Hotel</h3>
          <p className='summary'>
            Hotel application that allows a user to make reservations after
            signing in.
          </p>
          <p className='builtWith'>
            Built with: Javascript | Next.js | Graphql-Yoga | Prisma | Apollo
          </p>
          <div className='buttons'>
            <a
              href='https://hotel-next-prod.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>See the Demo</button>
            </a>
            <a
              href='https://github.com/ebayasgalan/Ocean-Beach-Hotel'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>See the Code</button>
            </a>
          </div>
        </div>

        {/* Ecommerce application */}

        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) =>
            setCard2({ xys: calc(x, y) })
          }
          onMouseLeave={() => setCard2({ xys: [0, 0, 1] })}
          style={{ transform: card2.xys.interpolate(trans) }}
        >
          <a
            href='https://easy-market-next-prod.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={comingSoon} alt='eCommerce' />
          </a>
        </animated.div>
        <div className='description'>
          <h3>Easy Market</h3>
          <p className='summary'>
            Ecommerce application that allows a user to post or view items for
            sale after signing in.
          </p>
          <p className='builtWith'>
            Built with: Javascript | Next.js | Apollo | Graphql-Yoga | Prisma |
            Stripe API | Cloudinary API
          </p>
          <div className='buttons'>
            <a
              href='https://easy-market-next-prod.herokuapp.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>See the Demo</button>
            </a>
            <a
              href='https://github.com/ebayasgalan/easy-market'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>See the Code</button>
            </a>
          </div>
        </div>
      </div>
    </StyledComponent>
  );
};

export default Projects;
