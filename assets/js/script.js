const title = document.getElementById('titleQuiz');

//Answer Buttons
const ansBtns = document.getElementsByClassName('flexBtn');
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
};

//API call function
async function getTrivia() {
    const response = await fetch(address);
    if (response.status >= 200 && response.status <= 299) {
        data = await response.json();
        getTriviaQuestion(data);
        populateBtnAnswers(data);
        timer();
    } else {
        window.location.assign("500.html");
    }
}

// Gets the first question of the quiz
function getTriviaQuestion(data) {
    question.innerHTML = data.results[currentQuestionIndex].question;
}

// Populate the 4 answer buttons function - gets the api data and displays them to the user across 4 buttons
function populateBtnAnswers(data) {
    const results = data.results[currentQuestionIndex];
    const answers = [...results.incorrect_answers, results.correct_answer]; //takes correct answer and incorrect answers and makes them one array

    fisherYatesShuffle(answers);

    for (let i = 0; i <= 3; i++) {
        let index = i + 1;
        document.getElementById(`ans${index}`).innerHTML = answers[i];
        document.getElementById(`ans${index}`).value = answers[i];
    }
}

// Next question function -  this is ran when user clicks "next question" button after selecting an answer
function getNextQuestion() {
    currentQuestionIndex++;
    acceptingAns = true;
    clearStatusClass(ansBtns);

    let questionCount = document.getElementById('question-num');
    questionCount.innerHTML = ++questionCounter;
    
    if(currentQuestionIndex == 10) {
        localStorage.setItem("mostRecentScore", score);
        questionCount.innerHTML = 10;
        location.href = "end.html";
    }
    
    let questionArray = data.results[currentQuestionIndex].question;
    question.innerHTML = questionArray;
}

/*
This function was made using Web Dev Simplified tutorials
when I was learning how to add and remove classes to buttons
Tutorial here: https://youtu.be/riDzcEQbX6k
*/
function clearStatusClass(element) {
    Array.from(element).forEach(button => {
        button.classList.remove('right-ans');
        button.classList.remove('wrong-ans');
    });
}

//Check Answer function - checks answer when one of the answers is selected
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

// Increment score function - everytime user gets answers a question correctly their score is incremented by 1
function incrementScore() {
    let scoreCounter = document.getElementById('score');
    scoreCounter.innerHTML = ++score;
}

/*
This function takes the array of answers and shuffles them around so that it is random 
and not hardcoded to a single button
*/
function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//Timer function - timer set at 2 minutes
function timer() {
    let seconds = 120;
    let timer = setInterval(function() {
        document.getElementById('timer').innerHTML = seconds;
        seconds--;
        /*
        if user runs out of time set their score in local storage and send them to end.html to enter
        a username and save their score to the leaderboard
        */
        if (seconds < 0) {
            localStorage.setItem("mostRecentScore", score);
            clearInterval(timer);
            location.href = "end.html";
        }
    }, 1000);
}

// loop through answer buttons and assign event listener to each of them which then calls the checkAnswer function
for (let i = 0; i < ansBtns.length; i++) {
    ansBtns[i].addEventListener('click', function (e) {
        if (acceptingAns) {
            checkAnswer(e.target);
        }
    });
}

// added the if statement to fix a bug which was allowing the user to click the "next question" button before selecting an answer
nextQuestion.addEventListener('click', () => {
    if(!acceptingAns) {
        getNextQuestion();
        populateBtnAnswers(data);
    }
});