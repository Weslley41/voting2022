var sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('server/data/eleicoes2022-pi.db', (error) => {
    if(error) {
        throw Error(error.message)
    }
})

module.exports = { db };
