var startButton = document.querySelector(".start-button");
var highScore = document.querySelector(".high-score");

var choicesEl = document.querySelector('.choices');
var resultsEl = document.querySelector(".results");
var questionsEl = document.querySelector(".questions");
var correct;

var timerElement = document.querySelector(".timer-count");   //Timer variables
var timer;
var timeCount;

function startGame() {
    timeCount = 10;
    startTimer();
    question1();
};

function question1() {
    
};

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

startButton.addEventListener("click", startGame);