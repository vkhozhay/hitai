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
    $("#popup__form-input-number").mask("+7 (999) 999-99-99");
});

$('.flowing-scroll').on('click', function () {
    let el = $(this);
    let dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
        $('.mobile-menu').removeClass('mobile-menu_active');
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


let body = document.querySelector('body');
let mobileMenu = document.querySelector('.mobile-menu');
let bodyHummer = new Hammer(body);

bodyHummer.get('swipe').set({
    threshold: 150
});

bodyHummer.on('swipeleft', function () {
    mobileMenu.classList.add('mobile-menu_active');
})

bodyHummer.on('swiperight', function () {
    mobileMenu.classList.remove('mobile-menu_active');
})


let popUpForm = document.querySelector('.popup-form__container');
let popUpBtnClose = document.querySelector('.popup-form__btn-close');
let openPopupBtn = document.querySelector('.certificate__button');

openPopupBtn.addEventListener('click', openPopUp);

popUpBtnClose.addEventListener('click', closePopUp);

popUpForm.addEventListener('click', function (e) {
    if (e.target.classList.contains('popup-form__container')) {
        closePopUp();
    }
})

function openPopUp() {
    popUpForm.classList.add('popup-form__container_active');
}

function closePopUp() {
    popUpForm.classList.remove('popup-form__container_active');
}




// Отправка данных на сервер
$('#popup__form').trigger('reset');
$(function () {
    'use strict';
    $('#popup__form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Сообщение отправлено');
                    $('#popup__form').trigger('reset');
                    // очистка формы
                } else {
                    alert('Ошибка');
                }
                closePopUp();
            }
        });
    });
});

$('#callback__form').trigger('reset');
$(function () {
    'use strict';
    $('#callback__form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            contentType: false,
            processData: false,
            data: new FormData(this),
            success: function (msg) {
                console.log(msg);
                if (msg == 'ok') {
                    alert('Сообщение отправлено');
                    $('#callback__form').trigger('reset'); // очистка формы
                } else {
                    alert('Ошибка');
                }
            }
        });
    });
});