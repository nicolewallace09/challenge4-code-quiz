const startButton = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionsContainer = document.getElementById('question-container');
const questionsEl = document.getElementById('question')
const answerButton = document.getElementById('choices')

let randomQuestions, setQuestions

var score = 0;

startButton.addEventListener('click', startQuiz)

// start quiz
 var t = 75;
 var counter = 0;
 console.log(t);
 t--;

function startQuiz() {
    resetAnswers ();
    console.log("started")

    startButton.classList.add('hide');
    startScreen.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() -.5)
    setQuestions = 0 
    questionsContainer.classList.remove('hide');
    generateQuestion();
}

function generateQuestion() {
    nextQuestion (randomQuestions[setQuestions]);
    setQuestions++

}

function nextQuestion(question) {
        questionsEl.innerText = question.question;
        question.answers.map((answer,index) => {
        console.log(answer,index)
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
        //var button = document.querySelector(`.btn${index +1}`);
        //button.innerHTML= answer.text;

        //document.querySelector(".btn").addEventListener("click", chooseAnswer)
        button.addEventListener("click", chooseAnswer(index))
        answerButton.appendChild(button)

    //return;
    
   })
}

function buttonOne () {
    console.log(randomQuestions, "hello")
}


function resetAnswers() {
    while (answerButton.firstChild) {
        answerButton.removeChild (answerButton.firstChild);
    }
}

function chooseAnswer(index) {
    console.log('choose answer', index)
     // if answer is correct 
     if (answerButton === true) {
        console.log()
     }
}

    
// questions 
const questions = [
    {
    question: "Commonly used data types to NOT include:",
    answers: [
        { text: "1. Strings", correct: false },
        { text: "2. Booleans", correct: false },
        { text: "3. Alerts", correct: true },
        { text: "4. Numbers", correct: false }
    ]
    },
    {   
    question: "The condition in an if / else statement is enclosed with____.",
    answers: [
        { text: "1. Quotes", correct: false },
        { text: "2. Curly brackets", correct: true },
        { text: "3. Parenthesis", correct: false },
        { text: "4. Square brackets", correct: false }
    ]
    },   
    {   
    question: "Arrays in JavaScript can be used to store _____:",
    answers: [
        { text: "1. Numbers and strings", correct: false },
        { text: "2. Other arrays", correct: false },
        { text: "3. Booleans", correct: true },
        { text: "4. All of the above", correct: false }
    ]
    },
    {   
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answers: [
        { text: "1. Commas", correct: false },
        { text: "2. Curly brackets", correct: false },
        { text: "3. Quotes", correct: true },
        { text: "4. Parenthesis", correct: false }
    ]
    },
    {   
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        { text: "1. JavaScript", correct: false },
        { text: "2. Terminal/bash", correct: false },
        { text: "3. For loop", correct: false },
        { text: "4. Console.log", correct: true }
    ]
    }     
    
]

