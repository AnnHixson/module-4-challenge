// Variables
var startButton = document.querySelector("#start-button");
var answerButton = document.querySelector(".answer"); /* problem */
var submitButton = document.querySelector("#submit-button");
var retryButton = document.querySelector("#retry-button");
var clearButton = document.querySelector("#clear-button");
var viewScoresButton = document.querySelector("#scores-button");

var startPage = document.querySelector(".start-page");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var questionsArray = [question1, question2, question3, question4, question5];
var currentQuestion = 0;
var endPage = document.querySelector(".end-page");
var scoresPage = document.querySelector(".high-scores");

// Starting Point
startPage.hidden = false;
// startPage.style.display = 'none';
question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
question4.hidden = true;
question5.hidden = true;
endPage.hidden = true;
scoresPage.hidden = true;

// Functions
function startQuiz() {
    // startPage.hidden = true;
    startPage.style.display = 'none';
    (questionsArray[currentQuestion]).hidden = false;
}

function answerQuestion() {
    (questionsArray[currentQuestion]).hidden = true;
    currentQuestion = currentQuestion + 1;
    if (currentQuestion < 5) {
        (questionsArray[currentQuestion]).hidden = false;
    } else {
        (questionsArray[currentQuestion]).hidden = true;
        endPage.hidden = false;
        currentQuestion = 1;
    };
}

function submitInitials(event) {
    event.preventDefault();
    endPage.hidden = true;
    scoresPage.hidden = false;
}

function tryAgain() {
    scoresPage.hidden = true
    // startPage.hidden = false
    startPage.style.display = 'flex'
}

// function clearScores() {

// }

function viewHighScores() {
    console.log("view high scores please");
    // startPage.hidden = true;
    startPage.style.display = 'none';
    question1.hidden = true;
    question2.hidden = true;
    question3.hidden = true;
    question4.hidden = true;
    question5.hidden = true;
    endPage.hidden = true;
    scoresPage.hidden = false;
}




// Event Listeners
startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click", answerQuestion);
submitButton.addEventListener("click", submitInitials);
retryButton.addEventListener("click", tryAgain);
// clearButton.addEventListener("click", clearScores);
viewScoresButton.addEventListener("click", viewHighScores);












// var timer = document.querySelector("#time-remaining");
// var secondsLeft = 75;
// var startPage = document.querySelector(".start-page");
// var quizQuestions = document.querySelector(".quiz-questions");
// var question1 = document.querySelector("#question1");
// var question2 = document.querySelector("#question2");
// var question3 = document.querySelector("#question3");
// var question4 = document.querySelector("#question4");
// var question5 = document.querySelector("#question5");
// var endPage = document.querySelector(".end-page");
// var scoresPage = document.querySelector(".high-scores");
// var correctAnswer = document.querySelectorAll(".correct");
// var wrongAnswer = document.querySelectorAll(".wrong");

// // Starting State
// startPage.hidden = false;

// var stateStart = startPage.getAttribute("data-state");
// quizQuestions.style.display = 'none';
// quizQuestions.hidden = true;
// var stateQuestions = quizQuestions.getAttribute("data-state");
// question1.hidden = true;
// var stateQ1 = question1.getAttribute("data-state");
// question2.hidden = true;
// question3.hidden = true;
// question4.hidden = true;
// question5.hidden = true;
// endPage.hidden = true;
// scoresPage.hidden = true;


// startPage.style.display = 'none';









// wrongAnswer.addEventListener("click", incorrect);








// function startQuiz() {
//     function beginTimer() {
//         var timeRemaining = setInterval(function() {
//             secondsLeft--;
//             timer.textContent = secondsLeft;
//             if(secondsLeft === 0) {
//                 clearInterval(timeRemaining);
//             }
//         }, 1000);
//     };
//     beginTimer();

//     function questionsBegin() {
//         // stateStart.setAttribute("data-state", "hidden");
//         startPage.hidden = true;
//         startPage.style.display = 'none';
//         quizQuestions.hidden = false;
//         // quizQuestions.style.display = 'flex';
//         // stateQuestions.setAttribute("data-state", "visible");
//         question1.hidden = false;

//         // stateQ1.setAttribute("data-state", "visible");
//     };
//     questionsBegin();
// };

// function incorrect() {
//     timer.textContent = secondsLeft - 15;
//     // it needs to iterrate through the quiz questions
// }