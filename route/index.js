var express = require('express');
var routes = express.Router();
var mysql = require ('mysql');
var bcrypt = require('bcrypt');

//route for login form using .GET
routes.get('/login', function(req, res, next){
    return res.render("login", {title:"LogIn"});
});

//route for login using .post
routes.post("/login", function(req, res, next){
    if(req.body.Email && req.body.password ){

// exports.login = function(req,res){
//   var email= req.body.email;
//   var password = req.body.password;
  connection.query('SELECT * FROM register_form WHERE Email = ?',[UserData], function (error, results, fields) {
  if (error) {
    // console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results);
    if(results.length >0){
      if([0].password == password){
        res.send({
          "code":200,
          "success":"login sucessfull"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"Email and password does not match"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }
  }
  });
// }

    } else{
        var err = new Error("Email & Password are required!");
        err.status = 401;
        return next(err);
    }
});

//Connecting to the database App_db
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'App_db'
});
routes.get('/register', function(req, res, next){
   return res.render("register", {title: "Register"});
    // return res.send('register hia!'); 
});

routes.post('/register', function(req, res, next){
    //To all fields are filled
    if (req.body.Email && 
    req.body.Name &&
    req.body.FavoriteBook &&
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
            FavoriteBook : req.body.FavoriteBook,
            password : req.body.password
    }

connection.query("INSERT INTO `register_form` SET ?", UserData, function(err,results){

  if(err) {
    return console.log(err.message);
  }  
    });
     } else{
         //Error created to ensure all fields are filled...
        var err = new Error('All fields required to be filled....');
        err.status = 400;
        return next(err);
    }

    return res.redirect("/profile");
});

//To take user's to the home page when Home button is clicked on the nav
routes.get('/', function(req, res, next){
    return res.render("home", {title: 'Home'});
});

//To get user to his/her profile
routes.get('/profile', function(req, res, next){
    return res.render("profile", {title: 'Profile'});
});

//To get user to the Contact page 
routes.get('/contact', function(req, res, next){
   return res.render('contact', {title: "Contact"});
});

routes.get('/about', function(req, res, next){
   return res.render('about', {title: "About-Us"});
});


module.exports = routes;


// exports.login = function(req, res){
//    var message = '';
//    var sess = req.session; 
 
//    if(req.method == "POST"){
//       var post  = req.body;
//       var name= post.user_name;
//       var pass= post.password;
     
//       var sql="SELECT id, first_name, last_name, user_name FROM `users` WHERE `user_name`='"+name+"' and password = '"+pass+"'";                           
//       db.query(sql, function(err, results){      
//          if(results.length){
//             req.session.userId = results[0].id;
//             req.session.user = results[0];
//             console.log(results[0].id);
//             res.redirect('/home/dashboard');
//          }
//          else{
//             message = 'Wrong Credentials.';
//             res.render('index.ejs',{message: message});
//          }
                 
//       });
//    } else {
//       res.render('index.ejs',{message: message});
//    }         
// };