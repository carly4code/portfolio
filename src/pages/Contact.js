import React from 'react';
import ArrowBtn from "../components/ArrowBtn";

import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Contact = () => {

  return (

    <section id="contact">
      <div className="home-contact">
        <div className="pageWrapper">
          <div className="section-head">Want to chat with me?</div>
          <div className="flex">
            <a href="mailto:ngakwano@gmail.com">
              <ArrowBtn label="Contact Me" />
            </a>
          </div>
          <div style={{
            fontSize: '30px',
            display: 'flex',
            gap: '10px'
          }}>
            <a href='https://www.linkedin.com/in/carly-o-ngakwan/' target="_blank">< FaLinkedin /></a>
            <a href='https://github.com/carly4code' target="_blank"><AiFillGithub /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
