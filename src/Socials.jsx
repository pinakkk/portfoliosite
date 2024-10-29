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
      <a href="https://www.linkedin.com/in/pinakkk" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="Social Icon" className="social-icon" />
      </a>
      <a href="https://open.spotify.com/playlist/0BgLblFwW6ru8lfcpwmKxf?si=11c2464c9b3749be" target="_blank" rel="noopener noreferrer">
        <img src={Spotify} alt="Other Social Icon" className="social-icon" />
      </a>
      <a href="https://github.com/pinakkk" target="_blank" rel="noopener noreferrer">
        <img src={Github} alt="Social Icon" className="social-icon" />
      </a>
      <a href="https://behance.net/pinakkundu" target="_blank" rel="noopener noreferrer">
        <img src={Behance} alt="Other Social Icon" className="social-icon" />
      </a>
      <a href="https://instagram.com/pinakk.io" target="_blank" rel="noopener noreferrer">
        <img src={Instagram} alt="Social Icon" className="social-icon" />
      </a>
    </div>
  );
};

export default Socials;
