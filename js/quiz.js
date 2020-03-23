class Quiz {
    constructor(game){
        this.question = new Question (this)
     }
    start(){
        // console.log("Lets start the Quiz");
        document.getElementById("canvas").style.display = "none";
        document.getElementById("quiz-container").style.display = "flex";
        this.checkAnswer()
        // Define the variables we are going to need (DOM manipulation)
                // const questionContainerElement = document.getElementById('question-container')
                // const questionElement = document.getElementById('question')
                // const isWrightOrWrong = document.getElementById('wright-wrong')
                // const answerButtonsElement = document.getElementById('answer-buttons')
                // const startButton = document.getElementById('start-btn')
                // const nextButton = document.getElementById('next-btn')
    }

    checkAnswer() {
     if(this.question.startQuiz()) {
        console.log("I am on my way back")
        return true; 
     }
        // document.getElementById("canvas").style.display = "block";
        // document.getElementById("quiz-container").style.display = "none";
        
        // console.log("I am not returning nothing ... I am fucking greedy!!!!!")
    }

}