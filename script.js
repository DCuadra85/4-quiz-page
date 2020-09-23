// variable list

var highScoreElement = document.getElementById('#highScore');
var start = ocument.getElementById(""); 

var startTime = 90;
var timerInterval = -1;

//define quiz q/a
// var questionList = [
//     {
//         quizQuestion: "I need a question?"
//         answerA: "a1"
//         answerB: "a2"
//         answerC: "a3"
//         answerD: "a4"
//         correctChoice: "B"
//     },
//     {
//         quizQuestion: "another question"
//         answerA: "a1"
//         answerB: "a2"
//         answerC: "a3"
//         answerD: "a4"
//         correctChoice: "D"
//     }
// ];


// quiz sequence
function displayQuestion() {
    var question = currentQuestion[questionIndex]

    question.textContext = question.quizQuestion
    answerA.textContext = question.answerA
    answerB.textContext = question.answerB
    answerC.textContext = question.answerC
    answerD.textContext = question.answerD

}



function quizTimer(){;
    var timerInterval = setInterval(function(){
        for (i = 0; i < timeRemaining; i++) {
            if(timeRemaining <= 0){
                clearInterval(timerInterval);
                timeElement.textContext = "Time: 0";
            }
            else{
                timeElement.textContext = "Time: " + timeRemaining
            }
            timeRemaining-=1;
        }
    }, 1000);
}

function yourScore(){
    clearInterval(timerInterval);
    timerInterval = -1;
    var timeScore = timeRemaining;
    
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