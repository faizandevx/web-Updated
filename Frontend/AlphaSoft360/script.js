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
