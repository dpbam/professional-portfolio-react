import { useState, useRef } from 'react';
import { validateEmail } from '../utils/helpers.js';
import emailjs, { init, send } from 'emailjs-com';

init('user_3UCMhdJW4KW3vymVAZiU4');

export const Contact = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_b0to90l',
        'contact_form',
        form.current,
        'user_3UCMhdJW4KW3vymVAZiU4'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const [formState, setFormState] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });
  // const { name, email, message } = formState;

  // function handleChange(e) {
  //   if (e.target.name === 'email') {
  //     const isValid = validateEmail(e.target.value);
  //     console.log(isValid);
  //     //   isValid conditional statement
  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
  //   if (!errorMessage) {
  //     setFormState({ ...formState, [e.target.name]: e.target.value });
  //   }

  //   if (errorMessage) {
  //     <div>
  //       <p className='error-text'>{errorMessage}</p>
  //     </div>;
  //   }
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  return (
    <div className='contact-div'>
      <div className='container'>
        <div className='row'>
          <h1 className='contact-me-header'>Contact Me</h1>
        </div>
        <div className='row'>
          <h4 style={{ textAlign: 'center' }}>Would love to hear from you.</h4>
        </div>
        {/* <div className='email-link'>
          <a href='mailto:thederekphelps@gmail.com'>thederekphelps@gmail.com</a>
        </div> */}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' />
        </form>
        {/* <div className='row input-container'>
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
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
