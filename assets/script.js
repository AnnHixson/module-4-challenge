// Variables
var startButton = document.querySelector("#start-button");
var timer = document.querySelector("#time-remaining");
var secondsLeft = 75;
var startPage = document.querySelector(".start-page");
var quizQuestions = document.querySelector(".quiz-questions");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var endPage = document.querySelector(".end-page");
var scoresPage = document.querySelector(".high-scores");
var correctAnswer = document.querySelectorAll(".correct");
var wrongAnswer = document.querySelectorAll(".wrong");

// // Starting State
// startPage.hidden = false;

// var stateStart = startPage.getAttribute("data-state");
quizQuestions.style.display = 'none';
// var stateQuestions = quizQuestions.getAttribute("data-state");
// question1.hidden = true;
// var stateQ1 = question1.getAttribute("data-state");
// question2.hidden = true;
// question3.hidden = true;
// question4.hidden = true;
// question5.hidden = true;
// endPage.hidden = true;
// scoresPage.hidden = true;

// Event Listeners
startButton.addEventListener("click", startQuiz);
wrongAnswer.addEventListener("click", incorrect);

// Functions
function startQuiz() {
    function beginTimer() {
        var timeRemaining = setInterval(function() {
            secondsLeft--;
            timer.textContent = secondsLeft;
            if(secondsLeft === 0) {
                clearInterval(timeRemaining);
            }
        }, 1000);
    };
    beginTimer();

    function questionsBegin() {
        // stateStart.setAttribute("data-state", "hidden");
        startPage.hidden = true;
        startPage.style.display = 'none';
        quizQuestions.hidden = false;
        quizQuestions.style.display = 'flex';
        // stateQuestions.setAttribute("data-state", "visible");
        // question1.hidden = false;
        // stateQ1.setAttribute("data-state", "visible");
    };
    questionsBegin();
};

function incorrect() {
    timer.textContent = secondsLeft - 15;
    // it needs to iterrate through the quiz questions
}