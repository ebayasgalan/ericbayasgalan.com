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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h3 {
    margin: 2rem;
    padding-top: 1rem;
    color: white;
  }
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 140px;
  text-align: center;
  background-color: black;
  margin-top: 10px;
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const SocialLink = styled.a`
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 40px;
  margin: 0.5rem;
  border-radius: 50%;
  background-color: ${props => props.color};
  :hover {
    background-color: white;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h3>Where To Find Me</h3>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink href={link.link} target="_blank" rel="nofollow">
            <img src={link.img} alt="" height="30px" width="50px" />
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </FooterWrapper>
);

export default Footer;
