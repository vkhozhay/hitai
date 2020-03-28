var swiper = new Swiper('.header__swiper-container', {
    speed: 2000,
    pagination: {
        el: '.header__swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
    },
    allowTouchMove: false,
    loop: true,
});

var swiper = new Swiper('.reviews__slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.reviews__slider-pagination',
        dynamicBullets: true,
    },
});

$(function () {
    $("#contacts__form-input-number").mask("+7 (999) 999-99-99");
});

$('.flowing-scroll').on('click', function () {
    let el = $(this);
    let dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({
                scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
        );
    }

    mobileNavigation.classList.remove('navigation-mobile_active');

    for (i = 0; i < sectionArr.length; i++) {
        sectionArr[i].classList.remove('section__menu-active');
    }
    return false;
});

var fixedHeader = $('.header__contacts_fixed');

$(window).scroll(function () {
    if ($(window).scrollTop() > 170) {
        fixedHeader.addClass('header__contacts_fixed_active');
    } else {
        fixedHeader.removeClass('header__contacts_fixed_active');
    }
});

let openMenuBtn = $('.header__mobile-menu-btn');
let closeMenuBtn = $('.mobile-menu__close-btn');

openMenuBtn.on('click', function () {
    $('.mobile-menu').addClass('mobile-menu_active');
})

closeMenuBtn.on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu_active');
})