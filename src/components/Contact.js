export const Contact = () => {
  return (
    <div>
      <section id='contact-me' style={{ color: 'white' }}>
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
      </section>
    </div>
  );
};

export default Contact;
