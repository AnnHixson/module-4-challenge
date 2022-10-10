// Variables
// Variables linking to HTML locations
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
var yourScore = document.querySelector("#your-score");
var scoresForm = document.querySelector("#scores-form");
var initialsInput = document.querySelector("#initials-here");
var submitButton = document.querySelector("#submit-button");
var answerWas = document.querySelector("#answer-was");
var scoresPage = document.querySelector(".high-scores");
var rankedScores = document.querySelector("#ranked-scores");
var retryButton = document.querySelector("#retry-button");
var clearButton = document.querySelector("#clear-button");
// Variables for running through the quiz questions
var questionsArray = [question1, question2, question3, question4, question5];
var currentQuestion = 0;
// Variables for timer functionality
var time;
var timeCount;
var allDone = false;
// Variables for scoreboard functionality
var scores = [];
var score;

// Starting State of page visibility
question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
question4.hidden = true;
question5.hidden = true;
endPage.hidden = true;
scoresPage.hidden = true;

// Click to begin the quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    // Hide starting page
    startPage.style.display = 'none';
    // Show questions
    (questionsArray[currentQuestion]).hidden = false;
    // Disable the View High Scores button
    viewScoresButton.disabled = true;
    // Start the timer
    startTimer();
}

// The timer
// Timer starts
function startTimer() {
    // Time limit set
    timeCount = 75;
    // Timer countdown
    time = setInterval(function() {
        // Countdown
        timeCount--;
        // Display countdown
        timer.textContent = timeCount;
        // If all of the questions are answered before the timer hits 0
        if (timeCount > 0 && allDone === true) {
            // Stop the timer
            clearInterval(time);
            // Display the remaining time as your score
            yourScore.textContent = timer.textContent;
            // Part of saving the remaining time as your score for the scoreboard
            score = timer.textContent;
            // Reset quiz completion
            allDone = false;
        };
        // If time runs out before all questions are answered
        if (timeCount <= 0) {
            // Stop the timer
            clearInterval(time);
            // Displays the timer as being at 0. In case of it hitting a negative number
            timer.textContent = 0;
            // Reset quiz completion. In case of rapidly clicking to end causing time to run out
            allDone = false;
            // Display message that time ran out
            clickNext = true;
            message("Time's up!");
            // Hide question page
            (questionsArray[currentQuestion]).hidden = true;
            // Show end page
            endPage.hidden = false;
            // Reset the question array index
            currentQuestion = 0;
            // Display the remaining time as your score
            yourScore.textContent = timer.textContent;
            // Part of saving the remaining time as your score for the scoreboard
            score = timer.textContent;
            // Enable View High Scores button
            viewScoresButton.disabled = false;
        };
    }, 1000);
}

// Click to answer questions and run through the quiz
quizQuestions.addEventListener("click", function(event) {
    var answer = event.target;
    if (answer.matches(".answer")) {
        // Answer correctly
        if (answer.matches(".correct")) {
            // Display message that the answer was correct
            clickNext = true;
            message("Correct!");
        };
        // Answer incorrectly
        if (answer.matches(".wrong")) {
            // Display message that the answer was wrong
            clickNext = true;
            message("Wrong!");
            // Deduct 15 seconds from remaining time
            timeCount -= 15;
        };
        // Hide question answered
        (questionsArray[currentQuestion]).hidden = true;
        // Move from the current question to the next in the array
        currentQuestion = currentQuestion + 1;
        // Check if the new index for the current question is under 5 and, thus, in the array 
        if (currentQuestion < 5) {
            // Show the next question in the array
            (questionsArray[currentQuestion]).hidden = false;
        // If the new index number is 5 or higher, we are at the end of the array of questions, and the quiz is over
        } else {
            // The quiz is over. This is part of stopping the timer
            allDone = true;
            // Show the end page
            endPage.hidden = false;
            // Reset the question array index
            currentQuestion = 0;
        };
    }
});

// Disable the Submit button if the initialsInput field is blank
if (initialsInput.value === "") {
    submitButton.disabled = true;
}
// Listen for a change in the initialsInput field
initialsInput.addEventListener('change', submitEnabler) 
function submitEnabler() {
    // Disable the Submit button if the initialsInput field is blank
    if (initialsInput.value === "") {
        submitButton.disabled = true;
    };
    // Enable the Submit button if the initialsInput field is not blank
    if (initialsInput.value !== "") {
        submitButton.disabled = false;
    };
}

// Click to submit initials and score
scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Hide end page
    endPage.hidden = true;
    // Enable View High Scores button
    viewScoresButton.disabled = false;
    // Show high scores page
    scoresPage.hidden = false;
    // Part of storing user's initials
    var scoresText = initialsInput.value.trim();
    // Add user's initials and score to the scores array as an object
    var quizAttempt = {
        "initials": scoresText,
        "pointValue": score
    };
    scores.push(quizAttempt);
    // Sort scores array by score values
    scores.sort((c1, c2) => (c1.pointValue < c2.pointValue) ? 1 : (c1.pointValue > c2.pointValue) ? -1 : 0);
    // Clear initialsInput field
    initialsInput.value = "";
    // Save scores array
    storeScores();
    // Display scores array in a list with each score as a separate list item
    renderScores();
});
// Load scores list from local storage on page load
function init() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      scores = storedScores;
    }
    renderScores();
}
// Save scores array
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
// Display scores array in a list with each score as a separate list item
function renderScores() {
    // Empty the current contents of the scoreboard
    rankedScores.innerHTML = "";
    // For each item in scores array...
    for (var i = 0; i < scores.length; i++) {
        var scorez = scores[i];
        // Display as "initials - score"
        scorez.textContent = scores[i].initials + " - " + scores[i].pointValue
        // Create list items
        var li = document.createElement("li");
        // List items show "initials - score"
        li.textContent = scorez.textContent
        // Add list items to the scoreboard ordered list
        rankedScores.appendChild(li)
    }
}

// Click to clear scores
clearButton.addEventListener("click", clearScores)

function clearScores() {
    // Reset scores array to empty
    scores = [];
    // Save empty scores array
    storeScores();
    // Display empty scores array
    renderScores();
}

// Click to retake quiz
retryButton.addEventListener("click", tryAgain);

function tryAgain() {
    // Hide high scores page
    scoresPage.hidden = true
    // Show start page
    startPage.style.display = 'flex'
    // Reset timer display
    timer.textContent = 75;
}

// Click to view high scores
viewScoresButton.addEventListener("click", viewHighScores);

function viewHighScores() {
    // Set only the high scores page as visible
    startPage.style.display = 'none';
    answerWas.style.display = "none";
    question1.hidden = true;
    question2.hidden = true;
    question3.hidden = true;
    question4.hidden = true;
    question5.hidden = true;
    endPage.hidden = true;
    scoresPage.hidden = false;
    // Reset timer display
    timer.textContent = 75;
}

// Variable for length of message display time
var clickNext = false;

// Display message functionality
function message(x) {
    var messageTime;
    // Length of display time set
    var messageTimeCount = 3;
    // Display message
    answerWas.style.display = "flex";
    answerWas.textContent = x;
    // Display time countdown
    messageTime = setInterval(function() {
        // Countdown
        messageTimeCount--;
        // If the next question is answered before the timer hits 0
        if (messageTimeCount > 0 && clickNext === true) {
            // Stop the message timer
            clearInterval(messageTime);
            // Reset message timer
            messageTimeCount = 3;
            // Reset variable state
            clickNext = false;
            // Hide message
            answerWas.style.display = "none";
            };
        // If time runs out before next question is answered
        if (messageTimeCount <= 0) {
            // Stop the timer
            clearInterval(messageTime);
            // Reset message timer
            messageTimeCount = 3;
            // Reset variable state
            clickNext = false;
            // Hide message
            answerWas.style.display = "none";
        };
    }, 1000);
}

// Call the init function to pull scores from local storage on page load
init()
