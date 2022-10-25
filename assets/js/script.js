const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modalElement = document.querySelector('.js-modal');
const closeModal = document.querySelector('.js-modal-close');
const modalContainerElement = document.querySelector('.js-modal-container');

const headerElement = document.querySelector('#header');
const menuIconElement = document.querySelector('#mobile-menu');
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

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

const headerHeight = headerElement.clientHeight;

menuIconElement.onclick = function() {
    const isClosed = headerHeight === headerElement.clientHeight;

    if (isClosed) {
        headerElement.style.height = 'auto';
    } else {
        headerElement.style.height = null;
    }
}

for (const menuItem of menuItems) {
    const isParentMenu = menuItem.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
    
    menuItem.onclick = function(event) {
        if (!isParentMenu) {
            headerElement.style.height = null;
        } else {
            event.preventDefault();
        }

    }
}

// Sliders

const sliderElements = document.querySelectorAll('.sliders');
let indexSlider;

for (indexSlider = 1; indexSlider < sliderElements.length; indexSlider++) {
    sliderElements[indexSlider].style.display = 'none';
};

indexSlider = 0;
setInterval(() => {
    sliderElements[indexSlider].style.display = 'none';
    
    indexSlider += 1;
    if (indexSlider >= sliderElements.length) {
        indexSlider = 0;
    }

    sliderElements[indexSlider].style.display = 'block';
}, 3000);