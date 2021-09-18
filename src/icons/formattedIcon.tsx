import React from 'react';
import {
  IconGitHub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter
} from './index';

interface Props {
  name: string
}

const FormattedIcon = ({ name }: Props) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGitHub />;
  }
};

export default FormattedIcon;
