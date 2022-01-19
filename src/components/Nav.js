import '../assets/css/style2.css';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact'];

  return (
    <nav>
      <a
        href='https://dpbam.github.io/professional-portfolio-react/'
        className='header-hyperlink'
      >
        <h1 className='header'>DEREK PHELPS</h1>
      </a>
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
          href='https://drive.google.com/drive/u/0/folders/1BqRZwnH6-a5W-OdPQXAonHVBSRrJC0ZZ'
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
