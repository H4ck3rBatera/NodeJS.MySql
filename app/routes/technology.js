module.exports = function (app) {
    app.get('/technology', function (req, res) {
        res.render("section/technology");
    });
}