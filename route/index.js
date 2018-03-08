var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render("home", {title: 'Home'});
});

router.get('/contact', function(req, res, next){
   res.render('contact', {title: "Contact"});
});

router.get('/about', function(req, res, next){
   res.render('about', {title: "About-Us"});
});


module.exports = router;
