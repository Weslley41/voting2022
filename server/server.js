var express = require('express');
const { searchCandidates } = require('./queries');

var app = express();
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/candidates', searchCandidates);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
