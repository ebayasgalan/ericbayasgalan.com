import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledComponent = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .infoWrapper {
    height: 600px;
  }
  .info {
    text-align: center;
    position: relative;
    top: 300px;
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
    <div className="infoWrapper contact">
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
      </div>
    </div>
  </StyledComponent>
);

export default Contact;
