class Player {
    constructor(game) {
        this.context=game.context;
        this.width = game.width/5;
        this.height = game.height/50;
        this.x = game.width/2-this.width/2;
        this.y = game.height-10;

        this.speedL = 0;
        this.speedR = 0;    
    }

    draw() {
       
        this.context.save();
        this.context.fillStyle="blue";
        this.context.fillRect(this.x,this.y,this.width,this.height);
        this.context.restore();
    }

    setControls() {
        window.addEventListener("keydown", event => {
            event.preventDefault(); // PB comment. Make your player movement smoother. maybe it was just an issue i have on my small screen but when you push the arrow keys the window shift a little somtimes
            switch (event.keyCode) {
                case 37:
                    this.speedL = -3;
                    break;
                case 39:
                    this.speedR = 3;
                    break;
            }
        });
        window.addEventListener("keyup", event => {
            event.preventDefault();
            this.speedL = 0;
            this.speedR = 0;
        });   
    }

    update(){
        this.x += this.speedL; // updates the position
        if (this.x < 0){  // prevents the paddle of getting out of the canvas
            this.x = 0;
        }
       // console.log(`${this.x}`)
        this.x += this.speedR; // updates the position
        if (this.x + this.width > game.width){ // prevents the paddle of getting out of the canvas
        this.x = game.width-this.width;
        }
       // console.log(`${this.x}`)
       }

    top(){
        return this.y;
    }
    left (){
        return this.x;
    }
    right(){
        return this.x + this.width; 
    }

    crashPaddleBall (ball) {
                // console.log("crashBallPaddle was called")
                // console.log(`ball.x = ${ball.x}`)
                // console.log(`ball.y = ${ball.y}`)
                // console.log(`paddle.x = ${this.x}`)
                // console.log(`paddle.y = ${this.y}`)
                return   ball.bottom() >= this.top() && ball.left() >= this.left() && ball.right() <= this.right()
                }        
} 





