const mysql = require('mysql2/promise');

module.exports = async function () {
    return await mysql.createConnection("mysql://root:Fibonacci@localhost:3306/Node");
};