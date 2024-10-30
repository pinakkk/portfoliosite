import React from 'react';
import './css/Header.css';

const Header = () => (
  <header>
    <h1>Pina<span className="hhigh">k</span></h1>
    <nav>
      <a href="#works">Works</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
