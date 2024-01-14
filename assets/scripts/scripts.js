// Seleziona il div che vuoi rendere scorrevole
const scrollContainers = document.querySelectorAll('.container');

// Aggiungi event listener per il mouse
let isDown = false;
let startX;
let scrollLeft;

scrollContainers.forEach(scrollContainer => {
    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });
    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3; // Velocità dello scroll
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});









// Per il supporto touchscreen
container.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    let startX = touch.clientX - container.offsetLeft;
    let scrollLeft = container.scrollLeft;

    container.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const x = touch.clientX - container.offsetLeft;
        const walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
    });
});

const images = document.querySelectorAll('.img-fluid');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const scrollStep = 200; // Larghezza del passo di scorrimento

leftArrow.addEventListener('click', () => {
    container.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
    container.scrollBy({ left: scrollStep, behavior: 'smooth' });
});
