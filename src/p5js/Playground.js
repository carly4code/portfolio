import React, { useEffect } from 'react';
import Sketch from 'react-p5';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;



let XYspeed = 2;

let xspeed;
let yspeed;
let moveX = 0;
let moveY = 0;

let circleRadius = 150;

let circleR;
let dim;


const Playground = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasWidth,canvasHeight).parent(canvasParentRef);
    p5.colorMode("HSB");
    p5.noStroke();
    dim = canvasWidth / 2;
    p5.ellipseMode('RADIUS');
    p5.frameRate(1);
  };

  const draw = (p5) => {
// p5.background(0);
    drawGradient(p5, canvasWidth/2 +200, canvasHeight / 2);
    };



  function drawGradient(p5,x, y) {
    let radius = dim / 2;
    let h = p5.random(0, 360);
    for (let r = radius; r > 0; --r) {
      p5.fill(h, 90, 90);
      p5.ellipse(x, y, r, r);
      h = (h + 1) % 360;
    }
  }


  return <Sketch setup={setup} draw={draw} />;
};

export default Playground;


