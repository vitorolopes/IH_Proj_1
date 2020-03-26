class Quiz {
    constructor(game) {
      this.game = game;
      this.question = new Question(game);
    }
    start() {
      document.getElementById("canvas").style.display = "none";
      document.getElementById("quiz-container").style.display = "flex";
      this.question.startQuiz();
    }
    checkAnswer(event) {
      if (this.question.selectedAnswer(event) === true) {
        console.log("Clicked Answer is correct");
        this.game.checkIfGameContinues(true);
      } else {
        console.log("Clicked Answer is Wrong!!");
        this.game.checkIfGameContinues(false);
      }
    }
  }