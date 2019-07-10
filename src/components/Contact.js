import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  height: 700px;
  .info a {
    text-decoration: none;
    color: black;
    font-size: 26px;
    :hover {
      color: #becfdc;
    }
  }
  .scrollTop {
    position: absolute;
    bottom: 100px;
    right: 5rem;
    font-size: 18px;
  }
  .info {
    position: relative;
    p {
      font-size: 32px;
      position: absolute;
      bottom: 600px;
      right: 39%;
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      position: absolute;
      bottom: 440px;
      right: 15%;
      text-align: center;
      .details,
      a {
        font-size: 20px;
      }
    }
  }
`;

const Contact = () => (
  <StyledComponent>
    <div className="contact">
      <img src={deskTop} alt="workSpace" height="740px" width="100%vh" />
      <div className="info">
        <p>Contact Me</p>
        <div className="cards">
          <div className="location">
            <h3>Location 📍</h3>
            <span className="details">El Cerrito, California</span>
          </div>
          <div className="email">
            <h3>Email ✉️</h3>
            <a href="mailto:eric.bayasgalan@protonmail.com">
              eric.bayasgalan@protonmail.com
            </a>
          </div>
          <div className="phone">
            <h3>Phone 📱</h3>
            <span className="details">(510)932-9916</span>
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
    </div>
  </StyledComponent>
);

export default Contact;
