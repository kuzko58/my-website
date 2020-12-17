const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');


window.addEventListener('load', () => {
    slider.classList.add('animate-slider');
    cards[cards.length - 1].style.borderBottom = 'none';
});
