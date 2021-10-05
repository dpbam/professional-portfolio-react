import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section id='about-me' className='intro'>
        <img
          src={headshot}
          style={{ width: '100%' }}
          alt='Derek Phelps headshot'
        />
        <p style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          I'm a <strong>full-stack web developer</strong> <br />
          coming from the background <br />
          of a professional musician <br />
          and stand-up comedian. <br />
          But these things aren't <br />
          all that <br />
          different. <br />
          Being a <strong>musician</strong> <br />
          and <strong>comedian</strong>
          <br /> means developing a relationship <br />
          with the <strong>audience</strong> <br />
          and making my taste
          <br /> in music <br />
          and jokes fit <br />
          with what <strong>THEY</strong> want. <br />
          It also means lots of experience <br />
          working on <strong>teams</strong> <br />
          and with other <strong>people</strong> <br />
          in real world settings. <br />
          As a <strong>full-stack web developer</strong> <br />I relish the
          <strong>opportunities</strong> <br />
          to figure out <br />
          what <strong>clients</strong> want, <br />
          and implementing that <strong>efficiently</strong>, <br />
          effectively, <br />
          and with a little bit of <strong>humor</strong>
          <br /> and <strong>music</strong> <br />
          thrown in where possible. <br />
          (Photo credit: Daniel Solano)
        </p>
      </section>
    </div>
  );
};

export default About;
