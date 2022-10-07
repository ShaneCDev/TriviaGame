const highScoresList = document.getElementById('leaderboard');
const highScoresLocal = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScoresLocal.map(score => {
    return `<li>${score.name} - ${score.score}</li>`;
}).join("");