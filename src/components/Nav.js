import '../assets/css/style2.css';
// import { useState } from 'react';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact'];

  return (
    <nav>
      <h1>DEREK PHELPS PORTFOLIO</h1>
      {tabs.map((tab) => (
        <Button
          variant='text'
          color='inherit'
          onClick={() => props.setCurrentComponent(tab)}
        >
          {tab}
        </Button>
      ))}
      {/* <Button variant='text' color='inherit'>
        
        About
      </Button>

      <Button variant='text' color='inherit'>
        Projects
      </Button>

      <Button variant='text' color='inherit'>
        Contact
      </Button> */}
    </nav>
  );
}

export default Nav;
