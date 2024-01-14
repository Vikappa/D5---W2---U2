const scrollContainers = document.querySelectorAll('.container');

let isDown = false;
let startX;
let scrollLeft;

scrollContainers.forEach(scrollContainer => {
    // Eventi del mouse
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
        const walk = (x - startX) * 3;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });

    // Eventi touch
    scrollContainer.addEventListener('touchstart', (e) => {
        isDown = true;
        scrollContainer.classList.add('active');
        startX = e.touches[0].pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });
    scrollContainer.addEventListener('touchend', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('touchcancel', () => {
        isDown = false;
        scrollContainer.classList.remove('active');
    });
    scrollContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 3;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});
