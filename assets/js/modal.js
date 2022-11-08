const showModal = document.getElementById('openModal');
const hideModal = document.getElementById('closeModal');
const modal = document.getElementById('myModal');


// Open modal
showModal.addEventListener('click', () => {
    modal.classList.add('show');
});

// Close modal
hideModal.addEventListener('click', () => {
    modal.classList.remove('show');
});