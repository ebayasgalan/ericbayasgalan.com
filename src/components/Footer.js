import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/enkhtaivan-bayasgalan-849824149/"
  },
  {
    name: "Github",
    link: "https://github.com/ebayasgalan"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/BayasgalanEric"
  }
];

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90px;
  width: 100%;
  text-align: center;
  .footer_items {
    display: flex;
    list-style: none;
    justify-content: center;

    a {
      margin-left: 1rem;
      text-decoration: none;
      color: black;
      :hover {
        color: white;
        cursor: pointer;
      }
    }
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: 0;
`;

const Footer = () => (
  <footer className="footer">
    <h3>Where To Find Me</h3>
  </footer>
);

export default Footer;
