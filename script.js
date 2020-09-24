// variable list

var highScoreElement = document.getElementById('#highScore');
var startBtn = document.getElementById("btnStart");
var start = document.getElementById("#startpage")
var startTime = 90;
var timerInterval = -1;

var correctDisplay = document.getElementById("#correctBar")
var incorrectDisplay = document.getElementById("#wrongBar")

var answerA = document.getElementById("#btnA")
var answerB = document.getElementById("#btnB")
var answerC = document.getElementById("#btnC")
var answerD = document.getElementById("#btnD")

var currentQuestionIndex = 0;
var lastQuestionIndex = questionList.length-1;

//define quiz q/a
var questionList = [
    {
        quizQuestion: "Who becomes king in Final Fantasy Tactics?",
        answerA: "Ramza",
        answerB: "Delita",
        answerC: "Agrias",
        answerD: "Orlandeau",
        correctChoice: "B",
    },
    {
        quizQuestion: "The story of Final Fantasy Tactics is based on what?",
        answerA: "Ivalice",
        answerB: "The Zodiac Stones",
        answerC: "The War of Lions",
        answerD: "The Zodiac Braves",
        correctChoice: "D",
    }
];



// quiz sequence
function showCurrentQuestion() {
    var question = currentQuestion[currentQuestionIndex]

    quizQuestion.textContext = question.quizQuestion
    answerA.textContext = question.answerA
    answerB.textContext = question.answerB
    answerC.textContext = question.answerC
    answerD.textContext = question.answerD

}



startBtn.addEventListener("click", quizStart());

function quizStart(){
    startBtn.style.display="none";
    quiz.style.display="block";
    showCurrentQuestion();
    quizTimer();
}

function quizTimer(){;
    var timerInterval = setInterval(function(){
        for (i = 0; i < timeRemaining; i++) {
            if(timeRemaining <= 0){
                clearInterval(timerInterval);
                timeElement.textContext = "Time: 0";
            }
            else{
                timeElement.textContext = "Time: " + timeRemaining;
            }
            timeRemaining-=1;
        }
    }, 1000);
}


    function clickAnswer(answer) {
        if (answer === questions[currentQuestionIndex].correct){
          correctDisplay.style.display="block";
          setTimeout(function () {
            correctDisplay.style.display='none';
          }, 1000);
        }
        else {
          incorrectDisplay.style.display="block";
          setTimeout(function () {
            noBar.style.display='none';
          }, 1000);
          timeLeft -=10
        }
        if(currentQuestionIndex < lastQuestionIndex) {
          currentQuestionIndex++;
          showCurrentQuestion();
        }
        else {
          yourScore();
        }
      
      }


function yourScore(){
    clearInterval(timerInterval);
    timerInterval = -1;
    var timeScore = timeRemaining;
    document.finalScore.innerHTML= "Your final score is: " + endScore
    timerEl.innerHTML="Timer: 0"
    quiz.style.display="none";
    recScore.style.display="block";

}

// function storeScore(){

// }

// var questionPromptContainer = $("#questionPrompt")
// ​
// var questionChoicesContainer = $("#questionChoices")
// ​
// var questions = [
//     {
//         question: "Is the sky blue?",
//         choices: ["Yes", "No"],
//         answerIndex: 0
//     }, {}, {}
// ]
// ​
// var currentQuestionIndex = 0
// ​
// function handleStartingGame() {
//     // Start timer
    
//     // Hide start page
    
//     // Show main game page
    
//     // Show current question
//     showCurrentQuestion()
// }
// ​
// function handleEndingGame() {
//     // Hide main game view
    
//     // Show high score input view
// }
// ​
// function showCurrentQuestion() {
//     var currentQ = questions[currentQuestionIndex]
    
//     if(currentQ == null) {
//         handleEndingGame()
//         return;
//     }
    
//     questionPromptContainer.empty()
    
//     questionPromptContainer.text(currentQ.question)
    
//     questionChoicesContainer.empty()
    
//     currentQ.choices.forEach(function(choice) {
//         questionChoicesContainer.append($("<button>" + choice + "</button>"))
//     })
// }
// ​
// $(".answer-button").on('click', function() {
//     // Check if the answer is correct or incorrect
    
//     // Show the user somehow (CSS classes)
    
//     // Increment Question Index
//     currentQuestionIndex++
 
//     // Show user the current question
//     showCurrentQuestion()