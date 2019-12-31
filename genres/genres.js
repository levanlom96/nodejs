class Genres {
    constructor() {
        this.genres = [
            { id: 1, name: 'Action' },
            { id: 2, name: 'Comedy' },
            { id: 3, name: 'Fiction' },
        ];
    }

    getAll() {
        return this.genres;
    }

    getById(id) {
        const genre = this.genres.find(item => parseInt(item.id) === parseInt(id));
        return genre ? genre : null;
    }

    post(name) {
        return this.createNewGenre(name);
    }

    put(id, name) {
        const genre = this.getById(id);

        if (genre && name) {
            genre.name = name;
        }

        return genre ? genre : null;
    }

    delete(id) {
        const genre = this.getById(id);
        const index = this.genres.indexOf(genre);

        if (index !== -1) {
            this.genres.splice(index, 1);
            return true;
        }

        return false;
    }

    createNewGenre(name) {
        const genre = { id: this.getNextItemId(), name: name ? name : '' };
        this.genres.push(genre);
        return genre;
    }

    getNextItemId() {
        let max = 0;
        this.genres.forEach(element => {
            if (parseInt(element.id) > max) {
                max = parseInt(element.id);
            }
        });

        return max + 1;
    }
}

module.exports = Genres;