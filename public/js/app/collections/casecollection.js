var Backbone = require('backbone');
var Case = require('./../models/case');

var CaseCollection = Backbone.Collection.extend({
    model: Case,
    //url: 'http://localhost:4000/todo'
});

module.exports = CaseCollection;