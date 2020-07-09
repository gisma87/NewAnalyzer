import './styles/about.css';
import CommitCardList from './js/components/CommitCardList';
import CommitCard from './js/components/CommitCard';
import GithubApi from './js/modules/GithubApi';
import {COMMIT_CONTAINER} from './js/constants/constants';
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

setTimeout(function () {
    mySwiper.update();
}, 1000);

const githubApi = new GithubApi('https://api.github.com/repos/gisma87/NewAnalyzer/commits');
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(COMMIT_CONTAINER, commitCard);


githubApi.getCommits()
    .then(result => {
        return commitCardList.render(result);
    })
    .catch(err => {
        console.log(`Ошибка: ${err}`);
    })

