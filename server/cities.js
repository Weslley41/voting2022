const sqlite3 = require('./database.js');

function searchCities(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const name = request.query.name;
    const sql = `
        SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_municipio
        WHERE muni_nome = '${name}'
    `;

    console.log(sql);

    sqlite3.db.all(
        sql, (errors, rows) => {
            if (errors) {
                throw Error(errors.message);
            }

            response.json(rows);
        }
    );
}

function getCitiesList(request, response) {
    response.header("Access-Control-Allow-Origin", "http://localhost:8000");

    const sql = `
        SELECT id, nome FROM municipio
        ORDER BY nome
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

module.exports = { searchCities, getCitiesList }
