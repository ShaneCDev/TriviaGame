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

window.onload = getMovieTrivia();

//API call function
async function getMovieTrivia() {
    let movieResponse = await fetch(mediumMovieQuiz);
    let movieData =  await movieResponse.json();
    const results = movieData.results[0];
    const answers = [...results.incorrect_answers, results.correct_answer];
    console.log(answers);

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
    //console.log("I worked");
}

//populates the answers buttons with no issue, hardcoded so that correct answer is always on the
//first button at the moment, need to change that
function populateMovieBtnAnswers(movieData) {
    const results = movieData.results[0];
    const answers = [...results.incorrect_answers, results.correct_answer]; //takes correct answer and incorrect answers and makes them one array
    //console.log(answers);
    
    fisherYatesShuffle(answers);
    //console.log(answers);

    for(let i = 0; i <= 4; i++) {
        let index = i + 1
        document.getElementById(`ans${index}`).innerHTML = answers[i];
        document.getElementById(`ans${index}`).value = answers[i];
    }

}   

function checkAnswer(movieData) {
    const results = movieData.results[0];

    console.log(results);
    let userAnswer = document.getElementById('ans1');

    if(userAnswer.click == true){
        alert('I clicked!');
        
    }

}


//will get around to using this later on
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

