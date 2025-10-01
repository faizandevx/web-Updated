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

//  Script to Toggle Toast 

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("searchBtn");
    const searchToastEl = document.getElementById("searchToast");
    const searchToast = new bootstrap.Toast(searchToastEl);

    searchBtn.addEventListener("click", function () {
        searchToast.show();
    });
});