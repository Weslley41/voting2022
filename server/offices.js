const sqlite3 = require('./database.js');

function searchOffices(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name;
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cargo_nome = '${name}'
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

function getOfficesList(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const sql = `
        SELECT id, nome FROM cargo
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

module.exports = { searchOffices, getOfficesList }
