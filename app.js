var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send("home/index");
});

app.get('/technology', function(req, res){
    res.render("section/technology");
});

app.listen(3000, function(){
    console.log('Init Express');
});