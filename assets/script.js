var startBtn = document.querySelector("#start-btn")
var contentContainer = document.querySelector("#content-container")
var questionEl = document.querySelector('#question')
var answerBtn; //document.querySelector('.answer-btn')
var currentQuestionIndex;
var shuffledQuestions; 
var answerContainer = document.querySelector("#answer-btns")


var questions = [
    {
        question: 'What is 2 + 2?',
        answer: ["1", "2", "3", "4"],
        correct: "4"
    },
    {
        question: 'how are you?',
        answer: ["good", "okay", "great", "cool"],
        correct: "good"
    },
]

var clearAnswers = function() {
    document.querySelector("#answer-btns").innerHTML = "";
}

function startGame() {
    startBtn.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    currentQuestionIndex++;
    contentContainer.classList.remove('hide');
    setNextQuestion();
}

function selectAnswer(event) {
    var selectedAnswer = event.target.value;
    var questionObj = shuffledQuestions[currentQuestionIndex];
    if (selectedAnswer === questionObj.correct) {
        console.log("correct!")
    } else {
        console.log("wrong")
    }
    setNextQuestion();
}

function setNextQuestion(questionObj) {
    //clearAnswers();
    var questionObj = shuffledQuestions[currentQuestionIndex];
    contentContainer = "";
    questionEl.textContent = questionObj.question;
    for (var i = 0; i < questionObj.answer.length; i++) {
        answerBtn = document.createElement("button");
        answerBtn.className = "answer-btn btn";
        answerBtn.setAttribute("value", questionObj.answer[i]);
        answerBtn.textContent = questionObj.answer[i];
        answerBtn.addEventListener('click', selectAnswer);
        answerContainer.appendChild(answerBtn);
    }
}



startBtn. addEventListener('click', startGame)