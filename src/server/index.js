const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const game = {
    field: [
        [1,0,0,0,0,0],
        [2,1,0,0,0,0],
        [2,1,0,0,0,0],
        [1,2,1,0,0,0],
        [0,0,0,0,0,0],
        [2,0,0,0,0,0],
        [1,1,0,0,0,1],
    ],
    currentPlayer: 1
};

app.get('/info', function (req, res) {
    res.send(game);
});

app.post('/move', function (req, res) {
    //req.body
    res.send('ok');// подключить reqParser
});

app.listen(4000);