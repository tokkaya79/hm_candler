const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header-menu__list');

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.rewiews__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperTwo = new Swiper('.certificates__slider', {
    loop: true,
    slidesPerView: 2.3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoints: {
    //     480: {
    //         slidesPerView: 2,
    //         
    //     },
    //     360: {
    //         slidesPerView: 1,
    //     }
    // }
});

swiperTwo.width = auto;