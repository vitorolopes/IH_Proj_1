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
        // console.log("brick.draw was called")
        // console.log(`this.x = ${this.x}`)
        this.context.save();
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height)
        this.context.restore();
    }

    update(){

    } 
    
    top() {
        return this.y
    }
    right(){
        return this.x + this.width ;
    }
    bottom () {
        return this.y + this.height;
    } 
    left (){
        return this.x;
    } 
}






