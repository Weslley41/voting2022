const sqlite3 = require("./database.js");

function getData(sql) {
    return new Promise((resolve) => {
        sqlite3.db.all(
            sql, (errors, rows) => {
                if (errors) {
                    throw Error(errors.message);
                }
                resolve(rows);
            }
        );
    });
}

module.exports = { getData };
