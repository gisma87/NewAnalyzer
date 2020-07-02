const API_KEY = '4ae594cae44745159670d56507226f52';
const BASE_URL = 'https://praktikum.tk/news/v2/everything?';
const TEMPLATE_NEWS_CARD = document.querySelector('#tmpl-card');
const CARD_CONTAINER = document.querySelector('.cards-container');
const SECTION_SEARCH_RESULT = document.querySelector('.search-result');
const SECTION_PRELOADER = document.querySelector('.wait');
const SECTION_NOT_FOUND = document.querySelector('.not-found');
const SECTION_ERROR_SEARCH = document.querySelector('.error-search');
const ERROR_INPUT = document.querySelector('.search__error');
const SHOW_CARDS = 3;
const BUTTONS_MORE_CARDS = document.querySelector('.search-result__button');
const INPUT_SEARCH = document.querySelector('.search__input');
const FORM_SEARCH = document.querySelector('.search__form');
const WEEK_IN_MS = 604800000;
const TO = new Date();
const FROM = new Date(TO.getTime() - WEEK_IN_MS);

export {
    TEMPLATE_NEWS_CARD,
    SHOW_CARDS,
    SECTION_PRELOADER,
    SECTION_NOT_FOUND,
    SECTION_ERROR_SEARCH,
    CARD_CONTAINER,
    SECTION_SEARCH_RESULT,
    BUTTONS_MORE_CARDS,
    API_KEY,
    BASE_URL,
    FROM,
    TO,
    INPUT_SEARCH,
    FORM_SEARCH,
    ERROR_INPUT
};