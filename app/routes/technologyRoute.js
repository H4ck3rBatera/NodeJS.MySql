const repository = require('../../data/technologyRepository');

module.exports = function (app) {
    app.get('/technology', async function (req, res) {
        const listTechnologies = await repository.listTechnologies();

        res.send(listTechnologies);
    });
}