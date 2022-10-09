// Variables
var startButton = document.querySelector("#start-button");
var submitButton = document.querySelector("#submit-button");
var retryButton = document.querySelector("#retry-button");
var clearButton = document.querySelector("#clear-button");
var viewScoresButton = document.querySelector("#scores-button");
var quizQuestions = document.querySelector(".quiz-questions");

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

var timer = document.querySelector("#time-remaining");
var secondsLeft = 75;





// Starting State
question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
question4.hidden = true;
question5.hidden = true;
endPage.hidden = true;
scoresPage.hidden = true;

// Event Listeners
startButton.addEventListener("click", startQuiz);
retryButton.addEventListener("click", tryAgain);
viewScoresButton.addEventListener("click", viewHighScores);

quizQuestions.addEventListener("click", function(event) {
    var answer = event.target;
    if (answer.matches(".answer")) {
        if (answer.matches(".correct")) {
            // console.log("correct");
        };
        if (answer.matches(".wrong")) {
            // console.log("wrong");
            timer.textContent -= 15;
        };

        (questionsArray[currentQuestion]).hidden = true;
        currentQuestion = currentQuestion + 1;
        if (currentQuestion < 5) {
            (questionsArray[currentQuestion]).hidden = false;
        } else {
            stopTimer();
            endPage.hidden = false;
            currentQuestion = 0;
            points.textContent = timer.textContent;
            score = timer.textContent;
        };
    }
});

// Functions
function startQuiz() {
    beginTimer();
    startPage.style.display = 'none';
    (questionsArray[currentQuestion]).hidden = false;
}

function tryAgain() {
    scoresPage.hidden = true
    startPage.style.display = 'flex'
    timer.textContent = 75;
}

function viewHighScores() {
    startPage.style.display = 'none';
    question1.hidden = true;
    question2.hidden = true;
    question3.hidden = true;
    question4.hidden = true;
    question5.hidden = true;
    endPage.hidden = true;
    scoresPage.hidden = false;
    timer.textContent = 75;
}

function beginTimer() {
    var timeRemaining = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
            
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(timeRemaining)
}














// testing (followed class tutorial - local storage todos)

var rankedScores = document.querySelector("#ranked-scores")
var scores = [];
var scoresForm = document.querySelector("#scores-form");
var initialsInput = document.querySelector("#initials-here")

var sortedCars

var points = document.querySelector("#your-score");
var score;


var quizAttempt



function renderScores() {
    // var lastGrade = JSON.parse(localStorage.getItem("sortedCars"));
    // rankedScores.innerHTML = "";
    // for (var i = 0; i < lastGrade.length; i++) {
    //     var scorez = scores[i];
    //     var li = document.createElement("li");
    //     // What is listed on the high scores page
    //     li.textContent = scorez
    //     // li.setAttribute("data-index", i);
    //     rankedScores.appendChild(li)
    // }



    rankedScores.innerHTML = "";

    // testing






    for (var i = 0; i < scores.length; i++) {
        var scorez = scores[i];

        // testing
        localStorage.getItem("quizAttempt", JSON.stringify(quizAttempt));

        var li = document.createElement("li");
        // What is listed on the high scores page
        // li.textContent = scorez

        li.textContent = quizAttempt


        rankedScores.appendChild(li)
    }
}

function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));

    // // testing
    // var storedAttempt = JSON.parse(localStorage.getItem("quizAttempt"))

    if (storedScores !== null) {
      scores = storedScores;

        // testing
        // quizAttempt = storedAttempt;


    }
    renderScores();
}
  
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
    localStorage.setItem("quizAttempt", JSON.stringify(quizAttempt));
}
 
scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    endPage.hidden = true;
    scoresPage.hidden = false;
    var scoresText = initialsInput.value.trim();
    // testing

    if (scoresText === "") {
      return;
    };
    // testing

    // var cars = [];
    
    quizAttempt = {
        "initials": scoresText,
        "pointValue": score
    };

    scores.push(quizAttempt);
    localStorage.setItem("quizAttempt", JSON.stringify(quizAttempt));
    console.log(scores)

    scores.sort((c1, c2) => (c1.pointValue < c2.pointValue) ? 1 : (c1.pointValue > c2.pointValue) ? -1 : 0);
    // console.log(sortedCars);
    console.log(scores);

    // localStorage.setItem("sortedCars", JSON.stringify(sortedCars));

















    initialsInput.value = "";
    storeScores();
    renderScores();
});
  
function clearScores() {
    scores = [];
    storeScores();
    renderScores();
}

clearButton.addEventListener("click", clearScores)

init()
