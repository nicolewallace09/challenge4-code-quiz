const backButton = document.getElementById('back-btn'); 

backButton.addEventListener('click', startQuiz)



const highScoreList = document.getElementById("#highScoresList");
const highScores = JSON.parse(localStorage.getItem("#highScores")) || [];

highScoresList.innerHTML = highScores
.map(score => {
    return <li class="high-score">${score.name}-${score.score}</li>
})
.join("");

// LOOK UP ACTIVITY 28 from week 4