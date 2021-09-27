export const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='container'>
        <div className='row'>
          <h1 className='contact-me-header'>Contact Me</h1>
        </div>
        <div className='row'>
          <h4 style={{ textAlign: 'center' }}>Would love to hear from you.</h4>
        </div>
        <div className='row input-container'>
          <div className='col-xs-12'>
            <div className='styled-input wide'>
              <input type='text' required />
              <label>Name</label>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='styled-input'>
              <input type='text' required />
              <label>Email</label>
            </div>
          </div>
          <div className='col-xs-12'>
            <div className='btn-lrg submit-btn'>Send Message</div>
          </div>
        </div>
      </div>
      {/* <section id='contact-me' style={{ color: 'white', background: 'white' }}>
        <div>
          <h2 className='section-title secondary-border'>CONTACT ME</h2>
        </div>
        <div className='info-and-form'>
          <div className='address'>
            <h3>Derek Phelps</h3>
            <br />
            734-748-3484
            <br />
            <a href='mailto:thederekphelps@gmail.com'>
              thederekphelps@gmail.com
            </a>
          </div>
          <div className='or'>
            <h2>OR</h2>
          </div>
          <div className='contact-form'>
            <h3>Fill out this form and I'll get back to you:</h3>
            <label className='contact-name'>Your Name</label>
            <input type='text' id='contact-name' placeholder='Your Name' />

            <label className='contact-message'>Message</label>
            <textarea id='contact-message' placeholder='Message'></textarea>

            <button type='submit' className='button'>
              Submit
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
