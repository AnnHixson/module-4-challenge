// For temporary orginizational purposes

// Variables

// Linking variables to their locations in the HTML
var viewScoresButton = document.querySelector("#scores-button");
var timer = document.querySelector("#time-remaining");
var startPage = document.querySelector(".start-page");
var startButton = document.querySelector("#start-button");
var quizQuestions = document.querySelector(".quiz-questions");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
var endPage = document.querySelector(".end-page");
// var points = document.querySelector("#your-score");
var yourScore = document.querySelector("#your-score");
var scoresForm = document.querySelector("#scores-form");
var initialsInput = document.querySelector("#initials-here");
var submitButton = document.querySelector("#submit-button");
var scoresPage = document.querySelector(".high-scores");
var rankedScores = document.querySelector("#ranked-scores")
var retryButton = document.querySelector("#retry-button");
var clearButton = document.querySelector("#clear-button");

// Itterate through question pages
var questionsArray = [question1, question2, question3, question4, question5];
var currentQuestion = 0;

// Timer functionality
var secondsLeft = 75;

// Scoreboard functionality
var scores = [];



// Variables used in testing
var score; // = timer.textContent AKA time remaining
var sortedCars;
var quizAttempt;



// Starting State
question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
question4.hidden = true;
question5.hidden = true;
endPage.hidden = true;
scoresPage.hidden = true;

// Click to begin the quiz functionality
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startPage.style.display = 'none';
    (questionsArray[currentQuestion]).hidden = false;
    // NEED TO ADD: Start the timer
}

// Click to run through the quiz
quizQuestions.addEventListener("click", function(event) {
    var answer = event.target;
    if (answer.matches(".answer")) {
        if (answer.matches(".correct")) {
            // NEED TO ADD: Notification of correct answer
        };
        if (answer.matches(".wrong")) {
            // NEED TO ADD: Notification of wrong answer
            // NEED TO ADD: Time remaining reduces by 15

            // testing - some success
            timer.textContent -= 15;
        };
        (questionsArray[currentQuestion]).hidden = true;
        currentQuestion = currentQuestion + 1;
        if (currentQuestion < 5) {
            (questionsArray[currentQuestion]).hidden = false;
        } else {
            // NEED TO ADD: Stop the timer

            // testing
            // stopTimer();

            endPage.hidden = false;
            currentQuestion = 0;

            // testing - some success
            yourScore.textContent = timer.textContent;
            score = timer.textContent;
        };
    }
});

// Click to submit initials and score

// testing
// when submit button is clicked
scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // page display
    endPage.hidden = true;
    scoresPage.hidden = false;
    // enter initials
    var scoresText = initialsInput.value.trim();
    if (scoresText === "") {
    //   NEED TO ADD: Alert that field is blank
        return;
    };


    // testing
    // goals:
    // add initials and score to scores array
    quizAttempt = {
        "initials": scoresText,
        "pointValue": score
    };
    scores.push(quizAttempt);
    // sort scores array by score value
    scores.sort((c1, c2) => (c1.pointValue < c2.pointValue) ? 1 : (c1.pointValue > c2.pointValue) ? -1 : 0);
    // clear initial input location
    initialsInput.value = "";
    // save scores array
    storeScores();
    // display scores array in a list with each score as a separate list item
    renderScores();
});
// load scores list from storage on page load
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      scores = storedScores;
    }
    renderScores();
}
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
    // testing
    // localStorage.setItem("quizAttempt", JSON.stringify(quizAttempt));
}
function renderScores() {
    // empty current contents
    rankedScores.innerHTML = "";
    // for each item in scores array
    for (var i = 0; i < scores.length; i++) {
        var scorez = scores[i];
        var li = document.createElement("li");
        // What is listed on the high scores page
        li.textContent = scorez
        rankedScores.appendChild(li)
    }
}


// Click to clear scores
clearButton.addEventListener("click", clearScores)

function clearScores() {
    scores = [];
    storeScores();
    renderScores();
}

// Click to retake quiz
retryButton.addEventListener("click", tryAgain);

function tryAgain() {
    scoresPage.hidden = true
    startPage.style.display = 'flex'
    timer.textContent = 75;
}

// Click to view high scores
viewScoresButton.addEventListener("click", viewHighScores);

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


// Timer functionality

// testing
// function beginTimer() {
//     var timeRemaining = setInterval(function() {
//         secondsLeft--;
//         timer.textContent = secondsLeft;
//         if(secondsLeft === 0) {
    // clearInterval(timeRemaining)
//         }
//     }, 1000);
// };
// function stopTimer() {
//     clearInterval(timeRemaining)
// }


// Important for score storage

// testing
init()
