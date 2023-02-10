var express = require('express');
const { searchCandidates } = require('./queries/candidates');
const { searchByCity, getCitiesList } = require('./queries/cities');
const { searchByOffice, getOfficesList } = require("./queries/offices");

var app = express();
var host = 'localhost';
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/candidates', searchCandidates);
app.get('/offices', searchByOffice);
app.get('/cities', searchByCity);
app.get('/list/offices', getOfficesList);
app.get('/list/cities', getCitiesList);

app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});
