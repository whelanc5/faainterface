/*
	FixController defines the queries that will go to the mongo database and grab the requested fixes. 
	@Author: Chris Whelan
*/
'use strict';
//import for mongoose, which is used to handle the mongo queries
var mongoose = require('mongoose'),

  Fixes = mongoose.model('Fixes');
 /*
  LRU-cache is used for cache. Currently will cache 50 queries
 */
 var LRU = require("lru-cache")
  , options = { max: 50
              , length: function (n, key) { return n * 2 + key.length }
              , dispose: function (key, n) {  }
              , maxAge: 1000 * 60 * 60 }
  , cache = LRU(options)

//this query will grab every fix in the db
exports.list_all_fixes = function(req, res) {	
	
	if(cache.get("fixes") != null){
		res.status(200).send(cache.get("all_fixes"));
		
	}else {
	Fixes.find({}, function (err, fixes) {
        if (err) return res.status(500).send("There was a problem finding the fixes.");
        cache.set("fix",fixes);
		res.status(200).send(fixes);
    });}
}	;			

//this query will grab fixes by fixType.
exports.read_a_fixByType = function(req, res) {
	Fixes.find({'fixType' : req.params.FixType}, function (err, fixes) {
        if (err) return res.status(500).send("There was a problem finding the fixes.");
        res.status(200).send(fixes);
    });
}	;		

//this query will grab fixes by fixName.
exports.read_a_fixByName = function(req, res) {
	Fixes.find({'fixName' :  { $regex: req.params.FixName  }}, function (err, fixes) {
        if (err) return res.status(500).send("There was a problem finding the fixes.");
        res.status(200).send(fixes);
    });
}	;	

//this query will grab fixes by icaoCode.
exports.read_a_fixByCode = function(req, res) {	
	Fixes.find({ 'key.icaoCode' : req.params.FixCode}, function (err, fixes) {
        if (err) return res.status(500).send("There was a problem finding the fixes.");
        res.status(200).send(fixes);
    });
}	;		

/*
	this query will grab fixes from multiple paramters. If an underscore is passed it is set to empty string, which is then passed into the query. Regex operators are used for each of the paramters, so any results containing the parameter will be returned.
*/
exports.read_a_fixByMulti = function(req, res) {
	var str = new String();
	str = req.params.FixName + req.params.FixType + req.params.FixCode;
	console.log(str);
	
	if (req.params.FixCode == '_'){
		req.params.FixCode = "";
	}
	if (req.params.FixName == '_'){
		req.params.FixName = "";
	}
	if (req.params.FixType == '_'){
		req.params.FixType = "";
	}
	//check to see if this query is cached. If it is cached, grab it, if not perform the query
	 var cached = cache.get(str);
	if (cached != null){
		console.log("from Cache");
		
		res.status(200).send(cached);		
		
	}else{
		Fixes.find({'fixName' :  { $regex: req.params.FixName  }, 'key.icaoCode' : { $regex: req.params.FixCode}, 'fixType' : { $regex: req.params.FixType }}, function (err, fixes) {
        if (err) return res.status(500).send("There was a problem finding the fixes.");
		// if the returned query contains more then 1000 items the query is cached.
		if(fixes.length > 1000){
			cache.set(str,fixes);
			
		}
		console.log(fixes.length);
        res.status(200).send(fixes);
    });
	}
	};




