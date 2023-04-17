//Variables used in Javascript

var startButton = document.querySelector(".start-button");
var resultsButton = document.querySelector(".results-button");
var highScore = document.querySelector(".high-score");

var resultsEl = document.querySelector(".results");
var resultsContainer = document.querySelector(".results-container");
var questionEl = document.querySelector('.question');
var choicesContainer = document.querySelector(".choices-container");

var question2 = document.querySelector('.questtion');


var timerElement = document.querySelector(".timer-count");   //Timer variables
var timer;
var timeCount;

//This will be where the questions are stored and will just be called by a function
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

//This will first display the start button and hide the questions
choicesContainer.style.display = "none";
startButton.style.display = "block";

//When the user clicks on the start button, the first question will appear
startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    choicesContainer.style.display = "block";

    displayQuestion(question[0]);
    timeCount =10;
    startTimer();
});

//This should have had displayed the correct answer for the first question
resultsButton.addEventListener("click", function(){
    resultsButton.style.display = "none";
    choicesContainer.style.display = "block";

    displayResults(question.answer[0]);
});

//Once the first question was answered this would've brought the user to the next question. Here displayQuestions comes up again but it will call the second question from the
//variable question
question2.addEventListener("click", function(){
    choicesContainer.style.display = "block";

    displayQuestion(question[1]);
    timeCount = 10;
    startTimer();
})


//Here is the function for displaying the question
function displayQuestion(questionObj) {
    var choicesContainer = document.querySelector('.choices-container');

    choicesContainer.innerHTML = "";
    var choices;
    questionEl.textContent = questionObj.question; //Displays questions
    

    for (let i =0; i < questionObj.choices.length; i++) { //displays the choices and assigns them to buttons
        choices = questionObj.choices[i];
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = choices;
        choicesContainer.appendChild(choiceBtn);
        choiceBtn.addEventListener("click", function(){ //this will compare the choices selected to the answers and will have a message pop up.
            if (i === questionObj.answer) {
                alert ("Correct!");
            }
            else {
                alert ("Incorrect!");
            }
        });
    } 
}

//This should have displayed the answer
function displayResults(answer) {
    resultsContainer.style.display = "block";
    resultsEl.textContent = "Your Answer: " + answer;
}


//Timer starts when user presses the start button to start the game
function startTimer() {
    timer = setInterval(function() { //sets time
        timeCount--; //Decreases time by 1
        timerElement.textContent = timeCount;
        if(timeCount <= 0) {
            clearInterval(timer);
            alert("Time's Up");
        }
    }, 1000);
};


