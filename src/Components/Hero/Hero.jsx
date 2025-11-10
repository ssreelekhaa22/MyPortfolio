import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import resumePdf from '../../assets/Sreelekhaa-Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Sreelekhaa,</span> frontend developer based in USA.</h1>
      <p>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.</p>
      <div className="hero-action">
        <div className="hero-connect" onClick={() => window.location.href = '#contact'}>
          <AnchorLink href='#contact' className='anchor-link' offset={50} >Connect with me</AnchorLink>
        </div>

        <a
          className="hero-resume anchor-link"
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
        >
          My resume
        </a>

      </div>
    </div>
  )
}

export default Hero
