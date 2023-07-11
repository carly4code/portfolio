
import React  from 'react';
import ArrowBtn from "../components/ArrowBtn";


const About = () => {

    return (
      <section id="about">
      <div className="whatIDo pageWrapper">
        <div className="section-head">What I do?</div>
       <div  className="detail-text-wrap flex">
        <div  className="mobile-hidden" ></div>
        <div className="detail-text">
    I normally write code(or copy & paste). Then bugs appear. I fix bugs, and more bugs appear. Then I roll up my sleeves. Start the journey of learning deeper. <br />
    I make art using code when bugs didn't distroy me. It's the fun part of coding and fun part of me.
<a href='https://editor.p5js.org/carly4code/sketches'>
<ArrowBtn label="See my sketches"/>
</a>


        </div>
      </div>
    </div>
    </section>
    )
    };


  export default About;
