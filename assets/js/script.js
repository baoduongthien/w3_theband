const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modalElement = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-modal-close');
const modalContainerElement = document.querySelector('.js-modal-container');

for (const buyBtn of buyBtns) {
    buyBtn.onclick = function() {
        modalElement.classList.add('open');
    }
}

closeModal.addEventListener('click', function() {
    modalElement.classList.remove('open');
});

modalElement.onclick = function() {
    modalElement.classList.remove('open');
}

modalContainerElement.onclick = function(event) {
    event.stopPropagation();
}