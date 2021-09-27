import React from 'react';
import { FaGithub, FaReact, FaRegCopyright } from 'react-icons/fa';
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
      <h1>
        <FaRegCopyright />
        Derek Phelps
      </h1>
    </div>
  );
};

export default Footer;
