import { useRef } from 'react';
// import { validateEmail } from '../utils/helpers.js';
import emailjs, { init } from 'emailjs-com';

init('user_3UCMhdJW4KW3vymVAZiU4');

export const Contact = () => {
  // const [errorMessage, setErrorMessage] = useState('');

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
    e.target.reset();
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
          <h4 style={{ textAlign: 'center' }}>I'd love to hear from you.</h4>
        </div>
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

export default Contact;
