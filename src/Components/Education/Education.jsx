import React from 'react';
import './Education.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const EDUCATION_DATA = [
  {
    school: 'University of Cincinnati',
    degree: 'Master of Engineering in Computer Science',
    location: 'Cincinnati, OH, USA',
    period: 'Jan 2021 – Apr 2022',
  },
  {
    school: 'Anna University',
    degree: 'Bachelor of Engineering in Computer Science',
    location: 'Chennai, India',
    period: 'Aug 2016 – Aug 2020',
  },
];

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="title-box">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="education-container">
        {EDUCATION_DATA.map((item, index) => (
          <div key={index} className="education-card">
            <div className="edu-top">
              <h3>{item.school}</h3>
              <span className="edu-period">{item.period}</span>
            </div>
            <h2>{item.degree}</h2>
            <p className="edu-location">{item.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
