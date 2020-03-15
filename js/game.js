class Game {
    constructor(canvas) {
        this.canvas=canvas;
        this.context=canvas.getContext("2d");
        this.width=canvas.width;
        this.height=canvas.height;
        this.player = new Player(this);
        this.player.setControls(); 
        this.gameOn = true;
        this.animationId;

        this.frame = 0;
    }
   
    start() {
        console.log("Game Started");
        this.reset();
        this.animation();
    }


    reset() {
        this.player = new Player(this);
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
    }

    update() {
        this.player.update();
        this.frame++;
        console.log(`frame number ${this.frame}`)
        if(this.frame > 1000) {
            this.gameOn = false;
        }
        
    }

    gameOver() {
        this.context.fillText("Game Over", this.width/2, this.height/2);
    }

    
}


