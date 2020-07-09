export default class GithubApi {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getCommits() {
        return fetch(this.baseUrl)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            });
    }
}
