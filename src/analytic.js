import './styles/analytic.css';
import {
    RES_LOCAL_STORAGE,
    WORD,
    WORD_QUERY,
    TOTAL_RESULT,
    SUM_WORD_IN_TITLE,
    MONTH,
    MONTHS_ARRAY,
    DAY_IN_TABLE,
    DATE_NOW
} from './js/constants/constants';
import {countWordInTitle} from "./js/utils/countWordInTitle";
import Statistics from "./js/components/Statistics";

// определяем текущий месяц
function searchMonth(res) {
    const date = new Date(res[0].publishedAt.slice(0, 10));
    return MONTHS_ARRAY[date.getMonth()];
}

// отображаем искомое слово
WORD_QUERY.textContent = WORD;

// отображаем количество статей за неделю
TOTAL_RESULT.textContent = RES_LOCAL_STORAGE.totalResults;

// отображаем количество упоминаний в заголовках
let arr = RES_LOCAL_STORAGE.articles;
SUM_WORD_IN_TITLE.textContent = countWordInTitle(arr);


// вписываем в таблицу текущий месяц
MONTH.textContent = "(" + searchMonth(RES_LOCAL_STORAGE.articles) + ")";

// создаём экземпляр класса графической таблицы 'аналитика по дням'
const statistics = new Statistics(RES_LOCAL_STORAGE);

// получаем массив дат за последнюю неделю
const datesShort = statistics.getDates(DATE_NOW);

// вписываем даты в таблицу за последнюю неделю
statistics.renderDatesGraph(datesShort, DAY_IN_TABLE);

// получаем массив дат из всех найденных новостей
const cardsDates = statistics.cardDates();

// отрисовываем шкалы новостей по дням за последнюю неделю
statistics.renderGraph(cardsDates, datesShort);
