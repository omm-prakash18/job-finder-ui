import React from 'react';
import './App.css';
import { FaAmazon, FaDribbble, FaAirbnb, FaApple, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiFigma } from 'react-icons/si';

const jobs = [
  {
    id: 1,
    company: 'Amazon',
    LogoIcon: FaAmazon,
    logoBg: '#111',
    logoColor: '#fff',
    daysAgo: '5 days ago',
    title: 'Senior UI/UX Designer',
    tags: ['Part-Time', 'Senior Level'],
    salary: '$120/hr',
    location: 'Mumbai, India',
    isSaved: false
  },
  {
    id: 2,
    company: 'Google',
    LogoIcon: FcGoogle,
    logoBg: '#fff',
    logoColor: '',
    daysAgo: '30 days ago',
    title: 'Graphic Designer',
    tags: ['Part-Time', 'Flexible Schedule'],
    salary: '$150-220k',
    location: 'Kochi, India',
    isSaved: true
  },
  {
    id: 3,
    company: 'Dribbble',
    LogoIcon: FaDribbble,
    logoBg: '#ea4c89',
    logoColor: '#fff',
    daysAgo: '18 days ago',
    title: 'Senior Motion Designer',
    tags: ['Contract', 'Remote'],
    salary: '$85/hr',
    location: 'Chennai, India',
    isSaved: false
  },
  {
    id: 4,
    company: 'Figma',
    LogoIcon: SiFigma,
    logoBg: '#222',
    logoColor: '#fff',
    daysAgo: '5 days ago',
    title: 'UX Designer',
    tags: ['Full-Time', 'In office'],
    salary: '$200-250k',
    location: 'Bangalore, India',
    isSaved: true
  },
  {
    id: 5,
    company: 'Airbnb',
    LogoIcon: FaAirbnb,
    logoBg: '#ff5a5f',
    logoColor: '#fff',
    daysAgo: '5 days ago',
    title: 'Junior UI/UX Designer',
    tags: ['Contract', 'Remote'],
    salary: '$100/hr',
    location: 'Delhi, India',
    isSaved: false
  },
  {
    id: 6,
    company: 'Apple',
    LogoIcon: FaApple,
    logoBg: '#111',
    logoColor: '#fff',
    daysAgo: '5 days ago',
    title: 'Graphic Designer',
    tags: ['Full-Time', 'Flexible Schedule'],
    salary: '$85-120k',
    location: 'Kerala, India',
    isSaved: true
  }
];

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div 
          className="job-logo" 
          style={{ 
            backgroundColor: job.logoBg, 
            color: job.logoColor,
            border: job.company === 'Google' ? '1px solid #eee' : 'none'
          }}
        >
          <job.LogoIcon size={24} />
        </div>
        <button className={`save-btn ${job.isSaved ? 'saved' : ''}`}>
          {job.isSaved ? 'Saved' : 'Save'}
          {job.isSaved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
      
      <div className="job-company-info">
        <span className="company-name">{job.company}</span>
        <span className="days-ago">{job.daysAgo}</span>
      </div>
      
      <h3 className="job-title">{job.title}</h3>
      
      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      
      <div className="job-card-footer">
        <div className="job-salary-location">
          <div className="salary">{job.salary}</div>
          <div className="location">{job.location}</div>
        </div>
        <button className="apply-btn">Apply now</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default App;