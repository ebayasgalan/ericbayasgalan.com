import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  .contact {
    position: relative;
    a {
      text-decoration: none;
      color: white;
      font-size: 14px;
    }
  }
  /* .info {
    position: absolute;
    height: 100%;
    text-align: center;
    width: 100%;
  }
  .info:before {
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  } */
  /* .scrollTop {
    position: absolute;
    top: 15rem;
    right: 1rem;
  } */
  img {
    display: block;
    max-width: 100%;
  }
  .header {
    color: white;
    font-size: 32px;
    position: absolute;
    height: 100%;
    text-align: center;
    width: 100%;
  }
  .cards {
    position: absolute;
    top: 3rem;
    left: 9rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .card_items {
    background: linear-gradient(#becfdc, #1d222b);
    border: black 1px solid;
    border-radius: 12px;
    padding: 3px;
    margin: 2px;
    font-size: 16px;
    color: white;
  }
  /* @media (min-width: 578px) {
    .cards {
      top: 3rem;
      right: 4rem;
      font-size: 24px;
      h4,
      a {
        font-size: 24px;
      }
    }
    .scrollTop {
      top: 24rem;
      right: 1rem;
      a {
        font-size: 22px;
      }
    }
  } */
  /* @media (min-width: 769px) {
    .cards {
      flex-direction: row;
      top: 6rem;
      left: 14rem;
      font-size: 24px;
      h4,
      a {
        font-size: 24px;
      }
    }
    .scrollTop {
      top: 26rem;
      right: 1rem;
      a {
        font-size: 24px;
      }
    }
  } */
`;

const Contact = () => (
  <StyledComponent>
    <div className="contact">
      <div className="info">
        <p className="header">Contact Me</p>
        <div className="cards">
          <div className="card_items">
            <h4>
              Location <span>📍</span>
            </h4>
            <span className="details">El Cerrito, CA</span>
          </div>
          <div className="card_items">
            <h4>
              Email <span>✉️</span>
            </h4>
            <a href="mailto:eric.bayasgalan@protonmail.com">
              eric.bayasgalan@protonmail.com
            </a>
          </div>
          <div className="card_items">
            <h4>
              Phone <span>📱</span>
            </h4>
            <span className="details">(510)932-9916</span>
          </div>
        </div>
      </div>
      <span className="scrollTop">
        {/* <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          back to top ⇧
        </Link> */}
      </span>
    </div>
    <img src={deskTop} alt="workSpace" />
  </StyledComponent>
);

export default Contact;
