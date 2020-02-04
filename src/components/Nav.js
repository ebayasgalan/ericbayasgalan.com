import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { throttle } from '../utils';
import { navLinks, navHeight } from '../config';
import Menu from './Menu';
import IconLogo from '../icons';
import logo from '../images/eb_logo.png';

const StyledContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: #000;
  opacity: 0.6;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 11;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;
  height: ${props => (props.scrollDirection === 'none' ? '100px' : '70px')};
  box-shadow: ${props =>
    props.scrollDirection === 'up'
      ? `0 10px 30px -10px rgba(2, 12, 27, 0.7)`
      : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? '-70px' : '0px')}
  );
`;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  color: #ccd6f6;
  font-family: 'SF Mono';
  z-index: 12;
`;
const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: block;
    color: #64ffda;
    width: 42px;
    height: 42px;
    &:hover,
    &:focus {
      svg {
        fill: rgba(100, 255, 218, 0.07);
      }
    }
    svg {
      fill: none;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
    }
  }
`;
const StyledHamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
`;
const StyledHamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 24px;
`;
const StyledHamburgerInner = styled.div`
  background-color: #64ffda;
  position: absolute;
  width: 30px;
  height: 2px;
  border-radius: 3px;
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: #64ffda;
    position: absolute;
    left: auto;
    right: 0;
    width: 30px;
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen
        ? `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`
        : `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`};
  }
  &:after {
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen
        ? `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`
        : `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`};
  }
`;
const StyledLink = styled.div`
  display: flex;
  align-items: center;
`;
const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const StyledListItem = styled.li`
  padding: 10px;
  margin: 0 20px;
  text-transform: uppercase;
  position: relative;
  font-size: 18px;
`;
const StyledListLink = styled(Link)`
  padding: 12px 10px;
  text-decoration: none;
`;

const DELTA = 5;

class Navigation extends Component {
  state = {
    isMounted: !this.props.isHome,
    menuOpen: false,
    scrollDirection: 'none',
    lastScrollTop: 0
  };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ isMounted: true }, () => {
          window.addEventListener('scroll', () =>
            throttle(this.handleScroll())
          );
          window.addEventListener('resize', () =>
            throttle(this.handleResize())
          );
          window.addEventListener('keydown', e => this.handleKeydown(e));
        }),
      100
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }

  toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

  handleScroll = () => {
    const { isMounted, menuOpen, scrollDirection, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    if (window.innerWidth > 768 && this.state.menuOpen) {
      this.toggleMenu();
    }
  };

  handleKeydown = e => {
    if (!this.state.menuOpen) {
      return;
    }

    if (e.which === 27 || e.key === 'Escape') {
      this.toggleMenu();
    }
  };

  render() {
    const { isMounted, menuOpen, scrollDirection } = this.state;
    const { isHome } = this.props;
    const timeout = isHome ? 3000 : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    return (
      <StyledContainer scrollDirection={scrollDirection}>
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <StyledNav>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledLogo tabindex='-1'>
                  {/* <img src={logo} alt='LOGO' /> */}
                  {/* {isHome ? (
                    <a href='/' aria-label='home'>
                      <IconLogo />
                    </a>
                  ) : (
                    <Link to='/' aria-label='home'>
                      <IconLogo />
                    </Link>
                  )} */}
                </StyledLogo>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeClass} timeout={timeout}>
                <StyledHamburger onClick={this.toggleMenu}>
                  <StyledHamburgerBox>
                    <StyledHamburgerInner menuOpen={menuOpen} />
                  </StyledHamburgerBox>
                </StyledHamburger>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLink>
            <StyledList>
              <TransitionGroup component={null}>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition
                      key={i}
                      classNames={fadeDownClass}
                      timeout={timeout}
                    >
                      <StyledListItem
                        key={i}
                        style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                      >
                        <Link
                          style={{ cursor: 'pointer' }}
                          activeClass='active'
                          to={url}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {name}
                        </Link>
                      </StyledListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </StyledList>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                  <div
                    style={{
                      transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`
                    }}
                  ></div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </StyledLink>
        </StyledNav>

        <Menu menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
      </StyledContainer>
    );
  }
}

Navigation.propTypes = {
  isHome: PropTypes.bool
};

export default Navigation;
