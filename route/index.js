var express = require('express');
var router = express.Router();


router.get('/register', function(req, res, next){
   //return res.render("register", {title: "Register"});
    return res.send('register hia!');
});

router.post('/register', function(req, res, next){
   return res.send('User Created!');
});

router.get('/', function(req, res, next){
    return res.render("home", {title: 'Home'});
});

router.get('/contact', function(req, res, next){
   return res.render('contact', {title: "Contact"});
});

router.get('/about', function(req, res, next){
   return res.render('about', {title: "About-Us"});
});


module.exports = router;
