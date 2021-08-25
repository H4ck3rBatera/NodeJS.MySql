const repository = require('../../data/technologyRepository');

module.exports = function (app) {
    app.get('/technology', async function (req, res) {
        const list = await repository.list();

        res.render("technology/listView", { list: list });
    });
}