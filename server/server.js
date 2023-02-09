var express = require('express');
const { searchCandidates } = require('./candidates');
const { searchCities, getCitiesList} = require('./cities');
const { searchOffices, getOfficesList } = require('./offices');

var app = express();
var host = 'localhost';
var port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/candidates', searchCandidates);
app.get('/offices', searchOffices);
app.get('/cities', searchCities);
app.get('/list/offices', getOfficesList);
app.get('/list/cities', getCitiesList);

app.listen(port, host, () => {
    console.log(`Server listening on http://${host}:${port}`);
});
