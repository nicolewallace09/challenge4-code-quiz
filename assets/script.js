start-btn.addEventListener('click', startQuiz)

// start quiz
function startQuiz(questions) {
    counterTime();
    timer = 60 ;

    start-btn.classList.add('hide');
    questions.classList.remove('hide');
    
    // Loop questions
    for(var i=0; i < questions.Length; i++){
        var answer = confirm(questions[i].q);

    // Correct answer
    if (
        (answer === true && questions[i].a === 't') ||
        (answer === false && questions[i].a === 'f')
    ){
        // Increase score
        score++;
        alert('Correct!');
     } else {
         alert('Wrong!');
     }
     
// Show score 
alert('You got ' + score + '/' + questions.length);  

}

// questions 
var questions = [
    new Question("Commonly used data types to NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"],"Alerts"),
    new Question("Commonly used data types to NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"],"Alerts"),
    new Question("Commonly used data types to NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"],"Alerts"),
    new Question("Commonly used data types to NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"],"Alerts"),
    new Question("Commonly used data types to NOT include:", ["Strings", "Booleans", "Alerts", "Numbers"],"Alerts"),
    
];


// create new 
var startQuiz = new startQuiz(questions);

// run results 
results();

}