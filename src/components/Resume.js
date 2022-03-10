import React from 'react';
import resume1 from '../assets/images/DerekPhelps.RESUME-pg1.jpg';
import resume2 from '../assets/images/DerekPhelps.RESUME-pg2.jpg';
import { Container } from '@material-ui/core';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export const Resume = () => {
  return (
    <Container>
      <div className='resume-link'>
        <a
          href='https://docs.google.com/document/d/15QOVJsyavSI0D1zb2tNnkKySsDkZtjuQt3MVJDSSjO8/edit'
          alt='Link to resume PDF'
          target='blank'
          rel='noreferrer noopener'
        >
          Click here for PDF.
        </a>
      </div>
      <div className='resume-pages'>
        <img
          src={resume1}
          alt='resume page 1'
          type='application/jpg'
          className='resume1'
        ></img>
        <img
          src={resume2}
          alt='resume page 2'
          type='application/jpg'
          className='resume2'
        ></img>
      </div>

      {/* <div> */}
      {/* to animate, transform on z-axis */}
      {/* <h2>👇</h2>
        <a
          href='https://docs.google.com/document/d/15QOVJsyavSI0D1zb2tNnkKySsDkZtjuQt3MVJDSSjO8/edit?usp=sharing'
          target='_blank'
          rel='noreferrer noopener'
        >
          Let's download the resume.
        </a>
        <h2>👆</h2>
      </div> */}
    </Container>
  );
};

export default Resume;
