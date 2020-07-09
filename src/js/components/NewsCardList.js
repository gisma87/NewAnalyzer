import {SHOW_CARDS, BUTTONS_MORE_CARDS} from "../constants/constants.js"

export default class NewsCardList {
    constructor(container, cardElement) {
        this.container = container;
        this.cardElement = cardElement;
        this.lastCard = 0;
    }

    render(cards) {
        for (let i = this.lastCard; i < Math.min(this.lastCard + SHOW_CARDS, cards.length); i++) {
            const article = cards[i];
            this._addCard(article.urlToImage, article.publishedAt.split('T')[0].split("-").reverse().join("."), article.description, article.title, article.source.name);
        }
        this.lastCard = this.lastCard + SHOW_CARDS;
        this._check(cards);
    }

    clear() {
        while (this.container.firstChild) this.container.removeChild(this.container.firstChild);
        this.lastCard = 0;
    }

    _addCard(urlToImage, publishedAt, description, title, source) {
        const card = this.cardElement.create(urlToImage, publishedAt, description, title, source);
        this.container.appendChild(card);
    }

    _check(cards) {
        if (this.lastCard < cards.length) {
            BUTTONS_MORE_CARDS.style = 'display: block;';
            BUTTONS_MORE_CARDS.onclick = () => this.render(cards);
        } else {
            BUTTONS_MORE_CARDS.style = 'display: none;';
        }
    }
}
