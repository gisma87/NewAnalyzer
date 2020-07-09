import {TEMPLATE_COMMIT_CARD} from '../constants/constants';

export default class CommitCard {
    constructor(date, avatar_url, name, email, message, url) {
        this.commitElement = this.create(date, avatar_url, name, email, message, url);
    }

    create(date, avatar_url, name, email, message) {
        const fragment = (TEMPLATE_COMMIT_CARD.content).cloneNode(true);

        const commitsData = fragment.querySelector('.commits__data');
        const commitsAvatar = fragment.querySelector('.commits__img');
        const commitsName = fragment.querySelector('.commits__name');
        const commitsEmail = fragment.querySelector('.commits__email');
        const commitsParagraph = fragment.querySelector('.commits__paragraph');

        const newDate = new Date(date);
        commitsData.textContent = `${newDate.toLocaleString("ru", {
            day: "numeric",
            month: 'long'
        })}, ${newDate.toLocaleString("ru", {year: 'numeric'})}`;

        if (avatar_url != null) {
            commitsAvatar.src = avatar_url;
        } else {
            commitsAvatar.src = './images/notphoto.png'
        }

        commitsName.textContent = name;
        commitsEmail.textContent = email;
        commitsParagraph.textContent = message;

        return fragment;
    }
}