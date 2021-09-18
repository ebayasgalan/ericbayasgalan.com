import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  .navbar {
    position: fixed;
    top: 0;
    height: 60px;
    width: 100%;
    line-height: 60px;
    background: rgba(0,0,0,.5);
    text-transform: uppercase;
    transition: top 0.3s;
    z-index: 10;
    a {
      float: right;
      display: block;
      text-decoration: none;
      padding: 0 20px 0 20px;
      color: white;
    }
    a:hover {
      background-color: #ddd;
      color: black;
    }
  }
`;


const Navigation = () => {
  //hide or show navigation when scrolling 
  if (typeof window !== 'undefined') {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      const maxScroll = document.body.clientHeight - window.innerHeight;
      let currentScrollPos = window.pageYOffset;
      if (
          (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
        || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
        || (prevScrollpos <= 0 && currentScrollPos <= 0)
        ) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-60px"; 
      }
      prevScrollpos = currentScrollPos;
    }
  }
  return (
    <StyledNav>
      <div className="navbar">
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </div>
    </StyledNav>
  )
}



export default Navigation;
