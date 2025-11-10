import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpeg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I build modern, user-focused web interfaces, React/TypeScript applications, clean data dashboards, and UI systems that teams can actually reuse. I care about accessibility, performance, and consistency, so I pair good design practices with solid engineering (Storybook, CI/CD, visual regression) to keep releases reliable. I’ve shipped production UI at Amazon and PDF Solutions and most of my work sits at the intersection of product, design, and frontend engineering.</p>


          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "90%" }} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} /></div>
            <div className="about-skill"><p>Next JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Node JS</p><hr style={{ width: "70%" }} /></div>
            <div className="about-skill"><p>Storybook</p><hr style={{ width: "80%" }} /></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
