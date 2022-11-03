const username = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const score = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

finalScore.innerHTML = score;

/*
This function was made using this tutorial from James Q Quick: https://youtu.be/DFhmNLKwwGw
*/
function saveHighScore(e) {
    e.preventDefault();

    const scoreObj = {
        score: score,
        name: username.value
    };
    
    /* This might work will need to test out later
    updScoreObj = scoreObj.findIndex((obj => obj.name == username.value))
    scoreObj[updScoreObj].score = score;
    */

    highScores.push(scoreObj);

    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
}


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener('click', function(e) {
    saveHighScore(e);
    alert('Score Saved, go back to the homepage and see where you placed on the leaderboard!');
    saveScoreBtn.disabled = true;
});