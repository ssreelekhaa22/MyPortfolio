import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from 'react-icons/io5'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

// enter your own web3 forms access key below

    formData.append("access_key", "xxxxxxxxxxxxxxxxxxxxxxxx");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    
      alert(res.message);
    
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
                    <IoIosMail /> <p>nssreelekhaa@outlook.com</p>
                </div>
                <div className="contact-detail">
                    <IoCall /> <p>513-836-5977</p>
                </div>
                <div className="contact-detail">
                    <FaLocationDot /> <p>Austin, TX, United States</p>
                </div>
                <div className="contact-detail">
                    <FaLinkedin/> <p>https://www.linkedin.com/in/sreelekhaa-n-775519219/</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
