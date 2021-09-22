import { useState } from 'react';

import './assets/css/style2.css';
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
  ]);

  const [currentProject, setCurrentProject] = useState(projectsArray[0]);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div>
      <Nav></Nav>
      {/* <button onClick={increment} className='increment-btn'>
        Increment
      </button>
      <h1>{count}</h1> */}
      <About />
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
