import React from 'react';
import PropTypes from 'prop-types';
import { socialMedia } from '../config';
import Side from './Side';
import FormattedIcon from '../icons/formattedIcon';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: #a8b2d1;
  }
  li {
    margin: 0.7rem;
  }

  li:last-of-type {
    margin-bottom: 20px;
  }
`;
const StyledLink = styled.a`
  padding: 10px;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 26px;
    height: 26px;
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation='left'>
    <StyledList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <StyledLink
              href={url}
              target='_blank'
              rel='nofollow noopener noreferrer'
              aria-label={name}
            >
              <FormattedIcon name={name} />
            </StyledLink>
          </li>
        ))}
    </StyledList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool
};

export default Social;
