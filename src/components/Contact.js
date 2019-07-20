import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  .contact {
    position: relative;
    a {
      text-decoration: none;
      color: black;
      font-size: 13px;
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
  .scrollTop {
    display: none;
    /* position: absolute;
    top: 15rem;
    right: 1rem; */
  }
  img {
    display: block;
    max-width: 100%;
  }
  .header {
    color: white;
    font-size: 28px;
    position: absolute;
    left: 9.5rem;
  }
  .cards {
    position: absolute;
    top: 2.5rem;
    left: 8.7rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .card_items {
    color: black;
    margin-bottom: 5px;
    font-size: 17px;
    /* background: linear-gradient(#becfdc, #1d222b);
    border: black 1px solid;
    border-radius: 12px;
    padding: 2px;
    width: 13rem;
    height: 4rem;
    margin: 1px;
    font-size: 16px;
    color: white; */
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
        <Link
          style={{ cursor: "pointer" }}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          back to top ⇧
        </Link>
      </span>
    </div>
    <img src={deskTop} alt="workSpace" />
  </StyledComponent>
);

export default Contact;
