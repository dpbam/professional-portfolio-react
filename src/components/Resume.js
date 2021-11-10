import React from 'react';
// import resume from '../assets/images/RESUME-one-page.pdf';
import { Typography, Container } from '@material-ui/core';
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

export const Resume = () => {
  return (
    <Container className='resume-link'>
      {/* <div>
        <embed
          src={resume}
          type='application/pdf'
          style={{ height: '90vh', width: '35vw' }}
        ></embed>
      </div> */}
      <div className='resume-paragraph'>
        <p>
          <Typography variant='h5'>DEREK PHELPS</Typography>
          <Typography>
            thederekphelps@gmail.com | 734-748-3484 | Fort Collins, CO LinkedIn:
            linkedin.com/in/derek-phelps-76923311 | GitHub:
            https://github.com/dpbam Portfolio:
            https://dpbam.github.io/professional-portfolio-react/
          </Typography>
          <Typography variant='h6'>
            <strong>SUMMARY</strong>
          </Typography>
          <Typography variant=''>
            */ Full Stack Web Developer with extensive experience working in
            teams and accomplishing great things for clients. Effective with
            communication, organization, and high-level problem-solving skills.
            Can combine humor and an artistically musical sense with attention
            to detail to be an asset to your team. I have recently completed a
            Full Stack Web Development certificate.
          </Typography>
          <Typography variant=''>
            <strong>TECHNICAL SKILLS</strong>
          </Typography>
          <Typography variant=''>
            Frontend: HTML5, CSS, JQuery, Javascript, ES6, Jest, React, JSX,
            Bootstrap, Flexbox, Handlebars, Bulma, DOM Manipulation, Moment.js
          </Typography>
          <Typography variant=''>
            Backend: MySQL, Sequelize, bcrypt, MongoDB, Mongoose, Express.js,
            Apollo Server, Node.js, NoSQL, Web API, Third-Party API, Server Side
            API
          </Typography>
          <Typography variant=''>
            <strong>PROJECTS</strong>
          </Typography>
          Whether or Not Weather App<Typography variant=''></Typography>
          <Typography variant=''>
            https://github.com/dpbam/whether-or-not-weather-app |
            https://dpbam.github.io/whether-or-not-weather-app/ |{' '}
          </Typography>
          <Typography variant=''>Role in Project: Sole Coder</Typography>
          <Typography variant=''>
            {' '}
            Will provide the current weather as well as the forecast for 5 days
            in the future.
          </Typography>{' '}
          <Typography variant=''>
            Users’ searches are also persistent and can be searched again upon
            revisiting the site.{' '}
          </Typography>
          <Typography variant=''>
            Tools/Languages: HTML, CSS, JavaScript, API Fetch
          </Typography>
          <Typography variant=''>Shake On It</Typography>
          <Typography variant=''>
            {' '}
            | https://github.com/dpbam/shake-on-it
          </Typography>
          <Typography variant=''>
            https://nameless-taiga-03231.herokuapp.com/
          </Typography>{' '}
          | <Typography variant=''>Role in Project: Project Lead</Typography>{' '}
          <Typography variant=''>
            A bartering app for the 21st Century. Want a toaster, but can’t
            afford one? Offer to mow their lawn.{' '}
          </Typography>
          <Typography variant=''>
            Tools/Languages: HTML, CSS (Bootstrap), JavaScript, SQL, Sequelize,
            bcrypt, Express.js
          </Typography>{' '}
          <Typography variant=''>Shop Shop</Typography>
          <Typography variant=''>
            {' '}
            https://github.com/dpbam/shop-shop
          </Typography>{' '}
          |
          <Typography variant=''>
            https://fast-peak-42136.herokuapp.com/
          </Typography>
          <Typography variant=''> Role in Project: Sole coder</Typography>
          <Typography variant=''>
            Shop Shop is a fully functional e-commerce app built with React
          </Typography>
          <Typography variant=''>
            {' '}
            Has a clean visual presentation and makes it easy to purchase, save,
            and checkout items.{' '}
          </Typography>
          <Typography variant=''>
            Tools/Languages: HTML, CSS, JavaScript, React, Context API, Apollo,
            MongoDB, Stripe
          </Typography>
          <Typography variant=''>
            <strong>WORK EXPERIENCE</strong>
          </Typography>
          <Typography variant=''>Accenture</Typography>
          <Typography variant=''> June 2019 - March 2021</Typography>
          <Typography variant=''>
            {' '}
            Social Media Copyright Review Agent - Austin, TX
          </Typography>
          <Typography variant=''>
            {' '}
            High level organizational and planning skills; creative and
            motivated
          </Typography>
          <Typography variant=''>
            {' '}
            Innovated a new way to log hip-hop artist names saving time and
            money for the team.
          </Typography>{' '}
          <Typography variant=''>Hard Proof</Typography>
          <Typography variant=''> October 2008 - March 2021</Typography>
          <Typography variant=''>
            {' '}
            Composer/Arranger/Trumpet - Austin, TX
          </Typography>
          <Typography variant=''>
            {' '}
            Flexible team organization, team building, robust social media
            management skills
          </Typography>
          <Typography variant=''>
            Royal Caribbean Cruise Lines International
          </Typography>
          <Typography variant=''> Oct 2006 - May 2006</Typography>
          <Typography variant=''>
            {' '}
            Musical Director/Lead Trumpet - Miami, FL
          </Typography>{' '}
          <Typography variant=''>
            Strong performance and impressive dedication to company
            responsibilities and entertainment for the guests
          </Typography>{' '}
          <Typography variant=''>
            Promoted to Musical Director in charge of all musicians on the ship
            - payroll, scheduling
          </Typography>
          <Typography variant=''>
            <strong>EDUCATION</strong>
          </Typography>
          <Typography variant=''>University of Texas at Austin, TX</Typography>
          <Typography variant=''> Grad Oct. 2021</Typography>{' '}
          <Typography variant=''>
            Full-Stack Web Development Boot Camp Certification
          </Typography>
          <Typography variant=''>
            {' '}
            Wayne State University, Detroit, MI
          </Typography>{' '}
          <Typography variant=''>Grad May 2002</Typography>
          <Typography variant=''>
            {' '}
            Degree/Certification Attained: Bachelor of Jazz Studies
          </Typography>
        </p>
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
