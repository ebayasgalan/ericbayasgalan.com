import React from "react";
import { Link } from "gatsby";

import logo from "../images/eb_logo.png";
import "./styles/Toolbar.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

const Toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_logo">
        <Link to="/">
          <img src={logo} alt="LOGO" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_navigation-items">
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
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
