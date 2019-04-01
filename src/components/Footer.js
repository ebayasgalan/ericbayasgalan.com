import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 150px;
  width: 100%;
  background-color: #80d6ff;
  text-align: center;
  .footer_items {
    display: flex;
    list-style: none;
    justify-content: center;
    li {
      margin-left: 1rem;
      :hover {
        color: white;
        cursor: pointer;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Where To Find Me</h3>
      <ul className="footer_items">
        <li>facebook</li>
        <li>linkedin</li>
        <li>github</li>
        <li>instagram</li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;
