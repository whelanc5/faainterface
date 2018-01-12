'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
	Allows you to set default values, and selects the collection being used.
*/
var FixSchema = new Schema({
/*  fixName: {
    type: String,
    required: 'Kindly enter the name of the fix'
  },
   Lat: {
    type: String,
    default: 0
  },
  Lon: {
    type: String,
    default: 0
  },
  key: {icoaCode: {
    type: String,
    default: 0
  }
  },
  fixType: {
    type: String,
    default: 'WAYPOINT'
  }  */
}, { collection : 'fixes' });
	
var FixDocumentSchema = new Schema({
  name: {
    type: String,
    required: 'needs a name'
  },
  fix: {
    type: [FixSchema]
  }  
}, { collection : 'fixes' });

module.exports = mongoose.model('Fixes', FixSchema);