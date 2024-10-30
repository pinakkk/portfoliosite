import React from 'react';
import './css/Moonsection.css';
import MoonsectionImage from './images/moon.png';
import MoonsectionImageSmall from './images/moon-small.png'; // Import your smaller image

const MoonSection = () => (
  <>
    <img src={MoonsectionImage} alt="" className='moon-img large' />
    <img src={MoonsectionImageSmall} alt="" className='moon-img small' />
  </>
);

export default MoonSection;
