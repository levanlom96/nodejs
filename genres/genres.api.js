const Genres = require('./genres');
const genres = new Genres();

module.exports = function (app) {
    app.get('/api/genres', (req, res) => {
        res.send(genres.getAll());
    });

    app.get('/api/genres/:id', (req, res) => {

        const item = genres.getById(req.params.id);

        if (item) {
            res.send(item);
        } else {
            res.status(404).send({ message: `Item with id:${req.params.id} is not found` });
        }
    });

    app.post('/api/genres', (req, res) => {
        const name = req.body.name;
        const newGenre = genres.post(name);

        if (newGenre) {
            res.send(newGenre);
        } else {
            res.status(400).send({ message: 'Failed to Crete Genre' });
        }
    });

    app.put('/api/genres/:id', (req, res) => {
        const name = req.body.name;
        const id = req.params.id;

        const updatedGenre = genres.put(id, name);

        if (updatedGenre) {
            res.send(updatedGenre);
        } else {
            res.status(400).send({ message: 'Failed to Update Genre' });
        }
    });

    app.delete('/api/genres/:id', (req, res) => {
        const id = req.params.id;
        const status = genres.delete(id);

        if (status) {
            res.send({ message: 'Item succesfully deleted' });
        } else {
            res.status(400).send({ message: 'Failed to delete Genre' });
        }
    });
}