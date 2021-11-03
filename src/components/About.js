import headshot from '../assets/images/Head-Shot-copy.jpeg';

const About = () => {
  return (
    <div>
      <section
        id='about-me'
        className='intro'
        style={{
          backgroundImage: `url(${headshot})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p
          className='about-paragraph'
          style={{ padding: '30px', font: 'lighter' }}
        >
          I'm a <strong>front-end web developer</strong> <br />
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
          As a <strong>front-end web developer</strong> <br />I relish the
          <strong> opportunities</strong> <br />
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
      <div>
        <p
          className='about-paragraph-phone'
          style={{
            padding: '20px',
            font: 'lighter',
            backgroundColor: 'rgb(106 49 31)',
            textAlign: 'center',
          }}
        >
          I'm a <strong>front-end web developer</strong>
          coming from the background of a professional musician and stand-up
          comedian. But these things aren't all that different. Being a{' '}
          <strong>musician</strong>
          and <strong>comedian</strong>
          means developing a relationship with the <strong>audience</strong>
          and making my taste in music and jokes fit with what{' '}
          <strong>THEY</strong> want. It also means lots of experience working
          on <strong>teams</strong>
          and with other <strong>people</strong>
          in real world settings. As a <strong>
            front-end web developer
          </strong>{' '}
          I relish the
          <strong> opportunities</strong>
          to figure out what <strong>clients</strong> want, and implementing
          that <strong>efficiently</strong>, effectively, and with a little bit
          of <strong>humor</strong>
          and <strong>music</strong>
          thrown in where possible. (Photo credit: Daniel Solano)
        </p>
      </div>
    </div>
  );
};

export default About;
