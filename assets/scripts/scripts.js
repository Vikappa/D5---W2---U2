const scrollContainers = document.querySelectorAll('.container')
const iconVolumeStatus = document.getElementById('volumeStatus')
const volumeButton = document.getElementById('volumeButton')
const previewFilm = document.getElementById('previewFilm')

let isDown = false;
let startX;
let scrollLeft;

scrollContainers.forEach(scrollContainer => {
    // Eventi del mouse
    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('active')
        startX = e.pageX - scrollContainer.offsetLeft
        scrollLeft = scrollContainer.scrollLeft
    });
    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('active')
    })
    scrollContainer.addEventListener('mouseup', () => {
        isDown = false
        scrollContainer.classList.remove('active')
    })
    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - scrollContainer.offsetLeft
        const walk = (x - startX) * 3
        scrollContainer.scrollLeft = scrollLeft - walk
    })

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


const cambiaIconaVolume = function () {
    if (iconVolumeStatus.classList[1] === "bi-volume-mute-fill") {
        iconVolumeStatus.classList.remove("bi-volume-mute-fill")
        iconVolumeStatus.classList.add("bi-volume-up-fill")
    } else {
        if (iconVolumeStatus.classList[1] === "bi-volume-up-fill") {
            iconVolumeStatus.classList.remove("bi-volume-up-fill")
            iconVolumeStatus.classList.add("bi-volume-mute-fill")
        }
    }
}

const cambiaVolume = function () {
    if (previewFilm.muted) {
        previewFilm.muted = false;
        previewFilm.volume = 0.5;
    } else {
        previewFilm.muted = true;
    }
}

const tastoVolumePremuto = function () {
    cambiaIconaVolume()
    cambiaVolume()
}