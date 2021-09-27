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

  return (
    <div>
      <Nav
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent}
      ></Nav>
      {renderPage(currentComponent)}
      <Footer />
    </div>
  );
}

export default App;
