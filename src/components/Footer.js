import React from "react";
import styled from "styled-components";

const FooterLinks = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/enkhtaivan-bayasgalan-849824149/"
  },
  {
    name: "Github",
    link: "https://github.com/ebayasgalan"
  }
];

const FooterWrapper = styled.footer`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h3 {
    margin: 0.3rem;
    padding-top: 1rem;
  }
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  text-align: center;
  background-color: #9d8210;
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
  color: black;
  text-decoration: none;
  margin-left: 0.5rem;
  :hover {
    color: white;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <h3>Where To Find Me</h3>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink href={link.link} target="_blank" rel="nofollow">
            {link.name}
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </FooterWrapper>
);

export default Footer;
