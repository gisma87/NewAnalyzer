const API_KEY = '4ae594cae44745159670d56507226f52';
const BASE_URL = 'https://praktikum.tk/news/v2/everything?';
const TEMPLATE_NEWS_CARD = document.querySelector('#tmpl-card');
const TEMPLATE_COMMIT_CARD = document.querySelector('#tmpl-card-commit');
const CARD_CONTAINER = document.querySelector('.cards-container');
const COMMIT_CONTAINER = document.querySelector('.swiper-wrapper');
const SECTION_SEARCH_RESULT = document.querySelector('.search-result');
const SECTION_PRELOADER = document.querySelector('.wait');
const SECTION_NOT_FOUND = document.querySelector('.not-found');
const SECTION_ERROR_SEARCH = document.querySelector('.error-search');
const ERROR_INPUT = document.querySelector('.search__error');
const SHOW_CARDS = 3;
const BUTTONS_MORE_CARDS = document.querySelector('.search-result__button');
const BUTTONS_SEARCH = document.querySelector('.search__button');
const INPUT_SEARCH = document.querySelector('.search__input');
const FORM_SEARCH = document.querySelector('.search__form');

//количество миллисекунд в сутках
const DAY_IN_MS = 1000*60*60*24;
const WEEK_IN_MS = DAY_IN_MS*7;
const TO = new Date();
const FROM = new Date(TO.getTime() - WEEK_IN_MS);
const RES_LOCAL_STORAGE = JSON.parse(localStorage.getItem('res'));
const WORD = localStorage.getItem('query');
const WORD_QUERY = document.querySelector('.analytic__query');
const TOTAL_RESULT = document.querySelector('.analytic__total-sum');
const SUM_WORD_IN_TITLE = document.querySelector('.analytic__title-sum');
const MONTH = document.querySelector('.analytic__month');
const MONTHS_ARRAY = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const WEEK_IN_DAYS = 7;
const DATE_NOW = new Date();
const DAY_IN_TABLE = document.querySelectorAll('.analytic__table-day');
const PERCENT_IN_TABLE = document.querySelectorAll('.analytic__table-percent');

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
    ERROR_INPUT,
    RES_LOCAL_STORAGE,
    BUTTONS_SEARCH,
    DAY_IN_MS,
    WORD_QUERY,
    TOTAL_RESULT,
    WORD,
    SUM_WORD_IN_TITLE,
    MONTH,
    MONTHS_ARRAY,
    WEEK_IN_DAYS,
    DATE_NOW,
    DAY_IN_TABLE,
    PERCENT_IN_TABLE,
    TEMPLATE_COMMIT_CARD,
    COMMIT_CONTAINER
};