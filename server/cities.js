const { getData } = require("./queries.js");

async function searchByCity(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name;
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_municipio
        WHERE muni_nome = '${name}'
    `;

    let data = await getData(sql);
    response.json(data);
}

async function getCitiesList(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const sql = `
        SELECT id, nome FROM municipio
        ORDER BY nome
    `;

    let data = await getData(sql);
    response.json(data);
}

module.exports = { searchByCity, getCitiesList };
