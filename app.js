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

//creating a variable that stores user's data
        var UserData ={
            Email : req.body.Email,
            Name : req.body.Name,
            FavouriteBook : req.body.FavouriteBook,
            password : req.body.password
        }
        
connection.connect(function(err) {
  if (err) throw err;
  console.log('You are now connected...');
  connection.query("INSERT INTO register_form (Email, Name, FavouriteBook, password) VALUES ?", [UserData], function (err, result) {
      if (error) {
            console.log(error.message);
        } else {
            console.log('success');    
        }
    });

//    console.log(result);
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
