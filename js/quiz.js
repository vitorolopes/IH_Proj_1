class Quiz {
    constructor(game){
            this.context=game.context;
            this.width = game.width;
            this.height = game.height;  
     }
    start(){
        // this.context.clearRect(0, 0, this.width, this.height);
        // this.context.fillStyle="green";
        // this.context.fillRect(100,100,100,100);
        // console.log("Lets start the Quiz");
        document.getElementById("canvas").style.display = "none";
        document.getElementById("quiz-div").style.display = "block";
    }

}