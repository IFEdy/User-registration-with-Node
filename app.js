var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var router = require(".../route/index.js");


app.listen(3000, function (){
    console.log("Listening to this App @ 3000");
});
