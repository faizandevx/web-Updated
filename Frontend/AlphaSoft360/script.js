var carousel = document.getElementById('teamCarousel');
var thumbs = document.querySelectorAll('.carousel-indicators img');
var bsCarousel = new bootstrap.Carousel(carousel);

carousel.addEventListener('slide.bs.carousel', function (e) {
    thumbs[e.to].classList.remove('opacity-50');
    for (var i = 0; i < thumbs.length; i++) {
        if (i !== e.to) thumbs[i].classList.add('opacity-50');
    }
});

// Click thumbnail to change slide
for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function () {
        bsCarousel.to(i);
    });
}

console.log("Loaded");



document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('scrollNavbar');
    if (!navbar) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Trigger on page load if already scrolled
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
});
