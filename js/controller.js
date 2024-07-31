class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async init() {
        const characters = await this.model.fetchCharacters();
        this.view.displayCharacters(characters);
    }
}
