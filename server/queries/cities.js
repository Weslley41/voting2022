const { getData } = require("./getData.js");

async function searchByCity(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name;
    // The fields 'cand_status' and 'cargo_nome' are inverted in the table
    const sql = `
        SELECT cand_nome, cand_status AS 'cargo_nome' , cand_votos, cargo_nome AS 'cand_status'
        FROM votos_cand_municipio
        WHERE muni_nome = '${name}'
        ORDER BY cand_votos DESC
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
