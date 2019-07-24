import React from "react";
import styled from "styled-components";
import proPic from "../images/proPic.jpeg";
import webTechs from "../images/webTechs.svg";

const StyledAbout = styled.section`
  .about {
    background: linear-gradient(#1d222b, #becfdc);
    color: #000;
  }
  .picture {
    text-align: center;
    padding-top: 2rem;
    img {
      border-radius: 50%;
      height: 220px;
    }
  }
  .skills {
    img {
      height: 160px;
      width: 100%;
    }
  }
  .description {
    padding: 1rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 20px;
  }
  h2 {
    text-align: center;
  }

  /* for medium size screens */

  @media (min-width: 478px) {
    .picture {
      img {
        height: 300px;
      }
    }
    .description {
      font-size: 24px;
      line-height: 2.5rem;
    }
    .skills {
      padding-top: 1rem;
      img {
        height: 220px;
      }
    }
    h2 {
      font-size: 30px;
    }
  }

  /* for large size screens */

  @media (min-width: 976px) {
    .picture {
      img {
        height: 340px;
      }
    }
    .description {
      font-size: 28px;
    }
    .skills {
      padding-top: 2rem;
      img {
        height: 300px;
      }
    }
    h2 {
      font-size: 36px;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <div className="about">
        <div className="picture">
          <img src={proPic} alt="atLibrary" />
        </div>
        <p className="description">
          Hi, I am a full stack developer and I love creating web apps. I have
          passion for learning new technologies and building great user
          experience applications. Aside from coding, I enjoy being outdoors,
          playing basketball, and spending time with family and friends.
        </p>
        <div className="skills">
          <h2>Skills to Pay the Bills</h2>
          <img src={webTechs} alt="" height="200px" width="100%" />
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
