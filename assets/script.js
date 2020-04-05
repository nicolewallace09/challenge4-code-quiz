// start quiz
function startQuiz() {
    counterTime();
    timer = 60 ;
    
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

//startQuiz();

}