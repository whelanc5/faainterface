'use strict';
module.exports = function(app) {
	
	/*
		FixRoutes are where the restful calls are defined.
		These routes are protected by the passport authentication, so they're unaccessible until a client logs in.
	*/
    var passport = require('passport');
	var passportLocal = require('passport-local');
	var passportHttp = require('passport-http');
	var bodyParser = require('body-parser');
	var cookieParser = require('cookie-parser');
	var expressSession = require('express-session');
    var request = require('request');	
	app.set('view engine', 'ejs');
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(cookieParser());
	app.use(expressSession({
		secret: 'secret',
		resave: false,
		saveUninitialized: false
		}));
		
	app.use(passport.initialize());
	app.use(passport.session());
	
	passport.use(new passportLocal.Strategy(function(username, password, done){
		if(username === password) {
			done(null,{id: username, name: username});
		} else{
			done(null,null);
		}
	}));
	passport.serializeUser(function(user, done){
		done(null, user.id);
	});
	passport.deserializeUser(function(id,done){
	done(null, {id: id, name:id });
	});
    app.get('/', function(req, res){
		res.render('cesium', {
			isAuthenticated: req.isAuthenticated(),
			user: req.user
	});
}); 
function ensureAuthenticated(req,res, next){
		if(req.isAuthenticated()){
			next();
		} else {
			res.redirect('/login');
		}
	}
	app.get('/login', function(req, res) {
		res.render('index');
	});
	app.post('/login', passport.authenticate('local'), function(req, res){
		res.redirect('/');
	});
	
	
	
//imports the database queries defined in FixController
  var fixes = require('../controllers/FixController');

  /*
	These are the restAPI endpoints.
*/
  //Returns all fixes
  app.route('/fixes')
    .get(ensureAuthenticated, fixes.list_all_fixes);
 
//Returns fixes based on multiple params. Fixname, FixCode, and FixType
 app.route('/fixByMulti/:FixName/:FixCode/:FixType')
    .get(ensureAuthenticated, fixes.read_a_fixByMulti);
	
//Returns fixes based on FixType(waypoint, tacan, vor)
 app.route('/fixByType/:FixType')
    .get(ensureAuthenticated, fixes.read_a_fixByType);

//Returns fixes based on FixName
 app.route('/fixByName/:FixName')
    .get(ensureAuthenticated, fixes.read_a_fixByName);
//Returns fixes based on FixCode (key.icaoCode)
 app.route('/fixByCode/:FixCode')
    .get(ensureAuthenticated, fixes.read_a_fixByCode);
};
