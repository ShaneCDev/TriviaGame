//Category Buttons
const movieBtn = document.getElementById('movieBtn');
const showsBtn = document.getElementById('showsBtn');
const gameBtn = document.getElementById('gamesBtn');
const sportsBtn = document.getElementById('sportsBtn');

const title = document.getElementById('titleQuiz');

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
let address;

window.onload = () => {
    let query = window.location.search.slice(1);
    console.log(query);
    switch (query) {
        case "movies":
            title.innerHTML = 'Trivia Game - Movies!';
            address = mediumMovieQuiz;
            getTrivia();
            break;
        case "games":
            title.innerHTML = 'Trivia Game - Games!';
            address = mediumGamesQuiz;
            getTrivia();
            break;
        case "shows":
            title.innerHTML = 'Trivia Game - Shows!';
            address = mediumTVQuiz;
            getTrivia();
            break;
        case "sports":
            title.innerHTML = 'Trivia Game - Sports!';
            address = mediumSportsQuiz;
            getTrivia();
            break;
    }
}

//API call function
async function getTrivia() {
    const response = await fetch(address);
    data = await response.json();

    getTriviaQuestion(data);
    populateBtnAnswers(data);
}

//gets the movie question and displays it with no issue at all just need to style the H2 element so it looks better
function getTriviaQuestion(data) {
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

    console.log(question);
    
    if(currentQuestionIndex == 10) {
        localStorage.setItem("mostRecentScore", score);
        questionCount.innerHTML = 10;
        location.href = "end.html";
    }
    
    let questionArray = data.results[currentQuestionIndex].question;
    question.innerHTML = questionArray;
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