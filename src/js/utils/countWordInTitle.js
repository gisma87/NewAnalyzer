import {WORD} from "../constants/constants";

export {countWordInTitle}

const countWordInTitle = function (arr) {
    let countWordInTitle = 0;
    arr.forEach((item, i) => {
        if (arr[i].title) {
            if (arr[i].title.toLowerCase().includes(WORD.toLowerCase())) {
                countWordInTitle++;
            }
        }
    });
    return countWordInTitle;
}