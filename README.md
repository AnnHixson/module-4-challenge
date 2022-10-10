# module-4-challenge

## Description
The purpose of Module 4 Challenge was to use our newly learned knowledge of web APIs to create a quiz to test the user's knowledge of JavaScript coding. Additionally, we had to use that knowledge to create a way for the user to store their scores on a scoreboard that ranks the scores from best to worst.

## Installation
N/A

## Usage
When the user clicks on the "Start Quiz" button, the timer begins counting down the seconds, and the first quiz question appears. 

When the user clicks on their answer to the question, the next question will appear, there will be a message at the bottom that says whether they got the question "Correct!" or "Wrong!", and, if they answer incorrectly, the timer will decrease by 15 seconds.

When the user answers the last question or the timer runs out before the user answers all of the questions, the end page will appear where they submit their initials to save their score to the high scores.

When the user clicks to submit their initials and score, the scoreboard will appear with the scores in order from best to worst. Note: the "Submit" button is disabled when the initials field is blank.

When the user clicks on the "Try Again" button, the starting page will appear and they can begin again.

When the user clicks on the "Clear High Scores" button, all of the saved scores will be removed.

When the user clicks on the "View High Scores" button from the starting page, the high scores page will appear. This button is disabled during the remainder of the time.

The starting page:
![quiz start page](./assets/module-4-challenge%20screenshot%203.png)

The question pages:
![quiz questions](./assets/module-4-challenge%20screenshot%204.png)

The end page for score submission:
![quiz end page](./assets/module-4-challenge%20screenshot%201.png)

The high scores page:
![quiz high scores page](./assets/module-4-challenge%20screenshot%202.png)

This application can be found at: [https://annhixson.github.io/module-4-challenge/](https://annhixson.github.io/module-4-challenge/)

## Credits
- README template is from [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

- I followed a tutorial by Ondrej Polesny on how to put objects in an array and how to sort an array located at [https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)

- I followed this course's tutorials on Local Storage Todos and Timer Intervals

- The AskBCS Learning Assistant baynonmichael helped me to get the Submit button to be disabled when the form's input field is blank and be enabled when the field is not blank

- The questions in the quiz are the ones from the demo in the instructions of this challenge

## License
N/A