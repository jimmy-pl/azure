const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hola Diners Club del Ecuador!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening at http://0.0.0.0:${port}`);
});

module.exports = app; // Para las pruebas

