// const world = require("../world");
// const Phaser = require("Phaser");

// const ACCELERATION = 50;

module.exports = function update() {
  {
    if (this.ball.y > 600)
    {
      this.ball.setVelocity(0);
      this.ball.setPosition(this.paddle.x, 500);
      this.ball.setData('onPaddle', true);  
    }
  }
};

