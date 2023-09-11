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

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = document.querySelectorAll('.accordeon__item-title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener('click', function () {
        const currentContent = accordeonTitle.parentElement.querySelector(
            '.accordeon__item-content'
        );
        accordeonTitle.classList.toggle('accordeon__item-title--active');
        currentContent.classList.toggle('accordeon__item-content--visible');

        if(currentContent.classList.contains('accordeon__item-content--visible')){
            currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
        }else{
            currentContent.style.maxHeight = null
        }
    });
});

