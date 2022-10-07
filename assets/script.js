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
// var secondsLeft = 75;

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
// submitButton.addEventListener("click", submitInitials);
retryButton.addEventListener("click", tryAgain);
// clearButton.addEventListener("click", clearScores);
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
            // stopTimer();
            endPage.hidden = false;
            currentQuestion = 0;
        };
    }
});

// Functions
function startQuiz() {
    // beginTimer();
    startPage.style.display = 'none';
    (questionsArray[currentQuestion]).hidden = false;
}



function tryAgain() {
    scoresPage.hidden = true
    startPage.style.display = 'flex'
    timer.textContent = 75;
}

// function clearScores() {

// }

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

// function beginTimer() {
//     var timeRemaining = setInterval(function() {
//         secondsLeft--;
//         timer.textContent = secondsLeft;
//         if(secondsLeft === 0) {
//             clearInterval(timeRemaining);
//         }
//     }, 1000);
// };

// function stopTimer() {

// }



// testing
var rankedScores = document.querySelector("#ranked-scores")
var scores = [];
var scoresForm = document.querySelector("#scores-form");
var initialsInput = document.querySelector("#initials-here")

function renderScores() {
    rankedScores.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var score = scores[i];
        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);
        rankedScores.appendChild(li)
    }
}
// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render todos to the DOM
    renderScores();
  }
  
  function storeScores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("scores", JSON.stringify(scores));
  }
  
  // Add submit event to form
  scoresForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // function submitInitials(event) {
    //     event.preventDefault();
        endPage.hidden = true;
        scoresPage.hidden = false;
        
    // }
    var scoresText = initialsInput.value.trim();
  
    // Return from function early if submitted todoText is blank
    if (scoresText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    scores.push(scoresText);
    initialsInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderScores();
  });
  

//   TESTING


//   // Add click event to todoList element
    clearButton.addEventListener("click", function(event) {
//   todoList.addEventListener("click", function(event) {
        var element = event.target;
  
        // Checks if element is a button
        if (element.matches("clear-button") === true) {
        // Get its data-index value and remove the todo element from the list
        var index = element.parentElement.getAttribute("data-index");
        scores = [];
  
      // Store updated todos in localStorage, re-render the list
        storeScores();
        renderScores();
        }
    });
  
  // Calls init to retrieve data and render it to the page on load
  init()
