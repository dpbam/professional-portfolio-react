import '../assets/css/style2.css';
import { useState } from 'react';
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav>
      <h1>DEREK PHELPS PORTFOLIO</h1>
      {/* <ul className='nav-links'>
        <Link style={navStyle} to='/about'> */}
      <Button variant='text' color='inherit'>
        {/* need href to tell the button where to go */}
        About
      </Button>
      {/* </Link> */}
      {/* <Link style={navStyle} to='/projects'> */}
      <Button variant='text' color='inherit'>
        Projects
      </Button>

      {/* </Link> */}
      {/* <Link style={navStyle} to='/contact'> */}
      <Button variant='text' color='inherit'>
        Contact
      </Button>
      {/* </Link> */}
      {/* </ul> */}
    </nav>
  );
}

export default Nav;
