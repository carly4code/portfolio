import React  from 'react';
import ArrowBtn from "../components/button";
const Contact = () => {

    return (

        <section id="contact">
        <div className="home-contact">
        <div className="pageWrapper">
          <div className="section-head">Want to chat with me?</div>
         <div className="flex">
         <a href="mailto:ngakwano@gmail.com">
          <ArrowBtn label="Contact Me"/>
          </a>
          </div>
          </div>
        </div>
        </section>
    );
  };

  export default Contact;
