export const Contact = () => {
  return (
    <div className='contact-div'>
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
          <div class='col-xs-12'>
            <div class='styled-input wide'>
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class='col-xs-12'>
            <div class='btn-lrg submit-btn'>Send Message</div>
          </div>
        </div>
      </div>
      <div className='contact-page-bottom' style={{ padding: '100px' }}></div>
    </div>
  );
};

export default Contact;
