import React from 'react';
import './css/Hero.css';
import Intro from './images/intro.png';
import IntroSmall from './images/intro-small.png';
import IntroSmall2 from './images/intro-small2.png';
import IntroSmall3 from './images/intro-small3.png';

const Hero = () => (
  <>
    <section className="hero">
      <img src={Intro} alt="" className='intro-img large' />
      <img src={IntroSmall3} alt="" className='intro-img small' />
      <h1>I’m a Web Developer</h1>
      <h2>Currently I’m in my 2nd year of B.Tech CSE.</h2>
      <p className='description'>
        I’m a self-taught UI/UX designer and web developer with one year of experience working with international clients. I focus on creating seamless, engaging digital experiences that bring ideas to life.
      </p>
    </section>
  </>
);

export default Hero;
