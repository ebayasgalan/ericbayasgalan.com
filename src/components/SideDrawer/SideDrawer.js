import React from "react";
import { Link } from "gatsby";
import "../styles/SideDrawer.css";

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
          <Link to="/">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
