import '../assets/css/style2.css';
import { Button } from '@material-ui/core';

function Nav(props) {
  const tabs = ['About', 'Projects', 'Contact'];

  return (
    <nav>
      {/* <a href='https://derekphelpsdev.com' className='header-hyperlink'> */}
      <h1 className='header'>DEREK PHELPS</h1>
      {/* </a> */}
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
          href='https://drive.google.com/file/d/1wzs4i2v8s5Au36TRRn9Q3oQAoD4b1q49/view?usp=sharing'
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
