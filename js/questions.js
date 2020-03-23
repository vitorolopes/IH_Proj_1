class Question {
    constructor(question, answers,game){
        this.question = question;
        this.answers = answers;
        this.startButton = document.getElementById('start-btn')
        this.nextButton = document.getElementById('next-btn')
        this.questionContainerElement = document.getElementById('question-container')
        this.questionElement = document.getElementById('question')
        this.answerButtonsElement = document.getElementById('answer-buttons')
    }

startQuiz() {
this.startButton.classList.add("hide")
this.questionContainerElement.classList.remove("hide")
this.createQuestionsArray()
// if(Math.random() < 0.5){
//   this.index = 0
// } else {
//   this.index = 1
// }
this.setNextQuestion()
}

createQuestionsArray(){
    //////////////////////////////////////////////////////////////////////
// create questions
this.questions = [                                          
    new Question('Who wrote The Little Prince?', [
        { text: 'Dostoyevsky', correct: false },
        { text: 'Saint-Exupery', correct: true },
        { text: 'Tino de Rans', correct: false },
        { text: 'Baudelaire', correct: false }
      ]),
    new Question ('In Between Dreams is a music album by …', [
        { text: 'Jack London', correct: false },
        { text: 'Jack Johnson', correct: true },
        { text: 'Jack the Ripper', correct: false },
        { text: 'Jack of all trades', correct: false }
      ])
];
console.log(this.questions)
console.log(this.questions[1].question) // --->>>>>>>>>> OK consigo aceder à variavel questions.
}


setNextQuestion() {
this.resetState()                 
console.log(this.questions[1].question) // --->>>>>>>>>> OK daqui também consigo aceder à variavel questions.
this.showQuestion() 
}

resetState(){
        while (this.answerButtonsElement.firstChild) {
        this.answerButtonsElement.removeChild(this.answerButtonsElement.firstChild)  // removes all the "default" buttons
      }
}


showQuestion() { 
    this.questionElement.innerText = this.questions[1].question // substitute later on for a random index
    this.questions[1].answers.forEach(answer => {
        const button = document.createElement('button') // Creates new buttons
        button.innerText = answer.text // Sets the text of each button equal to each one of the answers to a question
        button.classList.add('btn')    // Adds a class-"btn"- to each one of the new buttons
        if (answer.correct) {  // if answer.correct === True;
          button.dataset.correct = answer.correct // add data-correct ="true"  to the button corresponding to the correct answer
        }
        this.answerButtonsElement.appendChild(button) // appends each one of the new buttons to the div "answer-buttons" 
        button.addEventListener('click', this.selectedAnswer) // sets an event listener for each one of the buttons
         console.log("showQuestion was called")
    })
   // console.log (this.questionElement.innerText)
}

selectedAnswer(e) {
// VER   line 67   // button.addEventListener('click', this.selectAnswer) 
  console.log("selectedAnswer was called")
  const selectedButton = e.target // this is the button that was selected with the click line 69 button.addEventListener('click', this.selectAnswer) 
  console.log(selectedButton)
  if (selectedButton.dataset.correct==="true"){
    console.log("call quiz.checkAnswer()")
    return true
  } else { 
    console.log("cal game-reaaaaaaaaaaaally over")
    return false
 
  }

}

}













