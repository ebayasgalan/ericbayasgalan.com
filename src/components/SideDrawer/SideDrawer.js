import React from "react"
import { Link } from "gatsby"
import "../styles/SideDrawer.css"

const sideDrawer = props => {
  let drawerClasses = "side-drawer"
  if (props.show) {
    drawerClasses = "side-drawer open"
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/">Resume</Link>
        </li>
      </ul>
    </nav>
  )
}

export default sideDrawer
