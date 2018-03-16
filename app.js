var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
var mysql = require("mysql");

//using the session module to track logins
app.use(session({
  secret: "My Node App",    //this is use to sign the session id into the cookie 
  resave: true,   //this forces the session to be saved in the session store if anything change or not
  saveUninitialized: false  //this forses all uninitialised sessions to be saved in the session store
}));

var con = mysql.createConnection({
  host: 'localhost',
  post: '3000',
  user: 'root',
  password: '',
  database: 'App_db'
});

con.connect(function(err) {
  if (err) return err;
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

// INSERT INTO `register_form` (`id`, `Name`, `Email`, `Favorite Book`, `password`, `confirm password`) VALUES (NULL, 'asdedxh', 'adeyemiife@ymail.com', 'jesus', 'nmnmnm', 'nmnmnm');

//UPDATE `register_form` SET `Name` = 'vhfhjjgv', `Email` = 'adeyemiife@ymail.com', `FavoriteBook` = 'khghkggkhk', `password` = 'mmm', `confirmpassword` = 'mmm' WHERE `register_form`.`id` = 4;