var startBtn = document.querySelector("#start-btn");
var contentContainer = document.querySelector("#content-container");
var questionEl = document.querySelector("#question");
var answerBtn; //document.querySelector('.answer-btn')
var currentQuestionIndex;
var shuffledQuestions;
var answerContainer = document.querySelector("#answer-btns");
var resultContainer = document.querySelector("#result");
var startTime = 50;

var countdownEl = document.querySelector(".timer");

// setInterval(updateCountdown, 1000);

function updateCountdown() {
    var seconds = Math.floor(startTime % 60);

    countdownEl.innerHTML = `${seconds}`;
    startTime--;
}

var questions = [
  {
    question: "What is 2 + 2?",
    answer: ["1", "2", "3", "4"],
    correct: "4",
  },
  {
    question: "how are you?",
    answer: ["good", "okay", "great", "cool"],
    correct: "good",
  },
  {
    question: "what color is the sky?",
    answer: ["green", "blue", "red", "yellow"],
    correct: "blue",
  },
  {
    question: "how long did it take me to make this quiz?",
    answer: ["3 hours", "5 hours", "20 min", "too long!"],
    correct: "too long!",
  },
  {
    question: "what year is it?",
    answer: ["2020", "2022", "2023", "2019"],
    correct: "2022",
  }
];

var clearAnswers = function () {
  document.querySelector("#answer-btns").innerHTML = "";
  resultContainer.innerHTML = "";
};

var startGame = function () {
  setInterval(updateCountdown, 1000);
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
    //currentQuestionIndex++;
  contentContainer.classList.remove("hide");
  setNextQuestion();
};

var selectAnswer = function (event) {
    clearAnswers();
  var selectedAnswer = event.target.value;
  var questionObj = shuffledQuestions[currentQuestionIndex];

  if (selectedAnswer === questionObj.correct) {
    var result = document.createElement("pTag");
    result.textContent = "Correct!";
    resultContainer.appendChild(result);
  } else {
    var result = document.createElement("pTag");
    result.textContent = "Wrong!";
    resultContainer.appendChild(result);
  }
  currentQuestionIndex++;
  setNextQuestion();
};

var setNextQuestion = function (questionObj) {
  var questionObj = shuffledQuestions[currentQuestionIndex];
  contentContainer = "";
  
  questionEl.textContent = questionObj.question;

  for (var i = 0; i < questionObj.answer.length; i++) {
    //if (){
    answerBtn = document.createElement("button");
    answerBtn.className = "answer-btn btn";
    answerBtn.setAttribute("value", questionObj.answer[i]);
    answerBtn.textContent = questionObj.answer[i];
    answerBtn.addEventListener("click", selectAnswer);
    answerContainer.appendChild(answerBtn);
    //}
    //else {
     //  endGame();
    // }
  }
  
};

 //var endGame = function() {
     //console.log("end");
 //}

startBtn.addEventListener("click", startGame);
