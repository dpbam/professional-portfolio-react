import '../assets/css/style2.css';
// import '../assets/images/run-buddy-img';

const projectsArray = [
  {
    name: 'Run Buddy',
    image: 'src/assets/images/run-buddy-img.png',
    description: 'this is a description of Run Buddy',
  },
  {
    name: 'Drinking Game',
    image: '',
    description: 'this is a description of Drinking Game',
  },
  {
    name: 'Shake On It',
    image: '',
    description: 'this is a description of Shake On It',
  },
  {
    name: '4th project',
    image: '',
    description: 'this is a description of 4th project',
  },
  {
    name: '5th project',
    image: '',
    description: 'this is a description of 5th project',
  },
  {
    name: '6th project',
    image: '',
    description: 'this is a description of 6th project',
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
  console.log(p);
  return (
    <div key={p.name} className='projects'>
      <h3>{p.name}</h3>
      <p>{p.image}</p>
      <p>{p.description}</p>
    </div>
  );
};

export default Projects;
