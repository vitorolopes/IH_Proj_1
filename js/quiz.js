class Quiz {
    constructor(game){
        this.question = new Question (this)
     }
    start(){
        document.getElementById("canvas").style.display = "none";
        document.getElementById("quiz-container").style.display = "flex";
    }

    checkAnswer() {
     if(this.question.startQuiz()) {
        console.log("I am on my way back and I am returning TRUE")
        return true; 
     } else {
        console.log("I am on my way back and I am returning FALSE")
        return false;
     } 
    }
}