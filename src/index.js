import './styles/style.css';
import {
    CARD_CONTAINER,
    API_KEY,
    BASE_URL,
} from './js/constants/constants';
import NewsCard from "./js/components/NewsCard";
import NewsCardList from "./js/components/NewsCardList";
import NewsApi from "./js/modules/NewsApi";
import SearchInput from "./js/components/SearchInput";

const cardList = new NewsCardList(CARD_CONTAINER, new NewsCard());
const apiCard = new NewsApi(BASE_URL, API_KEY);
const searchInput = new SearchInput(cardList, apiCard);

searchInput.onload();