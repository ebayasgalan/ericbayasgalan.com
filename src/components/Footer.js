import React from "react";
import styled from "styled-components";
import Github from "../images/github_icon.svg";
import Linkedin from "../images/linkedin.svg";

const FooterLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/enkhtaivan-bayasgalan-849824149/",
    color: "#686A78",
    img: Linkedin
  },
  {
    name: "Github",
    link: "https://github.com/ebayasgalan",
    img: Github
  }
];

const FooterWrapper = styled.footer`
  position: relative;
  text-align: center;
  background-color: black;
  height: 3.3rem;
  padding-top: 0.4rem;
  p {
    color: white;
    font-size: 12px;
  }
  a {
    font-size: 0.7rem;
    padding-top: 0.8rem;
    margin: 0.5rem;
    border-radius: 50%;
    background-color: gray;
    img {
      width: 50px;
      height: 20px;
    }
    :hover {
      background-color: white;
    }
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    height: 6rem;
    padding: 1rem;
    p {
      font-size: 16px;
    }
    a {
      font-size: 2rem;
      img {
        width: 60px;
        height: 34px;
      }
    }
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 2px;
  display: flex;
  justify-content: center;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <img src={link.img} alt="" />
          </a>
        </li>
      ))}
    </SocialLinks>
    <p>copyright © 2019</p>
  </FooterWrapper>
);

export default Footer;
