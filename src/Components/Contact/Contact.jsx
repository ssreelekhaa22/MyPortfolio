import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {

  const UUID = "05370c34-3860-48ff-bdd9-ac514b354e50",
    [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', UUID);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setStatus('Email sent successfully ✅');
      event.target.reset();
    } else {
      setStatus('Something went wrong. Please try again.');
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className="title-box">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail />   <a href="mailto:nssreelekhaa@outlook.com">nssreelekhaa@outlook.com</a>

            </div>
            <div className="contact-detail">
              <IoCall />  <a href="tel:+15138365977">513-836-5977</a>
            </div>
            <div className="contact-detail">
              <FaLocationDot /> <p>Austin, TX, United States</p>
            </div>
            <div className="contact-detail">
              <FaLinkedin /> <a

                href="https://www.linkedin.com/in/sreelekhaa/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/sreelekhaa
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
