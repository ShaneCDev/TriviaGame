/*
This script was made using this tutorial from James Q Quick: https://youtu.be/jfOv18lCMmw
*/
const highScoresList = document.getElementById('leaderboard');
const highScoresLocal = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScoresLocal.map(score => {
    return `<li class='leaderboardScore'>${score.name} - ${score.score}</li>`;
}).join("");