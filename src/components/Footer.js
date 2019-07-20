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
  width: 100%;
  height: auto;
  text-align: center;
  background-color: black;
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 5px;
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  font-size: 38px;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: gray;
  :hover {
    background-color: white;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink href={link.link} target="_blank" rel="nofollow">
            <img src={link.img} height="25px" width="50px" />
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </FooterWrapper>
);

export default Footer;
