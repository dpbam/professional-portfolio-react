import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        {/* <div className='about-me-title'>
          <h2 className='section-title primary-border'>ABOUT ME</h2>
        </div> */}
        <div className='headshot'>
          <img
            src={headshot}
            style={{ width: '95%', alignItems: 'center' }}
            alt='Derek Phelps headshot'
          />
        </div>
        <div className='about-me-title'>
          <h3 className='section-title primary-border'>ABOUT ME</h3>
        </div>
        <div className='about-paragraph'>
          <p style={{ paddingLeft: '20px', paddingRight: '20px' }}>
            I'm a full stack web developer coming from the background of a
            professional musician and stand-up comedian. But these things aren't
            all that different. Being a musician and comedian means developing a
            relationship with the audience and making my taste in music and
            jokes fit with what THEY want. It also means lots of experience
            working on teams and with other people in real world settings. As a
            full-stack web developer I relish in the opportunity to figure out
            what clients want, and implementing that efficiently, effectively,
            and with a little bit of humor and music thrown in where possible.
            (Photo credit: Daniel Solano)
          </p>
        </div>
      </section>
      <div className='about-page-bottom' style={{ padding: '70px' }}></div>
    </div>
  );
};

export default About;
