class Model {
    constructor() {
        this.apiURL = 'https://rickandmortyapi.com/api/character';
    }

    async fetchCharacters() {
        const response = await fetch(this.apiURL);
        const data = await response.json();
        return data.results;
    }
}
