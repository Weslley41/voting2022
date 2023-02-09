const sqlite3 = require('./database.js');

function searchCandidates(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name.toUpperCase();
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cand_nome LIKE '${name}%'
    `;

    sqlite3.db.all(
        sql, (errors, rows) => {
            if (errors) {
                throw Error(errors.message);
            }

            response.json(rows);
        }
    );
}

module.exports = { searchCandidates }
