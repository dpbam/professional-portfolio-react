import '../assets/css/style2.css';
import { useState } from 'react';
// import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
  };

  return (
    <nav>
      <h3>Derek Phelps Portfolio</h3>
      {/* <ul className='nav-links'>
        <Link style={navStyle} to='/about'> */}
      <li>About</li>
      {/* </Link> */}
      {/* <Link style={navStyle} to='/projects'> */}
      <li>Projects</li>
      {/* </Link> */}
      {/* <Link style={navStyle} to='/contact'> */}
      <li>Contact</li>
      {/* </Link> */}
      {/* </ul> */}
    </nav>
  );
}

export default Nav;
