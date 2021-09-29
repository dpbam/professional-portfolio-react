import { useState } from 'react';
import { validateEmail } from '../utils/helpers.js';

export const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //   isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    if (errorMessage) {
      <div>
        <p className='error-text'>{errorMessage}</p>
      </div>;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <div className='contact-div'>
      <div className='container'>
        <div className='row'>
          <h1 className='contact-me-header'>Contact Me</h1>
        </div>
        <div className='row'>
          <h4 style={{ textAlign: 'center' }}>Would love to hear from you.</h4>
        </div>
        <div>
          <a href=''>thederekphelps@gmail.com</a>
        </div>
        <div className='row input-container'>
          <div className='col-xs-12'>
            <div className='styled-input wide'>
              <input
                type='text'
                defaultValue={name}
                onBlur={handleChange}
                name='name'
              />
              <label htmlFor='name'>Name</label>
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='styled-input'>
              <input
                type='email'
                defaultValue={email}
                onBlur={handleChange}
                name='email'
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='col-xs-12'>
            <div className='styled-input wide'>
              <textarea
                name='message'
                defaultValue={message}
                onBlur={handleChange}
                rows='5'
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>
          </div>
          <div className='col-xs-12'>
            <div className='btn-lrg submit-btn'>Send Message</div>
          </div>
        </div>
      </div>
      {/* <div className='contact-page-bottom' style={{ padding: '100px' }}></div> */}
    </div>
  );
};

export default Contact;
