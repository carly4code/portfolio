
import React from 'react';
import ArrowBtn from "../components/ArrowBtn";
import { motion } from "framer-motion/dist/framer-motion";

const dropIn = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 0,
    transition: {
      type: "inertial",
      bounce: 0.6,
      duration: 1
    }
  }
};

const MotionTop = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={dropIn}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}>
      {children}
    </motion.div>
  )
}

const About = () => {

  return (
    <section id="about">
      <div className="whatIDo pageWrapper">
        <MotionTop className={'section-head'}>What I do</MotionTop>
        <div className="detail-text-wrap flex">
          <div className="mobile-hidden" ></div>
          <div className={"detail-text"}>
           <p> I normally write code(or copy & paste). Then bugs appear. I fix bugs, and more bugs appear.....</p>
           <p> Then I roll up my sleeves. Start the journey of learning deeper.</p>
           <p>I make art using code when bugs didn't distroy me. It's the fun part of coding and fun part of me.</p>
            <a href='https://editor.p5js.org/carly4code/sketches'>
              <ArrowBtn label="See my sketches" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};


export default About;
