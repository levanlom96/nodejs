const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3200;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.use((req, res, next) => {
    console.log(req.body);
    next();
});

app.use((req, res, next) => {
    console.log('Authanticating...');
    next();
});

require('./genres/genres.api')(app);

app.listen(port, () => {
    console.log(`Server is listening to port ${port}...`);
});