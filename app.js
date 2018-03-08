var express = require('express');
var app = express.app;

function(req, res){
    res.send("We are on Express");

};

app.listen(3000, function (){
    console.log("Listening to this App @ 3000");
});
