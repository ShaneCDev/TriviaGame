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
    let movieData = await movieResponse.json();
    console.log(movieData);
    useMovieData(movieData);
}

function useMovieData(movieData) {
    let btnText = movieData.results.category = 'Movies';
    console.log(movieData.results.category);
    movieBtn.innerHTML = `${btnText}`;
}

async function getTVTrivia() {
    let showsResponse = await fetch(mediumTVQuiz);
    let showsData = await showsResponse.json();
    console.log(showsData);
    useShowsData(showsData);
}

function useShowsData(showsData) {
    let btnText = showsData.results.category = 'TV Shows';
    console.log(showsData.results.category);
    showsBtn.innerHTML = `${btnText}`;
}

async function getGamesTrivia() {
    let gamesResponse = await fetch(mediumGamesQuiz);
    let gamesData = await gamesResponse.json();
    console.log(gamesData);
    useGamesData(gamesData);
}

function useGamesData(gamesData) {
    let btnText = gamesData.results.category = 'Video Games';
    console.log(gamesData.results.category);
    gameBtn.innerHTML = `${btnText}`;
}

async function getSportsTrivia() {
    let sportsResponse = await fetch(mediumSportsQuiz);
    let sportsData = await sportsResponse.json();
    console.log(sportsData);
    useSportsData(sportsData);
}

function useSportsData(sportsData) {
    let btnText = sportsData.results.category = 'Sports';
    console.log(sportsData.results.category);
    sportsBtn.innerHTML = `${btnText}`;
}

openBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});