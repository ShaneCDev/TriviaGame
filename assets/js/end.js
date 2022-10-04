const username = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');

function saveHighScore(e) {
    console.log('I clicked the save button');
    e.preventDefault();
}


username.addEventListener('keyup', () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveScoreBtn.addEventListener('click', function(e) {
    saveHighScore(e);
});