import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        <div>
          <h2
            className='section-title primary-border'
            style={{ color: 'white' }}
          >
            ABOUT ME
          </h2>
        </div>
        <div className='headshot'>
          <img
            src={headshot}
            style={{ width: '60%', alignItems: 'center' }}
            alt='Derek Phelps headshot'
          />
        </div>
        <div>
          <p style={{ color: 'white', paddingLeft: '20px' }}>
            I'm a 30 yr. professional musician and stand-up comedian making the
            transition to web design. But these things aren't all that
            different, are they?
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
