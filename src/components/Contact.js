import React from "react";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  .contact {
    position: relative;
    a {
      text-decoration: none;
      color: black;
      font-size: 13px;
      :hover {
        color: #becfdc;
      }
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  .header {
    color: white;
    font-size: 34px;
    position: absolute;
    left: 9.5rem;
  }
  .cards {
    position: absolute;
    top: 2.5rem;
    left: 8.5rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .card_items {
    color: black;
    font-size: 17px;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .cards {
      top: 6rem;
      right: 2rem;
      a {
        font-size: 30px;
      }
    }
    .card_items {
      font-size: 28px;
      margin-bottom: 2rem;
    }
    .header {
      padding-top: 1rem;
      font-size: 46px;
      left: 46%;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .card_items {
      font-size: 36px;
      margin-bottom: 4rem;
    }
    .header {
      font-size: 56px;
    }
    .cards {
      position: absolute;
      height: 100%;
      text-align: center;
      max-width: 100%;
      margin-top: 4rem;
    }
    .cards:before {
      content: "";
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
`;

const Contact = () => (
  <StyledComponent>
    <div className="contact">
      <div className="info">
        <p className="header">Contact Me</p>
        <div className="cards">
          <div className="card_items">
            <h4>
              Email{" "}
              <span role="img" aria-label="envelope">
                ✉️
              </span>
            </h4>
            <a href="mailto:eric.bayasgalan@protonmail.com">
              eric.bayasgalan@protonmail.com
            </a>
          </div>
          <div className="card_items">
            <h4>
              Phone{" "}
              <span role="img" aria-label="phone">
                📱
              </span>
            </h4>
            <p>(510)932-9916</p>
          </div>
        </div>
      </div>
    </div>
    <img src={deskTop} alt="workSpace" />
  </StyledComponent>
);

export default Contact;
