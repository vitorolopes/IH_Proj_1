class Ball {
    constructor(game) {
        this.context = game.context;
        this.radius = 10;
        // this.x = 100;
        // randomize the initial x position
        this.width = game.width;
        this.x = this.radius + Math.floor(Math.random() * (this.width-2*this.radius)) // add 1 and subtract 2 to avoid the ball being launched from the 2 top corners
        // this.y = 100;
        this.y = this.radius + 3 * 30; // 3 layers * brick.height QUESTION: How could I define the initial y position in function of brick.height???
        this.color = "red";
        // randomize the sign of initial vx
        this.sign;
        if (this.x % 2 === 0) {
            this.sign = 1
        } else {
            this.sign = -1
        }
        this.vx = this.sign * 3;
        this.vy = 3;
    }   

    draw() {
       // console.log("ball.draw was called")
       // console.log(`${this.x}`)
        // console.log(`${this.y}`)
        this.context.save();
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.closePath();
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.restore();
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x + this.radius + this.vx > canvas.width || this.x - this.radius + this.vx < 0) {
            this.vx *= -1; // add and subtract radius to avoid that weird effect that part of the ball goes out of the canvas
          }
        // if (this.y + this.radius + this.vy > canvas.height || this.y -this.radius + this.vy < 0) {
        //     this.vy *= -1; // this if condition will be removed later on. Otherwise the game wouldn´t ever end.
        //   }
        if ( this.y -this.radius + this.vy < 0) {
            this.vy *= -1; 
          }     
        // if (this.y + this.radius + this.vy > canvas.height) {
        //      this.game.gameOn = false;
        //   } //--> Trying to set game.gameOn to false from here is not going to work see didBallEscape()
    }


    top() {
        return this.y - this.radius
    }
    bottom () {
        return this.y + this.radius;
    } 
    left (){
        return this.x - this. radius;
    }  
    right(){
        return this.x + this.radius;
    }

    crashBallBrick(brick) {
        // console.log("crashBallBrick was called")
    //     if (this.top() <= brick.bottom() && this.right() <= brick.right() && this.bottom() >= brick.top() && this.left() >= brick.left()) {
    //       //  console.log("if cond of crashBallBrick was satisfied")
    //         this.vy *= -1;
    //         return true 
    // }
            return this.top() <= brick.bottom() && this.right() <= brick.right() && this.bottom() >= brick.top() && this.left() >= brick.left()
    }
    
    didBallEscape(){
        return this.y - this.radius > canvas.height;
    }

    reset() {
        // resets the ball to it's original position after ansering the Quiz.
        this.x =
        this.radius + Math.floor(Math.random() * (this.width - 2 * this.radius));
        this.y = this.radius + 3 * 30;
      }
      
    

}

