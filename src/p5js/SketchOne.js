import React, { useEffect } from 'react';
import Sketch from 'react-p5';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

var noiseVal = 300;
var cellSize = 10;
var zseed = 0;

const SketchOne = () => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    p5.colorMode("HSB");
    p5.noStroke();

  };

  const draw = (p5) => {

  //   for (var y=0; y < canvasHeight; y++) {
  //      for (var x=0; x < canvasWidth; x++) {
  //        var fillCol = p5.noise(noiseVal, y/noiseVal)*300;
  //         var mouseDist = p5.dist(cellSize, y*cellSize, p5.mouseX, p5.mouseY);
  //         var colDist = p5.abs(fillCol - mouseDist);
  //         var brightness = p5.map(colDist, 0, 400, 60, 100);
  //         p5.fill(fillCol, brightness, 100);
  //         p5.rect(300, 300, 500, 500);
  //    }
  // }
  };


  return <Sketch setup={setup} draw={draw} />;
};

export default SketchOne;
