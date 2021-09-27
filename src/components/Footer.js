import React from 'react';
import {
  FaGithub,
  FaRegCopyright,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer' style={{ color: 'white' }}>
      <h1>
        <FaGithub />
      </h1>
      <h1>
        <FaLinkedin />
      </h1>
      <h1>
        <FaTwitter />
      </h1>

      <h1>
        <FaRegCopyright />
        Derek Phelps
      </h1>
    </div>
  );
};

export default Footer;
