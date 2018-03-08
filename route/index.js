var express = require('express');
var routes = express.Router();
// var exports = module.exports = {};

routes.get('/register', function(req, res, next){
   //return res.render("register", {title: "Register"});
    return res.send('register hia!');
});

routes.post('/register', function(req, res, next){
   return res.send('User Created!');
});

routes.get('/', function(req, res, next){
    return res.render("home", {title: 'Home'});
});

routes.get('/contact', function(req, res, next){
   return res.render('contact', {title: "Contact"});
});

routes.get('/about', function(req, res, next){
   return res.render('about', {title: "About-Us"});
});


module.exports = routes;
