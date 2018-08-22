export default class fetchData {
    static fetchGitHubUsers(params) {
        return fetch('https://api.github.com/search/users?q=' + params).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}