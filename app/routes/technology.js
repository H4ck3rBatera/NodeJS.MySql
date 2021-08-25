const technologies = require('../../data/technologies');

module.exports = function (app) {
    app.get('/technology', async function (req, res) {
        const listTechnologies = await technologies.listTechnologies();

        res.send(listTechnologies);
    });
}