import { useState } from 'react';
import './assets/css/style2.css';
import background from './assets/images/night-sky.jpg';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [currentComponent, setCurrentComponent] = useState('About');

  const renderPage = (currentComponent) => {
    switch (currentComponent) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div
      className='flex-wrapper'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
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
