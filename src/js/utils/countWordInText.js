import {WORD} from "../constants/constants";

export {countWordInText}

const countWordInText = function (arr) {
    let countWordInText = 0;
    arr.forEach((item, i) => {
        if (arr[i].description) {
            if (arr[i].description.toLowerCase().includes(WORD.toLowerCase())) {
                countWordInText++;
            }
        }
    });
    return countWordInText;
}