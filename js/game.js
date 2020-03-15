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
        // this.ball.draw();  // <-- NO NEED FOR THIS LINE
    }
   
    start() {
        console.log("Game Started");
        // this.ball.draw(); -->Working, comment this.reset() and this.animation() to see it
        this.reset();
        this.animation();
    }

    reset() {
        this.player = new Player(this);
        this.ball = new Ball(this); // <-- Change in game.js to introduce the ball
        this.brick = new Brick(this); // <-- Change in game.js to introduce the bricks
        this.player.setControls();
        this.frame = 0;
        this.gameOn = true;       
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
        this.brick.draw(); // <-- Change in game.js to introduce the bricks
    }

    update() {
        this.player.update();       
        this.ball.update(); // <-- Change in game.js to introduce the ball
        if(this.player.crashPaddleBall(this.ball)) {
            this.ball.vy = - this.ball.vy;
           // console.log("WENT THROUGH if CONDITION WHERS VELO IS REDEFINED")
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


