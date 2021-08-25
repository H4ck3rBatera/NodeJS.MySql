const dbConnection = require('../config/dbConnection');

async function list() {
    const connection = await dbConnection();

    const [rows] = await connection.query("SELECT Id, Name FROM Technology;");
    return rows;
}

module.exports = { list }