import {WORD} from "../constants/constants";

export {countWordInObjects}

const countWordInObjects = function (arr, field) {
    let sumWords = 0;
    arr.forEach((item, i) => {
        if (arr[i][field]) {
            if (arr[i][field].toLowerCase().includes(WORD.toLowerCase())) {
                sumWords++
            }
        }
    });
    return sumWords;
}