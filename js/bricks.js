class Brick {
    constructor(game,x,y,width,height) {
        this.context = game.context;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = document.getElementById("img_brick")
    }

    draw () {
        console.log("brick.draw was called")
        // for (let i = 0; i <= 360; i++){
        //    this.context.drawImage(this.image, i, 0, this.width, this.height)
        //    this.context.drawImage(this.image, i, 35, this.width, this.height)
        //    console.log(i)
        //    i += 39  
        // }
        console.log(`this.x = ${this.x}`)
        this.context.save();
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height)
        
        // this.x = this.x + 40; // here a draw just one brick, changing its x position each time the function is called ...
        // // ... from game. js
        // console.log(`this.x = ${this.x}`)
        // if (this.x > 360) {  // this.x === this.context.width - this.width (Why this doesn't work??? 400-40 = 360!!!)
        //     console.log("WENT THROUGH if CONDITION WHERE brick.x is reset to ZERO")
        //     this.x = 0;
        //     //
        // }
        this.context.restore();
    }

    update(){

    }  
}






