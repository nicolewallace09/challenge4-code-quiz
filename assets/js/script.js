// questions 
const questions = [
    {
        question: "Commonly used data types to NOT include:",
        answers: [
            { text: "Strings", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
            { text: "Numbers", correct: false }
        ]
    },
    {   
        question: "The condition in an if / else statement is enclosed with____.",
        answers: [
            { text: "Quotes", correct: false },
            { text: "Curly brackets", correct: true },
            { text: "Parenthesis", correct: false },
            { text: "Square brackets", correct: false }
        ]
    },   
    {   
        question: "Arrays in JavaScript can be used to store _____:",
        answers: [
            { text: "Numbers and strings", correct: false },
            { text: "Other arrays", correct: false },
            { text: "Booleans", correct: false },
            { text: "All of the above", correct: true}
        ]
    },
    {   
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: [
            { text: "Commas", correct: false },
            { text: "Curly brackets", correct: false },
            { text: "Quotes", correct: true },
            { text: "Parenthesis", correct: false }
        ]
    },
    {   
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false },
            { text: "Terminal/bash", correct: false },
            { text: "For loop", correct: false },
            { text: "Console.log", correct: true }
        ]
    }      
]

var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('start-screen');
var questionsContainer = document.getElementById('question-container');
var questionsEl = document.getElementById('question');
var answerButton = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var scoreBonus = 10;

var score = 0 
var randomQuestions 
var setQuestions = 0

startButton.addEventListener('click', startQuiz)

// start timer
var count = document.querySelector("#time");

var secondsLeft = 60;
var timer;
function timer() {
    count.textContent = secondsLeft;
    timer = setInterval(function() {
        secondsLeft--;

        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("You ran out of time!");
        }
    }, 1000)
}

// start quiz 
function startQuiz() {
    console.log("started")
    startButton.remove()
    startScreen.remove()
    //randomQuestions = questions.sort(() => Math.random() -.5)
    questionsContainer.classList.remove('hide');
    generateQuestion();
    timer();
}

// // Mini lesson on for loops for arrays
// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < arr.length; i++) {
//     // If I want the console.log to return 1 from the arr, how?
//     console.log(arr[0]);
//     // If I want to console.log 1 and then 2 and then 3, how?
//     console.log(arr[i])
// }

function generateQuestion() {
    if (setQuestions < 5) {
        nextQuestion(questions[setQuestions]);
        localStorage.setItem('mostRecentScore',score)
    } else {
        endQuiz()
    }
    // then you click on a button
    // then next question
}


function nextQuestion(question) {

    //random index but 0,1,2,3 only these 4 numbers are genrated
    /* while (array.length < 4){
        let randoNumber = Math.floor(Math.random() * 4)
        // push
        if (array.includes(randoNumber) == false) {
            console.log(!(randoNumber in array),randoNumber)
            array.push(randoNumber)
        }
    } */

    console.log(question);

    document.querySelector("#question").textContent = question.question;

    // text for buttons
    document.querySelector("#btn1").textContent = "1. " + question.answers[0].text
    document.querySelector("#btn2").textContent = "2. " + question.answers[1].text
    document.querySelector("#btn3").textContent = "3. " + question.answers[2].text
    document.querySelector("#btn4").textContent = "4. " + question.answers[3].text
    

var score = "1";
    //event listeners
    document.querySelector(".btn").addEventListener("click", function(){
        setQuestions++;
        console.log(question.answers[0].text)
        
        // if (question[1].answer[1].correct) score += 1
        if (question.answers[0].correct) {                
            incrementScore(scoreBonus);
            console.log(incrementScore)
            success()
        } else {
            failure()
        }

        generateQuestion();
    })

    /* document.querySelector(`.btn2`).addEventListener("click", function(){
            console.log(question.answers[1].text)
            
            if (question.answers[1].correct) {
                incrementScore(scoreBonus);
                console.log(incrementScore)
                success()
            } else {
                failure()
            }

            startQuiz()
           
        }) */

    /* document.querySelector(`.btn3`).addEventListener("click", function(){
            console.log(question.answers[2].text)

            if (question.answers[2].correct) {
                incrementScore(scoreBonus);
                console.log(incrementScore)
                success()
            } else {
                failure()
            }

            startQuiz()
           
        }) */

    /* document.querySelector(`.btn4`).addEventListener("click", function(){
            console.log(question.answers[3].text)
            if (question.answers[3].correct) {
                incrementScore(scoreBonus);
                console.log(incrementScore)
                success()
            } else {
                failure()
            }

            startQuiz()
        
        }) */
    
}

incrementScore = num => {
    score += num; 
}

// Create a rightOrWrong paragraph element

var answer = document.createElement("p")
document.querySelector("#choices").appendChild(answer)

// Change the text content of this paragraph element inside the success and failure functions


 function success () {
    answer.textContent = "Correct!"

}

function failure () {
    answer.textContent = "Wrong!"
}

// // high scores

// const initials = document.getElementById("intials");
// const submitButton = document.getElementById('submit')
// const finalScore = document.querySelector('finalScore');
// const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// const maxHigh = 5;

// finalScore.innerText= mostRecentScore

// initials.addEventListener("keyup", () => {
//     console.log(initials.value);
//     submitButton.disabled = !initials.value;
// });

// saveHighScore = e => {
//     console.log("clicked submit button");
//     e.preventDefault();

//     const score = {
//         score: Math.floor(Math.random() * 100),
//         name: initials.value
//     }
//     highScores.push(score);

//     highScores.sort( (a,b) => b.score - a.score);

//     highScores.splice(5);

//     localStorage.setItem('highScores', JSON.stringify(highScores));

//     window.location.assign("/");

// };




// end quiz 
function endQuiz () {
    startButton.remove()
    startScreen.remove()
    questionsContainer.remove()
    endScreen.classList.remove('hide');
    clearInterval(timer);
}