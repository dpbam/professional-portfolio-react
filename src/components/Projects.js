import '../assets/css/style2.css';
// import '../assets/images/run-buddy-img';

const Projects = (props) => {
  // console.log(props);

  const projectComponents = [];

  for (let i = 0; i < props.projects.length; i++) {
    projectComponents.push(Project(props.projects[i]));
  }
  return projectComponents;
};

const Project = (p) => {
  console.log(p);
  return (
    <div key={p.name} className='projects'>
      <h3>{p.name}</h3>
      <p>insert image here</p>
      <p>{p.description}</p>
    </div>
  );
};

export default Projects;
