async function connect() {
    if (global.connection)
        return global.connection;

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:Fibonacci@localhost:3306/Node");

    global.connection = connection;

    return connection;
}

async function listTechnologies() {
    const conn = await connect();
    const [rows] = await conn.query("SELECT Id, Name FROM Technology;");
    return rows;
}

module.exports = { listTechnologies }