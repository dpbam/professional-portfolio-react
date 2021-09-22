import { useState } from 'react';
import './assets/css/style2.css';
import background from './assets/images/bogomil-mihaylov-ekHSHvgr27k-unsplash.jpeg';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);

  const [projectsArray] = useState([
    {
      name: 'Run Buddy',
      image: '',
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
  ]);

  const [currentProject, setCurrentProject] = useState(projectsArray[0]);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <Nav></Nav>
      <About></About>
      <Projects
        projects={projectsArray}
        currentProject={currentProject}
      ></Projects>
      <Contact></Contact>
    </div>
  );
}

// const Home = () => {
//   <div>
//     <h1>Home Page</h1>
//   </div>;
// };

export default App;
