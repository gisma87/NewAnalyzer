import {
    WEEK_IN_DAYS,
    DAY_IN_MS,
    PERCENT_IN_TABLE
} from '../constants/constants';

export default class DataGraph {
    constructor(res) {
        this.res = res;
    }

// создаёт массив дат, состоящий из WEEK_IN_DAYS элементов и заканчивающийся датой dateNow
    getDates(dateNow) {
        const dates = [dateNow];

        for (let i = 1; i < WEEK_IN_DAYS; i++) {
            dates.unshift(new Date(dateNow - DAY_IN_MS * i));
        }

        return dates.map(item => {
            return `${item.toLocaleString("ru", {day: "numeric"})}, ${item.toLocaleString("ru", {weekday: 'short'})}`;
        })
    }

    // вставляет данные из массива datesShort в массив DOM-элементов DAY_IN_TABLE через textContent
    renderDatesGraph(datesShort, DAY_IN_TABLE) {
        DAY_IN_TABLE.forEach((item, i) => {
            item.textContent = datesShort[i];
        });
    }

    // Возвращает массив из дат полученных из res.articles в формате [{day: "numeric", weekday: 'short'}]
    cardDates() {
        this.res.articles.forEach(item => {
            item.publishedAt = new Date(item.publishedAt)
        });
        return this.res.articles.map(item => {
            item.publishedAt = `${item.publishedAt.toLocaleString("ru", {day: "numeric"})}, ${item.publishedAt.toLocaleString("ru", {weekday: 'short'})}`
            return item.publishedAt
        })
    }
// проходит по массиву cardsDates находит повторяющиеся элементы datesShort[i] и отрисовыввает шкалу в PERCENT_IN_TABLE основываясь на length текущей итерации
    renderGraph(cardsDates, datesShort) {
        for (let i = 0; i < WEEK_IN_DAYS; i++) {
            const a = cardsDates.filter(item => {
                return item === datesShort[i]
            })
            PERCENT_IN_TABLE[i].textContent = a.length;
            PERCENT_IN_TABLE[i].style.width = `${a.length}%`;
        }
    }
}