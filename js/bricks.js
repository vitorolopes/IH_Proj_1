class Brick {
    constructor(game) {
        this.context = game.context;
        this.width = 40;
        this.height = 30;
        this.x = 0;
        this.y = 0;
        this.image = document.getElementById("img_brick")
    }

    draw () {
        for (let i = 0; i <= 360; i++){
           this.context.drawImage(this.image, i, 0, this.width, this.height)
           this.context.drawImage(this.image, i, 35, this.width, this.height)
           console.log(i)
           i += 39  
        }
    }

    update(){

    }  
}







