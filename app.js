var express = require('express');
var app = express();
var bodyparser = require("body-parser");

app.get(function(req, res){
  res.send('this an express app');
});
app.listen(8000, function (){
    console.log("Listening to this App @ 8000");
});
