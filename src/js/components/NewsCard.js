import {TEMPLATE_NEWS_CARD} from '../constants/constants';

export default class NewsCard {
    constructor(urlToImage, publishedAt, description, title, source) {
        this.cardElement = this.create(urlToImage, publishedAt, description, title, source);
    }

    create(urlToImage, publishedAt, description, title, source) {
        const fragment = (TEMPLATE_NEWS_CARD.content).cloneNode(true);

        const cardImage = fragment.querySelector('.card__img');
        const cardDate = fragment.querySelector('.card__date');
        const cardTitle = fragment.querySelector('.card__title');
        const cardDescription = fragment.querySelector('.card__paragraph');
        const cardSource = fragment.querySelector('.card__link');

        if (urlToImage != null) {
            cardImage.src = urlToImage;
        } else {
            cardImage.src = './images/notphoto.png'
        }
        cardDate.textContent = publishedAt;
        cardDescription.textContent = description;
        cardTitle.textContent = title;
        cardSource.textContent = source;

        return fragment;
    }
}