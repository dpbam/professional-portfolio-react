import '../assets/css/style2.css';
import runbuddy from '../assets/images/runbuddy.png';
import drinking from '../assets/images/drinking.png';
import shakeonit from '../assets/images/shakeonit.png';

import { Link } from 'react-router-dom';

const projectsArray = [
  {
    name: 'Run Buddy',
    image: runbuddy,
    description:
      'My first website, built from the ground up using HTML and CSS. This is the placeholder text for my second project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!',
    link: 'https://dpbam.github.io/run-buddy/',
  },
  {
    name: 'Drinking Game',
    image: drinking,
    description:
      'This application enables users to play a game to randomly receive drink recipes and collect total scores for each drink category they receive. If users want to search for breweries in their city, they can type their city name and receive 5 results of local places and their address.',
    link: 'https://janekv20.github.io/drink-recipe-game/',
  },
  {
    name: 'Shake On It',
    image: shakeonit,
    description: 'A bartering website for the 21st century.',
    link: 'https://nameless-taiga-03231.herokuapp.com/',
  },
  {
    name: '4th project',
    image: '',
    description: 'this is a description of 4th project',
    link: '',
  },
  {
    name: '5th project',
    image: '',
    description: 'this is a description of 5th project',
    link: '',
  },
  {
    name: '6th project',
    image: '',
    description: 'this is a description of 6th project',
    link: '',
  },
];

const Projects = (props) => {
  // console.log(props);

  const projectComponents = [];

  for (let i = 0; i < projectsArray.length; i++) {
    projectComponents.push(Project(projectsArray[i]));
  }
  return projectComponents;
};

const Project = (p) => {
  console.log(p.image);
  return (
    <div key={p.name} className='projects'>
      <img
        src={p.image}
        alt={p.name}
        style={{ width: '50vw', height: '50vh' }}
      ></img>
      <h3>{p.name}</h3>
      <p>{p.description}</p>
      <li>
        <Link to={p.link}>{p.name}</Link>
      </li>
    </div>
  );
};

export default Projects;
