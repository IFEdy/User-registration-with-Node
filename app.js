var express = require('express');
var app = express();
var bodyParser = require("body-parser");
// var mongoose =require('mongoose');
// var mongodb = require('mongodb');
var mysql = require("mysql");
//var UserData = require("./route/index");

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'App_db'
});



connection.connect(function(err) {
  if (err) throw err;
  return err;
  
  //console.log('You are now connected...');
  connection.query("INSERT INTO register_form (Email, Name, FavouriteBook, password) VALUES ?",  function (err, result) {
      if (error) {
            console.log(error.message);
        } else {
            return res.redirect("/profile");    
        }
    });


});

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
