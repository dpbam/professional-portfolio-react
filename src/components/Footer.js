import React from 'react';
import {
  FaGithub,
  FaRegCopyright,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer' style={{ color: 'white' }}>
      <h1>
        {/* <div className='github-icon-link'> */}
        <a
          href='https://github.com/dpbam'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaGithub />
        </a>
        {/* </div> */}
      </h1>
      <h1>
        <a
          href='https://www.linkedin.com/in/derek-phelps-76923311/'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaLinkedin />
        </a>
      </h1>
      <h1>
        <a
          href='https://stackoverflow.com/users/15781081/dpbam'
          target='_blank'
          rel='noreferrer noopener'
        >
          <FaStackOverflow />
        </a>
      </h1>
      <h1>
        <FaRegCopyright />
        Derek Phelps
      </h1>
    </div>
  );
};

export default Footer;
