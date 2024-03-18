import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j93mwa9', 'template_i4dscta', form.current, {
        publicKey: '5b0IHcF-4qecepDIa',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form}  onSubmit={sendEmail} className='email-form'>
      <label className='email-label'>Name</label>
      <input type="text" name="user_name" className='username-input'/>
      <label className='email-label'>Email</label>
      <input type="email" name="user_email" className='email-input'/>
      <label  className='email-label'>Message</label>
      <textarea name="message" className='email-message'/>
      <input type="submit" value="Send" className='email-submit'/>
    </form>
  );
};
