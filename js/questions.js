class Question {
    constructor(question, answers, game){
        this.question = question;
        this.answers = answers;
        this.startButton = document.getElementById('start-btn')
        this.nextButton = document.getElementById('next-btn')
        this.questionContainerElement = document.getElementById('question-container')
        this.questionElement = document.getElementById('question')
        this.answerButtonsElement = document.getElementById('answer-buttons')
        this.wrightWrongElement = document.getElementById('wright-wrong')
    }

startQuiz() {
this.startButton.classList.add("hide")
this.questionContainerElement.classList.remove("hide")
this.createQuestionsArray()
this.setNextQuestion()
if(this.showQuestion()){
  return true
}
}

createQuestionsArray(){
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
// console.log(this.questions)
// console.log(this.questions[1].question) // --->>>>>>>>>> OK consigo aceder à variavel questions.
}

setNextQuestion() {
this.resetState()                 
// console.log(this.questions[1].question) // --->>>>>>>>>> OK daqui também consigo aceder à variavel questions.
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
        //setTimeout( function () {button.addEventListener('click', this.selectedAnswer)}, 5000 )
        console.log("showQuestion was called")     
    })   
    // this.wrightWrongElement.classList.remove("hide") // WHY doesn't this work inside selectedAnswer()??????
    // this.wrightWrongElement.style.color = "green" // BUT if I write instead   document.getElementById('wright-wrong').classList.remove("hide") it works!!!
    // console.log(this.answerButtonsElement)
  }

selectedAnswer(e) {
  console.log("selectedAnswer was called")
  const selectedButton = e.target // this is the button that was selected with the click line 69 button.addEventListener('click', this.selectAnswer) 
  document.getElementById('chosen-option').classList.remove("hide")
  document.getElementById('chosen-option').innerText = `Your choice was: ${selectedButton.innerText}`
  console.log(selectedButton.innerText)
 // console.log(selectedButton)
  if (selectedButton.dataset.correct==="true"){
 //  console.log("call quiz.checkAnswer()")
    document.getElementById('wright-wrong').classList.remove("hide")
    document.getElementById("wright-wrong").innerText = "You got it right"
    document.getElementById('wright-wrong').style.color = "green"
    document.getElementById('wright-wrong').style.borderColor = "green";
    this.buttonBackToArka = document.getElementById("back-arka")
    this.buttonBackToArka.classList.remove("hide")
    this.buttonBackToArka.addEventListener('click', function () {
    console.log("GoBackToArka button was hit")
    return true
    }); 
  } else { 
    document.getElementById('wright-wrong').classList.remove("hide")
    document.getElementById("wright-wrong").innerText = "Wrong answer"
    document.getElementById('wright-wrong').style.color = "red"
    document.getElementById('wright-wrong').style.borderColor = "red";
    console.log("game-reaaaaaaaaaaaally over. Start a new Arkanoid game (from the beggining)")
    return false
  }
}
}













