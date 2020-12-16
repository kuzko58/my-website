const slider = document.querySelector('.slider');
const bannSection = document.querySelector('.banner-sec-1');
const root = document.documentElement;


window.addEventListener('load', () => {
    let travel = -1 *(Number(bannSection.offsetWidth) + 4);
    root.style.setProperty('--travel-01', travel + "px");
    slider.classList.add('animate-slider');
});