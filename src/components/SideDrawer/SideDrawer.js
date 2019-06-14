import React from "react";
import { Link } from "react-scroll";
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
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            style={{ cursor: "pointer" }}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <a href={resume}>RESUME</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
