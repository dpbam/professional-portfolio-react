import '../assets/css/style2.css';
// import { useState } from 'react';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact', 'Resume'];

  return (
    <nav>
      <h1 className='header' style={{ fontSize: '50px' }}>
        DEREK PHELPS
      </h1>
      <div>
        {tabs.map((tab) => (
          <Button
            variant='text'
            color='inherit'
            className='nav-btn'
            onClick={() => props.setCurrentComponent(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
