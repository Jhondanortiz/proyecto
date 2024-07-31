class View {
    constructor() {
        this.characterList = document.getElementById('character-list');
    }

    displayCharacters(characters) {
        this.characterList.innerHTML = '';
        characters.forEach(character => {
            const characterCard = `
                <div class="col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img src="${character.image}" class="card-img-top" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">Species: ${character.species}</p>
                            <p class="card-text">Status: ${character.status}</p>
                        </div>
                    </div>
                </div>
            `;
            this.characterList.insertAdjacentHTML('beforeend', characterCard);
        });
    }
}
