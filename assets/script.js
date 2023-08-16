//Variables used in Javascript
var startButton = document.querySelector(".start-button");
var resultsButton = document.querySelector(".results-button");
var highScore = document.querySelector(".high-score");

var resultsEl = document.querySelector(".results");
var resultsContainer = document.querySelector(".results-container");
var questionEl = document.querySelector('.question');
var choicesContainer = document.querySelector(".choices-container");

 //Timer variables
var timerElement = document.querySelector(".timer-count");  
var timer;
var timeCount;
// To keep track of the current question index
var currentQuestionIndex = 0; 

var question = [ 
    {
        question: "What is 2 + 2?",
        choices: ["1", "2","3","4"],
        answer: 3
    },
    {
        question: "What is the square root of 64",
        choices: ["8","12","5"],
        answer: 0
    }
];

choicesContainer.style.display = "none";
startButton.style.display = "block";

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    choicesContainer.style.display = "block";

    displayQuestion(question[0]);
    timeCount = 10;
    startTimer();
});

resultsButton.addEventListener("click", function(){
    resultsButton.style.display = "none";
    choicesContainer.style.display = "block";

    displayResults(question[currentQuestionIndex].answer);
});

function displayQuestion(questionObj) {
    var choicesContainer = document.querySelector('.choices-container');

    choicesContainer.innerHTML = "";
    questionEl.textContent = questionObj.question;

    for (let i = 0; i < questionObj.choices.length; i++) {
        let choice = questionObj.choices[i];
        let choiceBtn = document.createElement("button");
        choiceBtn.textContent = choice;
        choicesContainer.appendChild(choiceBtn);
        choiceBtn.addEventListener("click", function() {
            if (i === questionObj.answer) {
                alert("Correct!");
                // Move to the next question
                currentQuestionIndex++;
                if (currentQuestionIndex < question.length) {
                    displayQuestion(question[currentQuestionIndex]);
                    timeCount = 10;
                } else {
                    // All questions answered
                    alert("Quiz completed!");
                }
            } else {
                alert("Incorrect!");
            }
            displayResults(choice);
        });
    }
}

function displayResults(answer) {
    resultsContainer.style.display = "block";
    resultsEl.textContent = "Your Answer: " + answer;
}

function startTimer() {
    timer = setInterval(function() {
        timeCount--;
        timerElement.textContent = timeCount;
        if (timeCount <= 0) {
            clearInterval(timer);
            alert("Time's Up");
            // Move to the next question
            currentQuestionIndex++;
            if (currentQuestionIndex < question.length) {
                displayQuestion(question[currentQuestionIndex]);
                timeCount = 10;
            } else {
                // All questions answered
                alert("Quiz completed!");
            }
        }
    }, 1000);
}
