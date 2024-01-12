const container = document.getElementById('scroll-container');

container.addEventListener('mousedown', (e) => {
    let isDown = true;
    let startX = e.pageX - container.offsetLeft;
    let scrollLeft = container.scrollLeft;

    container.style.cursor = 'grabbing';

    document.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
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
