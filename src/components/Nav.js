import '../assets/css/style2.css';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['Home', 'Projects', 'Contact', 'Resume'];

  return (
    <nav>
      <div className='nav-btn'>
        {tabs.map((tab) => (
          <Button
            variant='text'
            color='inherit'
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
