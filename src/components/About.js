import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        <div>
          <h2
            className='section-title primary-border'
            // style={{ color: 'white' }}
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
          <p style={{ paddingLeft: '20px' }}>
            I'm a web developer coming from the background as professional
            musician and stand-up comedian. But these things aren't all that
            different, are they? Being a musician and comedian means developing
            a relationship with the audience and making my taste in music and
            jokes fit with what THEY want. Web development is the same thing,
            but with computers.
          </p>
        </div>
      </section>
      <div className='about-page-bottom' style={{ padding: '70px' }}></div>
    </div>
  );
};

export default About;
