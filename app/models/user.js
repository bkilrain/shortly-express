var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link.js');
var crypto = require('crypto');

var User = db.Model.extend({
  
  tableName: 'users',

  links: function() {
    return this.hasMany(Link);
  },

  // initialize: function() {
  //   console.log('<_______________________________>')
  //   this.on('creating', function(model, attrs, options) {
  //     console.log('model', model, 'attrsHERE', attrs, 'options', options)
  //   });
  // }

});



module.exports = User;