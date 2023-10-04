
import React from 'react';
import TextSlider from '../animations/textSlider';
import IntoImg from '../image/Coding_Girl.svg';
// import Sketch from 'react-p5'

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
  // const setup = (p5, canvasParentRef) => {
  //   p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
  // }

  // const draw = p5 => {

  // }

  return (

    <section id="home">
      {/* <Sketch setup={setup} draw={draw} /> */}
      <div className="pageWrapper homePage1">
        <div className="intro-text">
          <div className="carly">Carly Or</div>
          <div className="thesth">
            <div className="the">The</div>
            <div className="role">
              <TextSlider items={items} />
            </div>

          </div>
          <div style={{
            position: 'absolute',
            right: '12vw',
            maxWidth: '50%',
            top: '-164px'
          }}>
            <img style={{
              height: '46vh',
              objectFit: 'cover'
            }}
              src={IntoImg}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
