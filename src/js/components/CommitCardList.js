export default class CommitCardList {
    constructor(container, commitElement) {
        this.container = container;
        this.commitElement = commitElement;
    }

    render(commits) {
        for (let i = 0; i < 20; i++) {
            if (commits[i].commit != null) {
                const commit = this.commitElement.create(commits[i].commit.committer.date, commits[i].author.avatar_url, commits[i].commit.committer.name, commits[i].commit.committer.email, commits[i].commit.message);
                this.container.appendChild(commit);
            }
        }
    }


}