import { useState } from 'react';
import './assets/css/style2.css';
// import background from './assets/images/bogomil-mihaylov-ekhshvgr27k-smaller.jpg';
// import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // const [isRed, setRed] = useState(false);
  // const [count, setCount] = useState(0);
  const [currentComponent, setCurrentComponent] = useState('About');

  const renderPage = (currentComponent) => {
    switch (currentComponent) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  // const increment = () => {
  //   setCount(count + 1);
  // };

  return (
    <div
      style={{
        // backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // width: '240vw',
        // height: '240vh',
      }}
    >
      <Nav
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
      ></Nav>
      {renderPage(currentComponent)}
      {/* <About></About>
      <Projects
        projects={projectsArray}
        currentProject={currentProject}
      ></Projects>
      <Contact></Contact> */}
      <Footer />
    </div>
  );
}

// const Home = () => {
//   <div>
//     <h1>Home Page</h1>
//   </div>;
// };

export default App;
