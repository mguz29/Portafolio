import {React, useState} from 'react';
import style from './contact.module.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'

 export default function Contact(){

  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target)
    emailjs.sendForm('service_h1oadk9','template_vt534av',event.target,'QrrgfR3JmZDRfpDPB')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='div-form'>
      <h1 className='title-form'>Contact Us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
}