import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { navLinks } from '../config';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
`;
const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #172a45;
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: 'SF Mono';
  box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
`;
const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  text-align: center;
  color: #ccd6f6;
`;
const NavList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: 18px;
  counter-increment: item 1;
  &:before {
    display: block;
    content: '0' counter(item) '.';
    color: #64ffda;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: #64ffda;
    outline: 0;
  }
  padding: 3px 20px 20px;
  width: 100%;
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isNotMenu =
      target.classList && target.classList[0].includes('StyledContainer');

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <NavListItem key={i}>
                  <NavLink to={url}>{name}</NavLink>
                </NavListItem>
              ))}
          </NavList>
        </NavLinks>
      </Sidebar>
    </StyledContainer>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default Menu;
