
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (_, response) => {
    response.send('Hey, I am server response');
});

app.get('/movie/:title', (request, response) => {
    response.send(`My favorite movie is ${request.params.title}`);
});

app.get('*', (request, response) => {
    response.status(404).send(`${request.originalUrl} does not exist!`);
});

app.listen(port, () => console.log(`Server listening on port: ${port}!`));

module.exports = app;
