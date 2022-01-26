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
          I'm a <b>front-end web developer</b> <br />
          coming from the background <br />
          of a professional musician. <br />
          But these things aren't <br />
          all that <br />
          different. <br />
          Being a <b>musician</b> <br />
          means developing a relationship <br />
          with the <b>audience</b> <br />
          and making my taste
          <br /> in music fit <br />
          with what <b>THEY</b> want. <br />
          It also means lots of experience <br />
          working on <b>teams</b> <br />
          and with other <b>people</b> <br />
          in real world settings. <br />
          As a <b>front-end web developer</b> <br />I relish the
          <b> opportunities</b> <br />
          to figure out <br />
          what <b>clients</b> want, <br />
          and implement that <b>efficiently</b>, <br />
          effectively, <br />
          and with a little bit of <b>humor </b>
          <br /> and <b>music</b> <br />
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
            backgroundColor: 'rgb(238 135 103)',
            textAlign: 'center',
          }}
        >
          I'm a <b>front-end web developer</b> coming from the background of a
          professional musician. But these things aren't all that different.
          Being a <b>musician</b> and <b>comedian</b> means developing a
          relationship with the <b>audience</b> and making my taste in music fit
          with what <b>THEY</b> want. It also means lots of experience working
          on <b>teams</b> and with other <b>people</b> in real world settings.
          As a <b>front-end web developer</b> I relish the <b> opportunities</b>{' '}
          to figure out what <b>clients</b> want, and implement that{' '}
          <b>efficiently</b>, effectively, and with a little bit of <b>humor </b>
          and <b>music</b> thrown in where possible. (Photo credit: Daniel
          Solano)
        </p>
      </div>
    </div>
  );
};

export default About;
