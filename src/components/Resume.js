import React from 'react';
import resume from '../assets/images/RESUME-one-page.pdf';

export const Resume = () => {
  return (
    <div className='resume-link'>
      <div>
        <embed
          src={resume}
          type='application/pdf'
          style={{ height: '90vh', width: '35vw' }}
        ></embed>
      </div>
      {/* <div className='resume-paragraph'>
        <p>
          <strong>DEREK PHELPS</strong> <br /> thederekphelps@gmail.com |
          734-748-3484 | Fort Collins, CO LinkedIn:
          linkedin.com/in/derek-phelps-76923311 | GitHub:
          https://github.com/dpbam Portfolio:
          https://dpbam.github.io/professional-portfolio-react/ <br />{' '}
          <strong>SUMMARY</strong>
          <br />
          Full Stack Web Developer with extensive experience working in teams
          and accomplishing great things for clients. Effective with
          communication, organization, and high-level problem-solving skills.
          Can combine humor and an artistically musical sense with attention to
          detail to be an asset to your team. I have recently completed a Full
          Stack Web Development certificate. <br />
          <strong>TECHNICAL SKILLS</strong> <br />
          Frontend: HTML5, CSS, JQuery, Javascript, ES6, Jest, React, JSX,
          Bootstrap, Flexbox, Handlebars, Bulma, DOM Manipulation, Moment.js
          Backend: MySQL, Sequelize, bcrypt, MongoDB, Mongoose, Express.js,
          Apollo Server, Node.js, NoSQL, Web API, Third-Party API, Server Side
          API <br />
          <strong>PROJECTS</strong> <br />
          Whether or Not Weather App |
          https://github.com/dpbam/whether-or-not-weather-app |
          https://dpbam.github.io/whether-or-not-weather-app/ | Role in Project:
          Sole Coder <br />
          Will provide the current weather as well as the forecast for 5 days in
          the future. Users’ searches are also persistent and can be searched
          again upon revisiting the site. <br />
          Tools/Languages: HTML, CSS, JavaScript, API Fetch <br />
          Shake On It
          <br /> | https://github.com/dpbam/shake-on-it
          https://nameless-taiga-03231.herokuapp.com/ | <br />
          Role in Project: Project Lead <br />A bartering app for the 21st
          Century. Want a toaster, but can’t afford one? Offer to mow their
          lawn. <br />
          Tools/Languages: HTML, CSS (Bootstrap), JavaScript, SQL, Sequelize,
          bcrypt, Express <br />
          Shop Shop
          <br /> https://github.com/dpbam/shop-shop |
          https://fast-peak-42136.herokuapp.com/ <br />
          Role in Project: Sole coder
          <br />
          Shop Shop is a fully functional e-commerce app built with React Has a
          clean visual presentation and makes it easy to purchase, save, and
          checkout items. <br />
          Tools/Languages: HTML, CSS, JavaScript, React, Context API, Apollo,
          MongoDB, Stripe <br />
          <strong>WORK EXPERIENCE</strong>
          <br /> Accenture June 2019 - March 2021
          <br />
          Social Media Copyright Review Agent - Austin, TX <br />
          High level organizational and planning skills; creative and motivated{' '}
          <br />
          Innovated a new way to log hip-hop artist names saving time and money
          for the team. <br />
          Hard Proof October 2008 - March 2021 <br />
          Composer/Arranger/Trumpet - Austin, TX <br />
          Flexible team organization, team building, robust social media
          management skills <br />
          Royal Caribbean Cruise Lines International Oct 2006 - May 2006 <br />
          Musical Director/Lead Trumpet - Miami, FL <br />
          Strong performance and impressive dedication to company
          responsibilities and entertainment for the guests <br />
          Promoted to Musical Director in charge of all musicians on the ship -
          payroll, scheduling <br />
          <strong>EDUCATION</strong> <br />
          University of Texas at Austin, TX Grad Oct. 2021 Full-Stack Web
          Development Boot Camp Certification <br />
          Wayne State University, Detroit, MI Grad May 2002 Degree/Certification
          Attained: Bachelor of Jazz Studies
        </p>
      </div> */}
      {/* <div>
        <h2>👇</h2>
        <a
          href='https://docs.google.com/document/d/15QOVJsyavSI0D1zb2tNnkKySsDkZtjuQt3MVJDSSjO8/edit?usp=sharing'
          target='_blank'
          rel='noreferrer noopener'
        >
          Let's download the resume.
        </a>
        <h2>👆</h2>
      </div> */}
    </div>
  );
};

export default Resume;
