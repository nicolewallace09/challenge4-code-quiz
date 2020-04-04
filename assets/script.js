console.dir(window.document);

const startButton = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container")

startButton.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    console.log("Started Quiz");
    startButton.classList.add('hide');
    questionEl.classList.remove('hide');
    nextQuestion();
}
   
// next question
function nextQuestion() {
    resetQuestion()
    for(var i=0; i < questions.Length; i++){
    var response = prompt(questions[i].prompt);

        if(response == questions[i].answers){
            score++;
            alert("Correct!");
        } else {
            score--;
            alert("Wrong!");
       }
    } alert ("You got " + score); 

}

function resetQuestion () {
    
}

// when an answer is selcted 
function selectAnswer () {

}

const questions = [
    {
        question: "Commonly used data types to NOT include",
        answers: { 
            1.: "Strings",
            2.: "Booleans",
            3.: "Alerts",
            4.: "Numbers"

        },
    correctAnswer: "Booleans"
    }, 
    {
        question: "The condition in an if / else statement is enclosed with____.",
        answers: {
            1.: "Quotes",
            2.: "Curly Brackets",
            3.: "Parenthesis",
            4.: "Square Brackets"
        },
    correctAnswer: "Curly Brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store _____:",
        answers: {
            1.: "Numbers and strings",
            2.: "Other arrays",
            3.: "Booleans",
            4.: "All of the above" 
        },
    correctAnswer: "All of the above"
    },
    { 
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
            1.: "Commas",
            2.: "Curly Brackets",
            3.: "Quotes",
            4.: "Parenthesis", 
        },
    correctAnswer: "Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1.: "JavaScript",
            2.: "Terminal/bash",
            3.: "For loops",
            4.: "Console.log"
        },
    correctAnswer: "Console.log"
    }   
];

    // when button is clicked 
  //  submitButton.onclick = function() {
  //      showResults(questions, quizContainer, resultsContainer);
 //   }

//var counter = 60
//var countdown = function(startQuiz) {
    //console.log(counter);
   // counter--;
    //if(counter === 0){
      //  return;
       // function(showResults)
            
    // }

// when quiz is submitted 
//submitButton.addEventListener("submit", showResults);

// view highscores will need .textContent 