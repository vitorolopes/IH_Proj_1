class Game {
    constructor(canvas) {
        this.canvas=canvas;
        this.context=canvas.getContext("2d");
        this.width=canvas.width;
        this.height=canvas.height;
        this.player = new Player(this);
       // this.player.setControls(); // <-- NO NEED FOR THIS LINE, came from Gui´s code
        this.gameOn = true;
        this.animationId;
        this.frame = 0;
        this.ball = new Ball(this) // <-- Change in game.js to introduce the ball
        this.bricks = []; // <-- Change in game.js to introduce the bricks (this.obstacle = new Obstacle(this))   
    }
   
    start() {
        console.log("Game Started");
        this.reset();
        this.animation();
    }

    reset() {
        this.player = new Player(this);
        this.ball = new Ball(this); // <-- Change in game.js to introduce the ball
        this.setInitialBrickArray() // <-- function created to create the initial array of brick objects and to draw them
        this.player.setControls();
        this.frame = 0;
        this.gameOn = true;       
    }
     
    setInitialBrickArray() {
    let rows = 3; let width = 40; let height = 30;
    for (let j = 0; j < rows; j++){
        let y = (j * height)
        for(let i = 0; i < 10; i++) { // replace 10 for this.width/this.brick.width (400/40 =10)
        let x = (i * width);
        this.bricks.push(new Brick(game, x, y, width, height));
        // console.log(this.bricks)
        // console.log(x)
    } 
  }
}

    animation() {
        this.draw();
        this.update();
        this.animationId = window.requestAnimationFrame(() => {
            if (this.gameOn) {
                this.animation();
            } else {
                this.gameOver();
            }
        }
        )
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height); // clears the whole canvas
        this.player.draw();
        this.ball.draw(); // <-- Change in game.js to introduce the ball
        for (let i = 0; i < this.bricks.length; i++) { // "IMPROVEMENT"--> Change for forEach
            this.bricks[i].draw(); 
        }
    }

    update() {
        this.player.update();       
        this.ball.update(); // <-- Change in game.js to introduce the ball

        if(this.player.crashPaddleBall(this.ball)) {
            this.ball.vy = - this.ball.vy;
           // console.log("WENT THROUGH if CONDITION WHERS VELO IS REDEFINED")
        } 

        for (let i = 0; i < this.bricks.length; i++){
            if(this.ball.crashBallBrick(this.bricks[i])) {
                console.log("trying to remove the hitten bricks")
                this.bricks.splice(i, 1);
            }
        }

        this.frame++;
       // console.log(`frame number ${this.frame}`)
        if(this.frame > 800) {
            this.gameOn = false;
        }      
    }

    gameOver() {
        this.context.fillText("Game Over", this.width/2, this.height/2);
    }
}


