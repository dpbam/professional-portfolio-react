import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import '../assets/css/style2.css';
import { FaGithub } from 'react-icons/fa';
// import shopshop from '../assets/images/shop-shop-screenshot.png';
// import drinking from '../assets/images/drinking.png';
import shakeonit from '../assets/images/shakeonit.png';
import weather from '../assets/images/weather4.png';
// import budget from '../assets/images/budget.png';
import petPlanit from '../assets/images/pet-planit.png';
import shadowscope from '../assets/images/shadow-scope.png';

const projectsArray = [
  {
    name: 'PET PLANiT',
    image: petPlanit,
    description: `It's their planet; we just live on it. A social media app for pet owners and their furry friends.`,
    role: 'CSS, Javascript, React, database management',
    link: 'https://enigmatic-temple-75821.herokuapp.com/',
    github: 'https://github.com/dpbam/pet-social-network',
  },
  {
    name: 'The Shadow Scope',
    image: shadowscope,
    description: `The Shadow Scope website is an interactive project built for the Colorado State University Biochemistry & Molecular Biology Department and involves outreach to surrounding schools to connect kids to the magic of the microscopic world.`,
    role: 'Design, HTML, CSS, Javascript, database management',
    link: 'https://stasevichlab.colostate.edu/shadow-scope',
    github: 'https://github.com/dpbam/shadow-scope',
  },

  // {
  //   name: 'Drinking Game',
  //   image: drinking,
  //   description:
  //     'This application enables users to play a game to randomly receive drink recipes and collect total scores for each drink category they receive. If users want to search for breweries in their city, they can type their city name and receive 5 results of local places and their address.',
  //   role: 'CSS and design',
  //   link: 'https://janekv20.github.io/drink-recipe-game/',
  //   github: 'https://github.com/dpbam/drink-recipe-game',
  // },
  {
    name: 'Weather or Not Weather App',
    image: weather,
    description:
      'This weather application will provide the current weather as well as the forecast for 5 days in the future.',
    role: 'CSS, HTML, JavaScript, Moment.js',
    link: 'https://dpbam.github.io/weather-or-not-weather-app/',
    github: 'https://github.com/dpbam/weather-or-not-weather-app',
  },
  // {
  //   name: 'Shopper',
  //   image: shopshop,
  //   description:
  //     'Shopper is a fully functional e-commerce website built with React and Context API.',
  //   role: 'HTML, CSS, React, Context API',
  //   link: 'https://fast-peak-42136.herokuapp.com/',
  //   github: 'https://github.com/dpbam/shop-shop',
  // },
  {
    name: 'Shake On It',
    image: shakeonit,
    description: 'A bartering website for the 21st century.',
    role: 'Project Lead, CSS, JavaScript, Node.js',
    link: 'https://nameless-taiga-03231.herokuapp.com/',
    github: 'https://github.com/dpbam/shake-on-it',
  },
  // {
  //   name: 'Budget Tracker 2000',
  //   image: budget,
  //   description:
  //     'The Budget Tracker 2000 tracks your budget and gives you access to your information at any time. This app works online and offline.',
  //   role: 'JavaScript, MongoDB',
  //   link: 'https://evening-springs-33870.herokuapp.com/',
  //   github: 'https://github.com/dpbam/budget_tracker-2000',
  // },
];

const Project = () => {
  return (
    <div className='projects'>
      {projectsArray.map((p, index) => (
        <div key={p.name} className='project'>
          <div className='project-text-card'>
            <div className='project-img-div'>
              <img className='project-img' src={p.image} alt={p.name}></img>
            </div>
            <div className='website-link'>
              <a
                href={p.link}
                target='_blank'
                rel='noreferrer noopener'
                style={{ textDecoration: 'none' }}
              >
                <h2>{p.name}</h2>
              </a>
            </div>
            <p>{p.description}</p>
            <p>Role and Responsibilities: {p.role}</p>
            <div className='github-link'>
              <a href={p.github} target='_blank' rel='noreferrer noopener'>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
