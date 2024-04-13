import React from "react";
import Social from "../Social";
import { ReactTyped } from "react-typed";
import Image from "next/image";

const heroContent = {
  name: "Eric Bayasgalan",
  description: `I'm a full stack developer based in Chicago IL, with over 5 years of experience.`,
};

const Hero = () => {
  return (
    //    HERO
    <div className="main-hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <Image src={`/img/hero/proPic.jpeg`} alt="brand" width='300' height="300"/>
        </div>
        <div className="extra">
          {/* <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            Hello, I&apos;m {heroContent.name}
          </h5> */}
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={250}
                backSpeed={60}
                strings={["Web Developer", 'Frontend', 'Backend']}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>

          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Social />
          </div>
          <div
            className="cta-button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <a href="/img/resume.pdf" download className="color">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
    // /HERO
  );
};

export default Hero;
