const { getData } = require('./queries.js');

async function searchCandidates(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name.toUpperCase();
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cand_nome LIKE '${name}%'
        ORDER BY cand_votos DESC
    `;

    let data = await getData(sql);
    response.json(data);
}

module.exports = { searchCandidates }
