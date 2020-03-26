class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.player = new Player(this);
      this.gameOn = true;
      this.animationId;
      this.frame = 0;
      this.ball = new Ball(this); // <-- Change in game.js to introduce the ball
      this.bricks = []; // <-- Change in game.js to introduce the bricks (this.obstacle = new Obstacle(this))
      this.quiz = new Quiz(this); // <-- Change in game.js to introduce the quiz
    }
    start() {
      // console.log("Game Started");
      document.getElementById("continue-button").style.display = "none";
      this.reset();
      this.animation();
    }
    reset() {
      this.player = new Player(this);
      this.ball = new Ball(this); // <-- Change in game.js to introduce the ball
      this.setInitialBrickArray(); // <-- function created to create the initial array of brick objects and to draw them
      this.player.setControls();
      this.frame = 0;
      this.gameOn = true;
    }
    setInitialBrickArray() {
      let rows = 3;
      let width = 40;
      let height = 30;
      for (let j = 0; j < rows; j++) {
        let y = j * height;
        for (let i = 0; i < this.width/width; i++) {
          // replace 10 for this.width/this.brick.width (400/40 =10)
          let x = i * width;
          this.bricks.push(new Brick(game, x, y, width, height));
        }
      }
      document.getElementById("continue-button").style.display = "none" 
    }
    animation() {
      this.draw();
      this.update();
      this.animationId = window.requestAnimationFrame(() => {
        if (this.bricks.length === 0) {
          this.draw();
          this.youWin();
        } else if (this.gameOn) {
          this.animation();
        } else {
          this.giveSecondChance();
        }
      });
    }
    draw() {
      this.context.clearRect(0, 0, this.width, this.height); // clears the whole canvas
      this.player.draw();
      this.ball.draw(); // <-- Change in game.js to introduce the ball
      for (let i = 0; i < this.bricks.length; i++) {
        // "IMPROVEMENT"--> Change for forEach
        this.bricks[i].draw();
      }
    }
    update() {
      this.player.update();
      this.ball.update(); // <-- Change in game.js to introduce the ball
      if (this.player.crashPaddleBall(this.ball)) {
        this.ball.vy = -this.ball.vy;
      }
      for (let i = 0; i < this.bricks.length; i++) {
        if (this.ball.crashBallBrick(this.bricks[i])) {
          this.bricks.splice(i, 1);
          this.ball.vy = this.ball.vy * -1;
        }
      }
      this.frame++;
      if (this.ball.didBallEscape(this.ball)) {
        // notice that I had to give the argument this.ball to didBalEscape. Otherwise it would not work.
        this.gameOn = false;
      }
    }
    youWin() {
      this.context.font = "15px Verdana";
      this.context.fillStyle = "green"
      this.context.fillText("      Congrats you won", 85, this.height / 2);
    }
    giveSecondChance() {
    //   this.context.fillText(
    //     "     Game Over ... or not ... to keep playing this game",
    //     50,
    //     this.height / 2
    //   );
    //   this.context.fillText(
    //     "hit the GoToQuiz button and try to answer the question",
    //     50,
    //     this.height / 2 + 10
    //   );

    this.context.font = "15px Verdana";
    this.context.fillStyle = "red"
    this.context.fillText("     Game Over ... or not ... " , 100, this.height/2);
    this.context.fillText("... to keep playing the current game" , 70, this.height/2+18);
    this.context.fillText(" hit the GoToQuiz button and", 100, this.height/2 + 36);
    this.context.fillText("  try to answer the question", 100, this.height/2 + 54);


      document.getElementById("continue-button").style.display = "block";
      const continueGame = document.querySelector("#continue-button");
      continueGame.addEventListener("click", () => {
        this.quiz.start();
      });
    }
    checkIfGameContinues(boolean) {
      if (boolean) {
        document.getElementById("canvas").style.display = "block";
        document.getElementById("quiz-container").style.display = "none";
        this.gameOn = true;
        this.ball.reset();
        this.animation();
      } else {
        document.getElementById("continue-button").style.display = "none";
        setTimeout(function(){document.getElementById("quiz-container").style.display = "none" }, 3000);
        setTimeout(function(){document.getElementById("canvas").style.display = "block" }, 3000);
        this.context.fillStyle = "white"  // this is to hide the fillText ("Game over or not")
        this.context.fillRect(70, 275, 300, this.height/7)
        this.context.font = "15px Verdana";
        this.context.fillStyle = "red"
        this.context.fillText("Now it is really GAME OVER  " , 100, 400);
        // this.context.fillText("... to keep playing the current game" , 70, this.height/2+18);
        // this.context.fillText(" hit the GoToQuiz button and", 100, this.height/2 + 36);
        // this.context.fillText("  try to answer the question", 100, this.height/2 + 54);
      }
    }
  }