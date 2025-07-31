import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import c1 from './images/c1.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <>
    <div className='container'>
      <div className='row pt-4'>
        <div className='col-md-6'>
          <h1 className='contact-heading'>We're Happy to Help</h1>
          <p className='contact-text'>📲 WhatsApp: +91 9912580066</p>
          <p className='contact-text'>📧 Email: Contactwellmates@gmail.com</p>
          {/* <p className='contact-text'>📸 Instagram: https://www.instagram.com/wellmates_25?igsh=OWEyM3R1MWhiNWpt</p>
          <p className='contact-text'>📘 Facebook: https://www.facebook.com/share/1G4cpYDZW1/</p> */}
          <p className='contact-text'>Send your questions, feedback, or bulk order inquiries via WhatsApp.</p>
        </div>
        <div className='col-md-6'>
        <img src={c1} className='contact-img' alt='contactimg' />
        </div>
      </div>
    </div>
    <br/>
    </>
  )
}

export default Contact
