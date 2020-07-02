// Отвечает за взаимодействие с NewsAPI. У класса есть конструктор, принимающий опции и единственный обязательный
// метод getNews. getNews возвращает список новостей на основе запроса.
export default class NewsApi {
    constructor(baseUrl, key) {
        this.baseUrl = baseUrl;
        this.key = key;
    }

    getNews(from, to, query) {
        this.url = `${this.baseUrl}q=${query}&from=${from}&to=${to}&pageSize=100&apiKey=${this.key}&language=ru`;
        return fetch(this.url)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    }
}