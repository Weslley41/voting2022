var express = require('express');

var app = express();
var host = 'localhost';
var port = 8000;

app.use(express.static('client/'));

app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});
