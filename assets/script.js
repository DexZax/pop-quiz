var startBtn = document.querySelector("#start-btn");

var questionEl = document.querySelector("#question");
var answerBtn; 
var currentQuestionIndex;
var shuffledQuestions;
var answerContainer = document.querySelector("#answer-btns");
var resultContainer = document.querySelector("#result");
var startTime = 50;
var labelEl = document.querySelector("#label");
var saveBox = document.querySelector("#save-score");
var timer;
var saveText = document.querySelector("#savetext");
var initials = document.querySelector(".initials");
var saveBtn = document.querySelector(".save-btn");

var countdownEl = document.querySelector(".timer");


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
    question: "How are you?",
    answer: ["good", "okay", "great", "cool"],
    correct: "good",
  },
  {
    question: "What color is the sky?",
    answer: ["green", "blue", "red", "yellow"],
    correct: "blue",
  },
  {
    question: "How long did it take me to make this quiz?",
    answer: ["3 hours", "5 hours", "20 min", "too long!"],
    correct: "too long!",
  },
  {
    question: "What year is it?",
    answer: ["2020", "2022", "2023", "2019"],
    correct: "2022",
  }
];

var clearAnswers = function () {
  document.querySelector("#answer-btns").innerHTML = "";
  resultContainer.innerHTML = "";
};

var startGame = function () {
  timer = setInterval(updateCountdown, 1000);
  var contentContainer = document.querySelector("#content-container");
  startBtn.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
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
    startTime = startTime - 10;
    resultContainer.appendChild(result);
  }
  currentQuestionIndex++;
  setNextQuestion();
};

var setNextQuestion = function (questionObj) {
  
  var questionObj = shuffledQuestions[currentQuestionIndex];
  if(shuffledQuestions.length === currentQuestionIndex) {
    return endGame();
  }
  contentContainer = "";
  
  questionEl.textContent = questionObj.question;

  for (var i = 0; i < questionObj.answer.length; i++) {
    answerBtn = document.createElement("button");
    answerBtn.className = "answer-btn btn";
    answerBtn.setAttribute("value", questionObj.answer[i]);
    answerBtn.textContent = questionObj.answer[i];
    answerBtn.addEventListener("click", selectAnswer);
    answerContainer.appendChild(answerBtn);
  }
  
};

 var endGame = function() {
   clearInterval(timer);
   var contentContainer = document.querySelector("#content-container");
     contentContainer.classList.add("hide");
     saveText.textContent = ("Your socre is " + countdownEl.textContent + "! write your initials to save your score.");
     saveBox.classList.remove("hide")
     
     
 };

 var savedScore = []
 

 var saveInitials = function() {
   console.log("save");
   var score = countdownEl.textContent;
   initials = initials.value;
   savedScore.push({score, initials})
   localStorage.setItem("savedScore", JSON.stringify(savedScore));
 }


startBtn.addEventListener("click", startGame);
saveBtn.addEventListener("click", saveInitials);