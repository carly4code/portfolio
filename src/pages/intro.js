
import React from 'react';
import TextSlider from '../animations/textSlider';

import IntoImg from '../image/Coding_Girl.svg';
import SketchOne from '../p5js/SketchOne.js';
import Playground from '../p5js/Playground.js';


import { AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3 } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { BsFiletypeScss } from 'react-icons/bs';
import { BiLogoReact } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoJquery } from 'react-icons/bi';
import { BsFillBootstrapFill } from 'react-icons/bs';

const Intro = () => {
  const items = [
    {
      title: "Front-end developer",
    },
    {
      title: "Adventurer",
    },
    {
      title: "Self-learner",
    },
    {
      title: "Dreamer",
    },
  ];


  return (

    <section id="home">


      <div className="pageWrapper homePage1">
        <div>

        <div className="intro-text">
          <div className="carly">Carly Or</div>
          <div className="thesth">
            <div className="the">The</div>
            <div className="role">
              <TextSlider items={items} />
            </div>
          </div>

          <div class="icon-block">
            <p>Tech Stack</p>
            <ul>
              <li><AiOutlineHtml5 /></li>
              <li><FaCss3 /></li>
              <li><DiJavascript1 /></li>
              <li><BiLogoJquery /></li>

              <li><BsFiletypeScss /></li>
              <li><BiLogoReact /></li>
              <li><TbBrandNextjs /></li>
              <li><BsFillBootstrapFill /></li>
            </ul>
          </div>

          {/* image */}
          {/* <div className='codingGirl'>
            <img src={IntoImg}></img>
          </div> */}
          {/* <P5Sketch /> */}
        </div>
          <Playground />
          </div>
      </div>

    </section>
  );
};

export default Intro;
