const app = require('./config/server');

require('./app/routes/homeRoute')(app);

require('./app/routes/technologyRoute')(app);

app.listen(3000, function () {
    console.log('Start Server');
});