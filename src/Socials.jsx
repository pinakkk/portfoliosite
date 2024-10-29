import React from 'react';
import './css/Socials.css';
import Linkedin from './images/LinkedIn.png';
import Spotify from './images/Spotify.png';
import Instagram from './images/Instagram.png';
import Github from './images/github.png';
import Behance from './images/behance.png';

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://link-to-social.com" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="Social Icon" className="social-icon" />
      </a>
      <a href="https://link-to-other-social.com" target="_blank" rel="noopener noreferrer">
        <img src={Spotify} alt="Other Social Icon" className="social-icon" />
      </a>
      <a href="https://link-to-social.com" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="Social Icon" className="social-icon" />
      </a>
      <a href="https://link-to-other-social.com" target="_blank" rel="noopener noreferrer">
        <img src={Behance} alt="Other Social Icon" className="social-icon" />
      </a>
      <a href="https://link-to-social.com" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Social Icon" className="social-icon" />
      </a>
    </div>
  );
};

export default Socials;
