import './styles/about.css';

import Swiper from 'swiper';

const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    fadeEffect: {
        crossFade: 'true'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});