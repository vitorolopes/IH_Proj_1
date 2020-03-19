class Quiz {
    constructor(game){
            this.context=game.context;
            this.width = game.width;
            this.height = game.height;  
     }
    start(){
        this.context.clearRect(0, 0, this.width, this.height);
        console.log("Lets start the Quiz")
    }

}