// variable list

var highScoreElement = document.getElementById('#highScore');
var timerEl = document.getElementById("timer")


var correctDisplay = document.getElementById("#correctBar");
var incorrectDisplay = document.getElementById("#wrongBar");

var startBtn = document.getElementById("startBtn");
var start = document.getElementById("start");
var recScore = document.getElementById("recordScore")
var endScore = document.getElementById("endScore")
var question = document.getElementById("question")

var answerA = document.getElementById("#btnA");
var answerB = document.getElementById("#btnB");
var answerC = document.getElementById("#btnC");
var answerD = document.getElementById("#btnD");

var startTime = 90;
var timerInterval = -1;
var endingScore = document.getElementById("endingScore")



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
function currentQuestion() {
    var q = questionList[currentQuestionIndex]

    quizQuestion.textContext = q.quizQuestion
    answerA.textContext = q.answerA
    answerB.textContext = q.answerB
    answerC.textContext = q.answerC
    answerD.textContext = q.answerD

}

var currentQuestionIndex = 0;
var lastQuestionIndex = questionList.length-1;


start.addEventListener("click", startQuiz());

function startQuiz(){
    start.style.display="none";
    quiz.style.display="block";
    currentQuestion();
    quizTimer();
    
}


    function clickAnswer(answer) {
        if (answer === questionList[currentQuestionIndex].correct){
          correctDisplay.style.display="block";
          setTimeout(function () {
            correctDisplay.style.display='none';
          }, 1000);
        }
        else {
          incorrectDisplay.style.display="block";
          setTimeout(function () {
            incorrectDisplay.style.display='none';
          }, 1000);
          timeLeft -=10
        }
        if(currentQuestionIndex < lastQuestionIndex) {
          currentQuestionIndex++;
          currentQuestion();
        }
        else {
          yourScore();
        }
      
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

function yourScore(){
    clearInterval(timerInterval);
    timerInterval = -1;
    var timeScore = timeRemaining;
    document.endingScore.innerHTML= "Your score is: " + timeScore
    timerEl.innerHTML="Timer: 0"
    quiz.style.display="none";
    recScore.style.display="block";

}


function recordScore() {
    recScore.style.display="none";
    endScore.style.display="block";
    start.style.display="none"
    quiz.style.display="none"
    var scoreText = scoreInput.value.trim();
    if (scoreText === "") {
      return;
    }
    scores.push(scoreText + ", " + endingScore.textContent);
    scoreInput.value = "";
    scoreStorage();
    showScores();
  }


var scoreInput = document.querySelector("#scoretext");
var listScore = document.querySelector("#score-list");
var scoreForm = document.querySelector("#score-form");


var scores = [];

loadScoreString();

function showScores() {
  listScore.innerHTML = "";

  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];
    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);
    listScore.appendChild(li);
  }
}

function loadScoreString() {
  var scoreStorage = JSON.parse(localStorage.getItem("scores"));
  if (scoreStorage !== null) {
    scores = scoreStorage;
  }
  showScores();
}

function scoreStorage() {
  localStorage.setItem("scores", JSON.stringify(scores));
}

scoreForm.addEventListener("submit", function(event) {
  event.preventDefault();
  return
});



function clearScores() {
  localStorage.clear();
  scores = []
  scoreStorage();
  showScores();
}


function restartQuiz() {
  location.reload();
}
