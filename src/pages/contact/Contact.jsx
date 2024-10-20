import React from "react";
import "./contact.css";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="projects section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be shy !</h3>

          <p className="contact__description">
            Feel free to get in touch in with me. I am always open to discussing
            new projects, creative ideas or oppurtunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me </span>
                <h4 className="info__desc">
                  garapatipavankumar04@gmail.com
                </h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me </span>
                <h4 className="info__desc">+91 9392576089</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://www.linkedin.com/in/garapati-pavan-kumar" className="contact__social-link">
              <FaLinkedinIn />
            </a>

            <a href="https://wa.me/9392576089" className="contact__social-link">
              <FaWhatsapp />
            </a>

            <a href="https://github.com/pavan347" className="contact__social-link">
              <FaGithub />
            </a>
          </div>
        </div>

        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your email"
                className="form__control"
              />
            </div>

            {/* <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div> */}
          </div>

          <div className="form__input-div">
            <textarea
              name=""
              id=""
              placeholder="Your message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
