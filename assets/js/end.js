const username = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const score = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

let sameUser = highScores.find(e => e.name === username.value);

finalScore.innerHTML = score;

/*
This function was partially made using this tutorial from James Q Quick: https://youtu.be/DFhmNLKwwGw
I modified it so that if the same user plays the quiz again and enters the same name their score
gets updated instead of adding another entry to the leaderboard with the same name
*/
function saveHighScore(e) {
    e.preventDefault();

    const scoreObj = {
        score: score,
        name: username.value
    };

    for(let i = 0; i < highScores.length; i++) {
        if(highScores[i].name === username.value && highScores[i].score < score) {
            highScores[i].score = score;
            localStorage.setItem('highScores', JSON.stringify(highScores));
            alert("Score updated! Go to the leaderboard and check out your updated score!");
            return;
        }
    }

    highScores.push(scoreObj);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    alert('Score Saved, go back to the homepage and see where you placed on the leaderboard!');
}


username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener('click', function (e) {
    saveHighScore(e);
    saveScoreBtn.disabled = true;
});