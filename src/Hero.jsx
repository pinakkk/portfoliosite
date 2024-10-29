import React from 'react';
import './css/Hero.css';
import Intro from './images/intro.png'
const Hero = () => (<>
  <section className="hero">
    <img src={Intro} alt="" className='intro-img' />
    <h1>I’m a Web Developer</h1>
    <h2>Currently i’m in my 2nd year of B.Tech CSE.</h2>
    <p className='description'>I’m a self-taught UI/UX designer and web developer with one year of experience working with international clients. I focus on creating seamless, engaging digital experiences that bring ideas to life.</p>
  </section>
</>
);

export default Hero;
