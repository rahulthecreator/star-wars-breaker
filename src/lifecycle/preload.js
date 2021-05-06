import PaddleLocation from '../assets/saber.png';
import BallLocation from '../assets/death-star.png';
import StarWars from '../assets/sw-sign.png';
import Background from '../assets/space.png';

import Theme from '../assets/audio/imperial_march.mp3';
import PaddleHit from '../assets/audio/HAN02.wav';
import Destroy from '../assets/audio/destroy.mp3';

module.exports = function preload() {

  // preloading of the images
  this.load.image('paddle', PaddleLocation);
  this.load.image('ball', BallLocation);
  this.load.image('sign', StarWars);
  this.load.image('background', Background);

  // preloading of the audio
  this.load.audio('theme', Theme);
  this.load.audio('paddleHit', PaddleHit);
  this.load.audio('destroy', Destroy);

};

