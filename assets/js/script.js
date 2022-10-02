//Category Buttons
const movieBtn = document.getElementById('movieBtn');
const showsBtn = document.getElementById('showsBtn');
const gameBtn = document.getElementById('gamesBtn');
const sportsBtn = document.getElementById('sportsBtn');

//Answer Buttons
const ansBtns = document.getElementsByClassName('flexAnsBtn');
let acceptingAns = true;
let score = 0;
let currentQuestionIndex = 0;
let questionCounter = 1;
const nextQuestion = document.getElementById('next-question');
const question = document.getElementById('question');

//API
const mediumMovieQuiz = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const mediumTVQuiz = "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple";
const mediumGamesQuiz = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
const mediumSportsQuiz = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";

let data;

window.onload = () => {
    let query = window.location.search.slice(1);
    switch(query) {
        case "movies":
            getMovieTrivia();
            break;
        case "games":
            getGamesTrivia();
            break;
        case "shows":
            getTVTrivia();
            break;
        case "sports":
            getSportsTrivia();
            break;
    }
}

//API call function
async function getMovieTrivia() {
    const movieResponse = await fetch(mediumMovieQuiz);
    data = await movieResponse.json();

    getMovieQuestion(data);
    populateBtnAnswers(data);
}

async function getTVTrivia() {
    let showsResponse = await fetch(mediumTVQuiz);
    data = await showsResponse.json();
    
    getShowsQuestion(data);
    populateBtnAnswers(data);
}

async function getGamesTrivia() {
    let gamesResponse = await fetch(mediumGamesQuiz);
    data = await gamesResponse.json();

    getGamesQuestion(data);
    populateBtnAnswers(data);
}

async function getSportsTrivia() {
    let sportsResponse = await fetch(mediumSportsQuiz);
    data = await sportsResponse.json();

    getSportsQuestion(data);
    populateBtnAnswers(data);
}

//gets the movie question and displays it with no issue at all just need to style the H2 element so it looks better
function getMovieQuestion(data) {
    question.innerHTML = data.results[currentQuestionIndex].question;
}

function getSportsQuestion(data) {
    question.innerHTML = data.results[currentQuestionIndex].question;
}

function getGamesQuestion(data) {
    question.innerHTML = data.results[currentQuestionIndex].question;
}

function getShowsQuestion(data) {
    question.innerHTML = data.results[currentQuestionIndex].question;
}

//populates the answers buttons with no issue
function populateBtnAnswers(data) {
    console.log(data.results[currentQuestionIndex]);
    const results = data.results[currentQuestionIndex];
    const answers = [...results.incorrect_answers, results.correct_answer]; //takes correct answer and incorrect answers and makes them one array

    console.log(results.correct_answer);
    console.log(currentQuestionIndex);

    fisherYatesShuffle(answers);

    for (let i = 0; i <= 3; i++) {
        let index = i + 1
        document.getElementById(`ans${index}`).innerHTML = answers[i];
        document.getElementById(`ans${index}`).value = answers[i];
    }
}

function getNextQuestion() {
    currentQuestionIndex++;
    acceptingAns = true;
    clearStatusClass(ansBtns);
    
    let questionCount = document.getElementById('question-num');
    questionCount.innerHTML = ++questionCounter;
    
    let questionArray = data.results[currentQuestionIndex].question;
    question.innerHTML = questionArray;

    console.log(question);
}

function clearStatusClass(element) {
    console.log(element);
    Array.from(element).forEach(button => {
        button.classList.remove('right-ans');
        button.classList.remove('wrong-ans');
    });
}

function checkAnswer(btn) {
    let correctAns = data.results[currentQuestionIndex].correct_answer;
    let userAnswer = btn.value;

    if (userAnswer === correctAns) {
        btn.classList.add('right-ans');
        incrementScore();
    } else {
        btn.classList.add('wrong-ans');
    }

    acceptingAns = false;
}

function incrementScore() {
    let scoreCounter = document.getElementById('score');
    scoreCounter.innerHTML = ++score;
}

function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// loop through answer buttons and assign event listener to each of them which then calls the checkAnswer function
for (let i = 0; i < ansBtns.length; i++) {
    ansBtns[i].addEventListener('click', function (e) {
        if (acceptingAns) {
            checkAnswer(e.target);
        }
    });
}

nextQuestion.addEventListener('click', () => {
    getNextQuestion();
    populateBtnAnswers(data);
});