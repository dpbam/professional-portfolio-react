import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        <div>
          <h2 className='section-title primary-border'>ABOUT ME</h2>
        </div>
        <div>
          <img src={headshot} alt='Derek Phelps headshot' />
        </div>
        <div>
          <p>
            I'm a 30 yr. professional musician making the transition to web
            design. But these two things aren't all that different, are they?
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
