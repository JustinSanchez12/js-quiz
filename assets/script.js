var startButton = document.querySelector(".start-button");
var highScore = document.querySelector(".high-score");

var resultsEl = document.querySelector(".results");
var questionEl = document.querySelector('.question');
var choicesContainer = document.querySelector(".choices-container");


var timerElement = document.querySelector(".timer-count");   //Timer variables
var timer;
var timeCount;

var question = [
    {
        question: "What is 2 + 2?",
        choices: ["1", "2","3","4"],
        answer: 3
    }
];

choicesContainer.style.display = "none";
startButton.style.display = "block";

startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    choicesContainer.style.display = "block";

    displayQuestion(question[0]);
    timeCount =10;
    startTimer();
});

function displayQuestion(questionObj) {
    var choicesContainer = document.querySelector('.choices-container');

    choicesContainer.innerHTML = "";

    questionEl.textContent = questionObj.question;

    for (let i =0; i < questionObj.choices.length; i++) {
        var choices = questionObj.choices[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choices;
        choicesContainer.appendChild(choiceBtn);
    }
}

//Timer starts when user presses the start button to start the game
function startTimer() {
    timer = setInterval(function() { //sets time
        timeCount--; //Decreases time by 1
        timerElement.textContent = timeCount;
        if(timeCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
};


