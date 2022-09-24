//Category Buttons
const movieBtn = document.getElementById('movieBtn');
const showsBtn = document.getElementById('showsBtn');
const gameBtn = document.getElementById('gamesBtn');
const sportsBtn = document.getElementById('sportsBtn');

//Answer Buttons
const ansBtns = document.getElementsByClassName('flexAnsBtn');

//API
const mediumMovieQuiz = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const mediumTVQuiz = "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple";
const mediumGamesQuiz = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
const mediumSportsQuiz = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";

let movieData;

window.onload = getMovieTrivia();

//API call function
async function getMovieTrivia() {
    const movieResponse = await fetch(mediumMovieQuiz);
    movieData = await movieResponse.json();

    getMovieQuestion(movieData);
    populateMovieBtnAnswers(movieData);
}

async function getTVTrivia() {
    let showsResponse = await fetch(mediumTVQuiz);
    let showsData = await showsResponse.json();
    //console.log(showsData);
}

async function getGamesTrivia() {
    let gamesResponse = await fetch(mediumGamesQuiz);
    let gamesData = await gamesResponse.json();
    //console.log(gamesData);
}

async function getSportsTrivia() {
    let sportsResponse = await fetch(mediumSportsQuiz);
    let sportsData = await sportsResponse.json();
    //console.log(sportsData);
}

//gets the movie question and displays it with no issue at all just need to style the H2 element so it looks better
function getMovieQuestion(movieData) {
    let question = document.getElementById('question');
    question.innerHTML = movieData.results[0].question;
}

//populates the answers buttons with no issue
function populateMovieBtnAnswers(movieData) {
    const results = movieData.results[0];
    const answers = [...results.incorrect_answers, results.correct_answer]; //takes correct answer and incorrect answers and makes them one array
    
    console.log(results.correct_answer);

    fisherYatesShuffle(answers);
    
    for(let i = 0; i <= 3; i++) {
        let index = i + 1
        document.getElementById(`ans${index}`).innerHTML = answers[i];
        document.getElementById(`ans${index}`).value = answers[i];
    }
}   

// loop through answer buttons and assign event listener to each of them which then calls the checkAnswer function
for(let i = 0; i < ansBtns.length; i++) {
    ansBtns[i].addEventListener('click', function (e) {   
        checkAnswer(e.target);
    });
}

function checkAnswer(btn) {
    console.log(movieData);
    let correctAns = movieData.results[0].correct_answer;
    let userAnswer = btn.value;
    console.log(userAnswer);
    console.log(correctAns);
    console.log(btn);
    if(userAnswer === correctAns) {
        btn.classList.add('right-ans');
    }
}



function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

