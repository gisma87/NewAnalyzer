import {
    FORM_SEARCH,
    FROM,
    INPUT_SEARCH,
    SECTION_ERROR_SEARCH,
    SECTION_NOT_FOUND,
    SECTION_PRELOADER,
    SECTION_SEARCH_RESULT,
    TO,
    ERROR_INPUT
} from "../constants/constants";

export default class SearchInput {
    constructor(classCardList, classApiCard) {
        this.classCardList = classCardList;
        this.classApiCard = classApiCard;

        FORM_SEARCH.addEventListener('submit', this.search.bind(this));
    }


    search(event) {
        event.preventDefault();
        if (this.validateInput()) {
            localStorage.clear();
            this.classCardList.clear();
            SECTION_SEARCH_RESULT.style = 'display: none;';
            SECTION_NOT_FOUND.style = 'display: none;';
            SECTION_PRELOADER.style = 'display: flex;';

            this.classApiCard.getNews(FROM.toISOString(), TO.toISOString(), INPUT_SEARCH.value)
                .then(result => {
                    console.log(result.articles);
                    this.checkResults(result.articles);
                    this.sendData(INPUT_SEARCH.value, result);
                    SECTION_PRELOADER.style = 'display: none;';
                })
                .catch(err => {
                    console.log(`Ошибка: ${err}`);
                    SECTION_PRELOADER.style = 'display: none;';
                    SECTION_ERROR_SEARCH.style = 'display: flex;';

                })
        } else {
            SECTION_PRELOADER.style = 'display: none;';
            SECTION_SEARCH_RESULT.style = 'display: none;';
        }
    }

    checkResults(result) {
        if (result.length == 0) {
            localStorage.clear();
            SECTION_NOT_FOUND.style = 'display: flex;';
            SECTION_SEARCH_RESULT.style = 'display: none;';
        } else {
            SECTION_NOT_FOUND.style = 'display: none;';
            SECTION_SEARCH_RESULT.style = 'display: flex;';
            this.classCardList.render(result);
        }
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

    validateInput() {
        if (INPUT_SEARCH.value === '') {
            ERROR_INPUT.textContent = "Нужно ввести слово для поиска";
            // SECTION_PRELOADER.style = 'display: none;';
            return false;
        } else {
            ERROR_INPUT.textContent = '';
            return true;
        }
    }

}
