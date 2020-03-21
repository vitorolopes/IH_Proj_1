class Quiz {
    constructor(game){
           
     }
    start(){
        // console.log("Lets start the Quiz");
        document.getElementById("canvas").style.display = "none";
        document.getElementById("quiz-container").style.display = "flex";
       
        // Define the variables we are going to need (DOM manipulation)
                const questionContainerElement = document.getElementById('question-container')
                const questionElement = document.getElementById('question')
                const isWrightOrWrong = document.getElementById('wright-wrong')
                const answerButtonsElement = document.getElementById('answer-buttons')
                const startButton = document.getElementById('start-btn')
                const nextButton = document.getElementById('next-btn')
    }

    checkAnswer() {
        console.log("checkAnswer was called")
        document.getElementById("canvas").style.display = "block";
        document.getElementById("quiz-container").style.display = "none";
        return true;
    }

}