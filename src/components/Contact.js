import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  height: 700px;
  .info > a {
    text-decoration: none;
    color: black;
    font-size: 24px;
    :hover {
      color: white;
    }
  }
  .scrollTop {
    position: absolute;
    top: 260px;
    right: 2rem;
    font-size: 18px;
    :hover {
      color: white;
    }
  }
  .intro {
    position: absolute;
    bottom: 260px;
    left: 360px;
    text-align: center;
    color: #becfdc;
  }
`;

const Contact = () => (
  <StyledComponent>
    <div className="contact">
      <img src={deskTop} alt="workSpace" height="740px" width="100%vh" />
      <div className="info">
        <div className="intro">Contact Me</div>
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
