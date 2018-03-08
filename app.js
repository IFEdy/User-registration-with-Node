var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/public'));
                       
app.set('view engine', 'pug');
app.set('views', __dirname + '/view');

var routes = require("./route/index");
app.use('/', routes);


app.listen(3000, function (){
    console.log("Listening to this App @ 3000");
});
