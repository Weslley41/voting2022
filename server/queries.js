const sqlite3 = require('./database.js');

function getData(sql) {
    sqlite3.db.all(
        sql, (errors, rows) => {
            if (errors) {
                throw Error(errors.message);
            }

            return rows;
        }
    );
}

module.exports = { getData };

/*

CARGO:
SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cargo_nome LIKE '%${name}%'

MUNICIPIO:
SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_municipio
        WHERE muni_nome LIKE '%${name}%'
ULTIMA LINHA: TOTAL DE VOTOS DO MUNICIPIO

RESULTADO GERAL:
SELECT cand_nome, cargo_nome, cand_votos, cand_status
        FROM votos_cand_estado
        WHERE cand_status = 1'
ULTIMA LINHA: TOTAL DE VOTOS DO MUNICIPIO
*/
