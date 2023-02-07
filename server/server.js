var express = require('express');
const { searchCandidates } = require('./queries');

var app = express();
var host = 'localhost';
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/candidates', searchCandidates);

app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});
