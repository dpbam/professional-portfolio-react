import '../assets/css/style2.css';
// import { useState } from 'react';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact'];

  return (
    <nav>
      <h1 className='header' style={{ fontSize: '50px' }}>
        DEREK PHELPS PORTFOLIO
      </h1>
      {tabs.map((tab) => (
        <Button
          variant='text'
          color='inherit'
          onClick={() => props.setCurrentComponent(tab)}
        >
          {tab}
        </Button>
      ))}
    </nav>
  );
}

export default Nav;
