var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose =require('mongoose');

mongoose.connect("mongodb://localhost/booklib");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));


//this is to help in getting templates from the VIEWS folder
app.engine('pug', require('pug').__express)       
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');


var routes = require("./route/index");
app.use('/', routes);


app.listen(3000, function (){
    console.log("Listening to this App @ 3000");
});
