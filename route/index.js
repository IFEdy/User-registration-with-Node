var express = require('express');
var routes = express.Router();
var mysql = require ('mysql')
// var exports = module.exports = {};

routes.get('/register', function(req, res, next){
   return res.render("register", {title: "Register"});
    // return res.send('register hia!');
});

routes.post('/register', function(req, res, next){
//    return res.send('User Created!');
    //To all fields are filled
    if (req.body.Email && 
    req.body.Name &&
    req.body.FavouriteBook &&
    req.body.password &&
    req.body.confirmpassword
    ){
        //to check if both password and confirm password are same
        if( req.body.password !== req.body.confirmpassword){
            var err = new Error('Passwords do not match');
            err.status = 400;
            return next(err);
        }
        //creating a variable that stores user's data
        var UserData ={
            Email : req.body.Email,
            Name : req.body.Name,
            FavouriteBook : req.body.FavouriteBook,
            password : req.body.password
        }

     } else{
         //Error created to ensure all fields are filled...
        var err = new Error('All fields required to be filled....');
        err.status = 400;
        return next(err);
    }
});

//To take user's to the home page when Home button is clicked on the nav
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
