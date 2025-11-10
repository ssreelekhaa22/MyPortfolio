import React from 'react';
import './Experience.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const EXPERIENCE_DATA = [
  {
    company: 'PDF Solutions',
    role: 'UI/FullStack Engineer',
    period: 'July 2023 - Present',
    summary:
      'Built a React/TypeScript analytics UI so business users could explore operational data and keep filters when drilling down, cutting time-to-insight by ~50%. Added D3.js/Chart.js views, backed by Node.js + PostgreSQL, and shipped via Jenkins → IIS with Jest gates. Created and maintained a React Storybook design system (75+ components) used across teams, automated publishing with GitHub Actions and Chromatic.',
    stack: [
      'React',
      'TypeScript',
      'D3.js',
      'Chart.js',
      'Node.js',
      'PostgreSQL',
      'Jenkins',
      'IIS',
      'Storybook',
      'GitHub Actions',
      'Chromatic',
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'May 2022 - March 2023',
    summary:
      'Worked on Amazon’s global EHS platform used by thousands of sites. Simplified high-traffic screens and data fetching to make routine tasks faster. Built the frontend to work against real or mock data so teams weren’t blocked. Kept deployments strict with automated tests and gated releases, and exposed only the data the UI needed to stay responsive.',
    stack: [
      'React',
      'TypeScript',
      'GraphQL (AppSync)',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'SNS/SQS',
    ],
  },
  {
    company: 'University of Cincinnati',
    role: 'Graduate Assistant',
    period: 'May 2021 - Apr 2022',
    summary:
     "Mentored students building full stack applications in React and Node.js and reviewed their work from a customer experience perspective.",
    stack: [
      'React',
      'Node.js',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="title-box">
        <h1>Experience</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="experience-container">
        {EXPERIENCE_DATA.map((item, index) => (
          <div key={index} className="experience-format">
            <div className="exp-top">
              <h3>{item.company}</h3>
              <span className="exp-period">{item.period}</span>
            </div>
            <h2>{item.role}</h2>
            <p>{item.summary}</p>

            <div className="tech-list">
              {item.stack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
