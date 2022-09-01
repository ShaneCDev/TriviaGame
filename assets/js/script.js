const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

//Category Buttons
const movieBtn = document.getElementById('movieBtn');
const showsBtn = document.getElementById('showsBtn');
const gameBtn = document.getElementById('gamesBtn');
const sportsBtn = document.getElementById('sportsBtn');

//API
const mediumMovieQuiz = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const mediumTVQuiz = "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple";
const mediumGamesQuiz = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
const mediumSportsQuiz = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";

window.onload = getMovieTrivia(), getTVTrivia(), getGamesTrivia(), getSportsTrivia();

//API call function
async function getMovieTrivia() {
    let movieResponse = await fetch(mediumMovieQuiz);
    let movieData =  await movieResponse.json();
    console.log(movieData);

    getMovieQuestion(movieData);
    populateMovieBtnAnswers(movieData);
}
async function getTVTrivia() {
    let showsResponse = await fetch(mediumTVQuiz);
    let showsData = await showsResponse.json();
    console.log(showsData);
}

async function getGamesTrivia() {
    let gamesResponse = await fetch(mediumGamesQuiz);
    let gamesData = await gamesResponse.json();
    console.log(gamesData);
}

async function getSportsTrivia() {
    let sportsResponse = await fetch(mediumSportsQuiz);
    let sportsData = await sportsResponse.json();
    console.log(sportsData);
}

//gets the movie question and displays it with no issue at all just need to style the H2 element so it looks better
function getMovieQuestion(movieData) {
    let question = document.getElementById('question');
    question.innerHTML = movieData.results[0].question;
    console.log("I worked");
}

//populates the answers buttons with no issue, hardcoded so that correct answer is always on the
//first button at the moment, need to change that
function populateMovieBtnAnswers(movieData) {
    let answer1 = document.getElementById('ans1');
    let answer2 = document.getElementById('ans2');
    let answer3 = document.getElementById('ans3');
    let answer4 = document.getElementById('ans4');

    answer1.innerHTML = movieData.results[0].correct_answer;
    answer2.innerHTML = movieData.results[0].incorrect_answers[0];
    answer3.innerHTML = movieData.results[0].incorrect_answers[1];
    answer4.innerHTML = movieData.results[0].incorrect_answers[2];

    console.log('So far so good!');
}

openBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

//will get around to using this later on
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        array[i], array[j] = array[j], array[i];
    }
}
