import React from 'react';
import resume from '../assets/images/RESUME.pdf';

export const Resume = () => {
  return (
    <div className='resume-link'>
      <embed
        src={resume}
        type='application/pdf'
        style={{ height: '700px', width: '500px' }}
      ></embed>
      {/* <h2>👇</h2>
      <a
        href='https://docs.google.com/document/d/15QOVJsyavSI0D1zb2tNnkKySsDkZtjuQt3MVJDSSjO8/edit?usp=sharing'
        target='_blank'
        rel='noreferrer noopener'
      >
        Let's see the resume.
      </a>
      <h2>👆</h2> */}
    </div>
  );
};

export default Resume;
