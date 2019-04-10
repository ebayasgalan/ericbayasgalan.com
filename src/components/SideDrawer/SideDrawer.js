import React from "react";
import { Link } from "gatsby";
import "../styles/SideDrawer.css";
import resume from "../../images/resume.pdf";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <a href={resume}>RESUME</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
