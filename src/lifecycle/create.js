const world = require("../world");
// const { width, height } = require("../constants");

// import Fighter from '../assets/fighter.png';

module.exports = function create() {

  //  Enable world bounds, but disable the floor
  this.physics.world.setBoundsCollision(true, true, true, false);

  // Background image
  this.background = this.add.image(400, 300, 'background');
  this.background.setScale(1.5);

  // Enables background theme song
  this.theme = this.sound.add('theme', { volume: 0.2, loop: true});
  this.theme.play();


  //  Create the bricks in a 10x6 grid
  this.bricks = this.physics.add.staticGroup({
    key: 'sign',
    setScale: { x: 1.75, y: 1.75 }, 
    frame: [ 'sign', 'sign', 'sign', 'sign', 'sign', 'sign' ],
    frameQuantity: 10,
    gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
  });

  
  this.ball = this.physics.add.image(400, 500, 'ball').setCollideWorldBounds(true).setBounce(1);
  this.ball.setData('onPaddle', true);
  this.ball.setScale(0.018);

  this.paddle = this.physics.add.image(400, 550, 'paddle').setImmovable();
  this.paddle.setScale(0.08);


  //  Our colliders
  this.physics.add.collider(this.ball, this.bricks, hitBrick, null, this);
  this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this);

  //  Input events
  this.input.on('pointermove', function (pointer) {

      //  Keep the paddle within the game
      this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748);

      if (this.ball.getData('onPaddle'))
      {
          this.ball.x = this.paddle.x;
      }

  }, this);

  this.input.on('pointerup', function (pointer) {

      if (this.ball.getData('onPaddle'))
      {
          this.ball.setVelocity(-75, -300);
          this.ball.setData('onPaddle', false);
      }

  }, this);
};

function hitBrick (ball, brick)
  {
    brick.disableBody(true, true);
    this.destroy = this.sound.add('destroy', { volume: 0.3, loop: false});
    this.destroy.play();

    if (this.bricks.countActive() === 0)
      {
        this.resetLevel();
      }
      console.log(brick);
  };

resetLevel = function ()
  {
    this.resetBall();

    this.bricks.children.each(function (brick) {

      brick.enableBody(false, 0, 0, true, true);

    });
  };

hitPaddle = function (ball, paddle)
 
  {
    

    var diff = 0;

    if (ball.x < paddle.x)
    {
      //  Ball is on the left-hand side of the paddle
      diff = paddle.x - ball.x;
      ball.setVelocityX(-10 * diff);
      
    }
    else if (ball.x > paddle.x)
    {
      //  Ball is on the right-hand side of the paddle
      diff = ball.x -paddle.x;
      ball.setVelocityX(10 * diff);
    }
    else
    {
      //  Ball is perfectly in the middle
      //  Add a little random X to stop it bouncing straight up!
      ball.setVelocityX(2 + Math.random() * 8);
    }
  };
    


