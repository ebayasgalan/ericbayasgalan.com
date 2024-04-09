import React from "react";
import {
  FiInstagram,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/eric-bayasgalan",
  },
  {
    iconName: <FiGithub />,
    link: "https://github.com/ebayasgalan",
  },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/taivnaa_mgl",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
