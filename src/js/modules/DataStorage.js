import {INPUT_SEARCH, SECTION_SEARCH_RESULT} from "../constants/constants";

export default class DataStorage {
    constructor() {

    }

    sendData(word, data) {
        const res = JSON.stringify(data);
        localStorage.clear();
        localStorage.setItem('res', res);
        localStorage.setItem('query', word);
    }

    onload() {
        if (localStorage.getItem('res') !== null) {
            INPUT_SEARCH.value = localStorage.getItem('query');
            const cardsData = JSON.parse(localStorage.getItem('res'));
            SECTION_SEARCH_RESULT.style = 'display: flex;';
            this.checkResults(cardsData.articles);
        }
    }
}