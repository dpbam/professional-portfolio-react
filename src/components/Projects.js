import '../assets/css/style2.css';
import runbuddy from '../assets/images/runbuddy.png';
import drinking from '../assets/images/drinking.png';
import shakeonit from '../assets/images/shakeonit.png';
import weather from '../assets/images/weather.png';
import budget from '../assets/images/budget.png';
import notetaker from '../assets/images/notetaker.png';

const projectsArray = [
  {
    name: 'Run Buddy',
    image: runbuddy,
    description:
      'My first website, built from the ground up using HTML and CSS. This is the placeholder text for my second project. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi neque animi quo cupiditate commodi saepe culpa sed itaque velit maiores optio dolorem excepturi aperiam dolores, voluptatibus suscipit amet quis repellat!',
    link: 'https://dpbam.github.io/run-buddy/',
    github: 'https://github.com/dpbam/run-buddy',
  },
  {
    name: 'Drinking Game',
    image: drinking,
    description:
      'This application enables users to play a game to randomly receive drink recipes and collect total scores for each drink category they receive. If users want to search for breweries in their city, they can type their city name and receive 5 results of local places and their address.',
    link: 'https://janekv20.github.io/drink-recipe-game/',
    github: 'https://github.com/dpbam/drink-recipe-game',
  },
  {
    name: 'Shake On It',
    image: shakeonit,
    description: 'A bartering website for the 21st century.',
    link: 'https://nameless-taiga-03231.herokuapp.com/',
    github: 'https://github.com/dpbam/shake-on-it',
  },
  {
    name: 'Whether or Not Weather App',
    image: weather,
    description: 'this is a description of 4th project',
    link: 'https://dpbam.github.io/whether-or-not-weather-app/',
    github: 'https://github.com/dpbam/whether-or-not-weather-app',
  },
  {
    name: 'Budget Tracker 2000',
    image: budget,
    description:
      'The Budget Tracker 2000 tracks your budget and gives you access to your information at any time. This app works online and offline.',
    link: 'https://evening-springs-33870.herokuapp.com/',
    github: 'https://github.com/dpbam/budget_tracker-2000',
  },
  {
    name: 'Note Taker 2000',
    image: notetaker,
    description:
      'NOTE TAKER 2000 is an application that writes and saves notes. After the user clicks Get Started on the welcome page it takes them to a second page where it welcomes user input for notes consisting of a title and comments and saves it forever, which is a really long time. This app uses JSON, fs, JavaScript, Express, Node.js, HTML, CSS, and API routes.',
    link: 'https://obscure-cliffs-88529.herokuapp.com',
    github: 'https://github.com/dpbam/note-taker-2000',
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
      {/* <div>
        <h2 style={{ color: 'white' }}>PROJECTS</h2>
      </div> */}
      <div
        style={{
          paddingLeft: '20px',
          paddingTop: '100px',
          border: '2px',
          borderColor: 'black',
        }}
      >
        <img
          src={p.image}
          alt={p.name}
          style={{ width: '50vw', height: '100%' }}
        ></img>
      </div>
      <div style={{ paddingLeft: '20px', paddingTop: '100px' }}>
        <h3>{p.name}</h3>
        <p>{p.description}</p>
        <div>
          <a href={p.link}>Website link</a>
        </div>
        <div>
          <a href={p.github}>Github link</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
