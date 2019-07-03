import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import deskTop from "../images/contactPage.jpg";

const StyledComponent = styled.div`
  background: blue;
  height: 600px;
  .info {
    text-align: center;
    position: relative;
    top: 300px;
    background: blue;
  }
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
`;

const Contact = () => (
  <StyledComponent>
    <div className="contact">
      <div className="info">
        <h2>Feel free to contact me via email below</h2>
        <a href="mailto:eric.bayasgalan@protonmail.com">
          eric.bayasgalan@protonmail.com
        </a>
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
        {/* <img src={deskTop} alt="" /> */}
      </div>
    </div>
  </StyledComponent>
);

export default Contact;
