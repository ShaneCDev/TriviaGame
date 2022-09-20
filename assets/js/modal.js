const showModal = document.getElementById('openModal');
const hideModal = document.getElementById('closeModal');
const modal = document.getElementById('myModal');

showModal.addEventListener('click', () => {
    modal.classList.add('show');
});

hideModal.addEventListener('click', () => {
    modal.classList.remove('show');
});