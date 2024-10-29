import React from 'react';
import './css/Skills.css';
import skillsImage from './images/skills1.png';
import skills2Image from './images/skills2.png';

const Skills = () => (
    <section id="skills">
        <h2>My <span className="highlight">SkillSet</span> Includes...</h2>
        <div className="skill-icons">
            <img src={skillsImage} alt="Skills" />
            <img id='img2' src={skills2Image} alt="Skills" />
        </div>
    </section>

);

export default Skills;
