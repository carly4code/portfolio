
import React  from 'react';
import TextSlider from '../animations/textSlider';
// import Sketch from 'react-p5'

const Intro = () => {
  const items = [
    {
      title: "Designer",
    },
    {
      title: "Front-end developer",
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
              <TextSlider items={items}/>
             </div>
          </div>
          </div>
        </div>
        </section>
    );
  };

  export default Intro;
