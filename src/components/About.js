import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        <div className='about-me-title'>
          <h2 className='section-title primary-border'>ABOUT ME</h2>
        </div>
        <div className='headshot'>
          <img
            src={headshot}
            style={{ width: '95%', alignItems: 'center' }}
            alt='Derek Phelps headshot'
          />
        </div>
        <div className='about-paragraph'>
          <p style={{ paddingLeft: '20px' }}>
            I'm a web developer coming from the background of a professional
            musician and stand-up comedian. But these things aren't all that
            different, are they? Being a musician and comedian means developing
            a relationship with the audience and making my taste in music and
            jokes fit with what THEY want. Web development is the same thing,
            but with computers. (Photo credit: Daniel Solano)
          </p>
        </div>
      </section>
      <div className='about-page-bottom' style={{ padding: '70px' }}></div>
    </div>
  );
};

export default About;
