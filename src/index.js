const Phaser = require("phaser");
const create = require("./lifecycle/create");
const preload = require("./lifecycle/preload");
const update = require("./lifecycle/update");


var Breakout = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function Breakout ()
  {
      Phaser.Scene.call(this, { key: 'breakout' });

      this.bricks;
      this.paddle;
      this.ball;
  },
});

var config = {
  type: Phaser.WEBGL,
  width: 775,
  height: 600,
  parent: 'phaser-example',
  scene: 
  {
    Breakout,
    preload,
    create,
    update
  },
  physics: {
      default: 'arcade'
  }
};

var game = new Phaser.Game(config);
