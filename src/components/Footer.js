import React from 'react';
import { Icons } from '@material-ui/icons';
import { FaGithub, FaReact } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';

export const Footer = () => {
  return (
    <div className='footer' style={{ color: 'white' }}>
      <h1>
        <FaGithub />
      </h1>
      <h1>
        <FaReact />
      </h1>
      <h1>
        <DiJavascript />
      </h1>
    </div>
  );
};

export default Footer;
