const swiper = new Swiper(".banners-carousel", {
    loop: true,

    navigation: {
        nextEl: ".banners-button-next",
        prevEl: ".banners-button-prev",
    },
});

const cardsSwiper = new Swiper(".cards-carousel", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next",
        prevEl: ".cards-btn-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const cardsTwoSwiper = new Swiper(".cards-carousel-second", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next-second",
        prevEl: ".cards-btn-prev-second",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const cardsThirdSwiper = new Swiper(".cards-carousel-third", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".cards-btn-next-third",
        prevEl: ".cards-btn-prev-third",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        567: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

const news = new Swiper(".news-carousel", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: {
        nextEl: ".news-btn-next",
        prevEl: ".news-btn-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});
