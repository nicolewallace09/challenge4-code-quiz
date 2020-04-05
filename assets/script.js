const startButton = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionsContainer = document.getElementById('question-container');
const questionsEl = document.getElementById('question')
const answerButton = document.getElementById('choices')

let randomQuestions, setQuestions

startButton.addEventListener('click', startQuiz)

// start quiz
function startQuiz() {
    resetAnswers ();
    console.log("started")
    //counterTime();
    //timer = 60 ;

    startButton.classList.add('hide');
    startScreen.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() -.5)
    setQuestions = 0 
    questionsContainer.classList.remove('hide');
    nextQuestion();
}

function nextQuestion() {
    newQuestion (randomQuestions[setQuestions]);

}

function newQuestion(question) {
    questionsEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn')
        
        // if answer is correct 
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        
    button.addEventListener("click", chooseAnswer)
    answerButton.appendChild(button)
    })
}

function resetAnswers() {
    while (answerButton.firstChild) {
        answerButton.removeChild (answerButton.firstChild);
    }
}

function chooseAnswer(e) {

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
}    
]