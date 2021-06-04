import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/layout.css';
import Footer from './Footer';
import Social from './Social';
import Navigation from './Nav';
// import SideDrawer from './SideDrawer/SideDrawer';
// import Toolbar from './Toolbar';
// import Backdrop from './Backdrop';

// class Navbar extends Component {
//   state = {
//     sideDrawerOpen: false
//   };

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen };
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false });
//   };

//   render() {
//     let backdrop;

//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />;
//     }

//     return (
//       <div style={{ height: '100%' }}>
//         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//       </div>
//     );
//   }
// }

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Social />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
