const sqlite3 = require('./database.js');

function searchCandidates(request, response) {
    const name = request.body.name.toUpperCase();

    const sql = `
        SELECT cand_nome AS name, cargo_nome AS office, cand_votos AS votes
        FROM votos_cand_estado
        WHERE cand_nome LIKE '%${name}%'
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

module.exports = { searchCandidates };
