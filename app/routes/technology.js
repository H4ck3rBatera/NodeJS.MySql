module.exports = function (app) {
    app.get('/technology', async function (req, res) {

        const db = require('../../data/db');
        const technologies = await db.listTechnologies();

        res.send(technologies);
    });
}