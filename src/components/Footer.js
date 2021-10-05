import React from 'react';
import {
  FaGithub,
  FaRegCopyright,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer' style={{ color: 'white', fontSize: '3rem' }}>
      <div className='footer-icons'>
        <div>
          {/* <div className='github-icon-link'> */}
          <a
            href='https://github.com/dpbam'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FaGithub />
          </a>
          {/* </div> */}
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/derek-phelps-76923311/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FaLinkedin />
          </a>
        </div>
        <div>
          <a
            href='https://stackoverflow.com/users/15781081/dpbam'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <div className='copyright'>
        <FaRegCopyright />
        Derek Phelps
      </div>
    </div>
  );
};

export default Footer;
