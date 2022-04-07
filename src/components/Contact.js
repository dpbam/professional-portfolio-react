import { useEffect, useRef, useState } from 'react';
// import { validateEmail } from '../utils/helpers.js';
// import emailjs, { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
require('dotenv').config();

// init(process.env.REACT_APP_EMAILJS_USERID);

export const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        'contact_form',
        form.current,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (response) => {
          // alert(
          //   'SUCCESS! Thank you for your message.',
          //   response.status,
          //   response.text
          // );
          setStatus('SUCCESS');
        },
        (error) => {
          alert('FAILED...', error);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  return (
    <div className='contact-div'>
      <div className='container'>
        <div className='row'>
          <h1 className='contact-me-header'>Contact Me</h1>
        </div>
        <div className='row'>
          <h4 style={{ textAlign: 'center' }}>I'd love to hear from you.</h4>
        </div>
        {status && renderAlert()}
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input
            className='name-input'
            type='text'
            name='user_name'
            aria-label='name input'
            placeholder='Name'
          />
          <input
            className='email-input'
            type='email'
            name='user_email'
            aria-label='email input'
            placeholder='Email'
          />
          <textarea
            name='message'
            aria-label='message input'
            placeholder='Your question or comment goes here.'
          />

          <button type='submit' className='btn-sml submit-btn' value='Send'>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div className='contact-success'>
    <p>Your message was sent successfully!</p>
  </div>
);

export default Contact;
