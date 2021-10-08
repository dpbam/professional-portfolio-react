import '../assets/css/style2.css';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact'];

  return (
    <nav>
      <h1 className='header'>DEREK PHELPS</h1>
      <div className='nav-btn'>
        {tabs.map((tab) => (
          <Button
            variant='text'
            color='inherit'
            // className='nav-btn'
            onClick={() => props.setCurrentComponent(tab)}
          >
            {tab}
          </Button>
        ))}
        <a
          href='https://docs.google.com/document/d/15QOVJsyavSI0D1zb2tNnkKySsDkZtjuQt3MVJDSSjO8/edit?usp=sharing'
          target='_blank'
          rel='noreferrer noopener'
        >
          RESUME
        </a>
      </div>
    </nav>
  );
}

export default Nav;
