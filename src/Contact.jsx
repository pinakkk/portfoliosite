import React from 'react';
import './css/Contact.css'; // Import the CSS file
import imgboxx from './images/imgbox.png';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Get in <span className="touch">touch</span>
      </h1>
      <p className="contact-subtitle">
        Let's Create Something Beautiful Together!
      </p>
      <div className="contact-form-container">
        <div className="contact-form">
          <h2 className="contact-form-title">Let's connect</h2>
          <p className="contact-form-description">
            I can't beat the beauty of the moon, but I can help you craft beautiful designs and a smooth development process for your next project.
          </p>
          <form className="form-elements">
            <input
              type="text"
              placeholder="Name"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input"
            />
            <textarea
              placeholder="Message"
              className="form-textarea"
            ></textarea>
            <button type="submit" className="form-button">
              <span>Send it to me</span>
              <i className="fas fa-rocket"></i>
            </button>
          </form>
        </div>
        <div className="contact-image-container">
          <img
            src= {imgboxx}
            alt="Astronaut on a swing hanging from the moon in a starry night sky"
            className="contact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
