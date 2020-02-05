const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hey, I am server response')
})

app.get('/movie/:title', function (req, res) {
    const { title } = req.params;
    res.send(`My favorite movie is ${title}`);
})

const port = 3000;
app.listen(port, () => console.log(`Server is on PORT :  ${port}!`))

module.exports = app;
