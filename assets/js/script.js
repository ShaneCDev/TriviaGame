const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

//API
const mediumMovieQuiz = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple";
const mediumTVQuiz = "https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple";
const mediumGamesQuiz = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";
const mediumSportsQuiz = "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple";

openBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});