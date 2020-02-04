import React from 'react';
import { Link } from 'react-scroll';

import logo from '../images/eb_logo.png';
import './styles/Toolbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const Toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar_navigation'>
      <div className='toolbar_logo'>
        <Link
          style={{ cursor: 'pointer' }}
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          duration={500}
        >
          <img src={logo} alt='LOGO' />
        </Link>
      </div>
      <div className='spacer' />
      <div className='toolbar_toggle-button'>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <Link
              style={{ cursor: 'pointer' }}
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: 'pointer' }}
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: 'pointer' }}
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
