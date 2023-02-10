const { getData } = require('./queries.js');

async function searchByOffice(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name;
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cargo_nome = '${name}'
        ORDER BY cand_votos DESC
    `;

    let data = await getData(sql);
    response.json(data);
}

async function getOfficesList(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const sql = `
        SELECT id, nome FROM cargo
        ORDER BY nome
    `;

    let data = await getData(sql);
    response.json(data);
}

module.exports = { searchByOffice, getOfficesList }
