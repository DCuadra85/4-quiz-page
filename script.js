var questionPromptContainer = $("#questionPrompt")
​
var questionChoicesContainer = $("#questionChoices")
​
var questions = [
    {
        question: "Is the sky blue?",
        choices: ["Yes", "No"],
        answerIndex: 0
    }, {}, {}
]
​
var currentQuestionIndex = 0
​
function handleStartingGame() {
    // Start timer
    
    // Hide start page
    
    // Show main game page
    
    // Show current question
    showCurrentQuestion()
}
​
function handleEndingGame() {
    // Hide main game view
    
    // Show high score input view
}
​
function showCurrentQuestion() {
    var currentQ = questions[currentQuestionIndex]
    
    if(currentQ == null) {
        handleEndingGame()
        return;
    }
    
    questionPromptContainer.empty()
    
    questionPromptContainer.text(currentQ.question)
    
    questionChoicesContainer.empty()
    
    currentQ.choices.forEach(function(choice) {
        questionChoicesContainer.append($("<button>" + choice + "</button>"))
    })
}
​
$(".answer-button").on('click', function() {
    // Check if the answer is correct or incorrect
    
    // Show the user somehow (CSS classes)
    
    // Increment Question Index
    currentQuestionIndex++
 
    // Show user the current question
    showCurrentQuestion()