var Backbone = require('backbone');
var Case = require('./../models/case');

var CaseCollection = Backbone.Collection.extend({
    model: Case,
    url: 'sub/getCase'
});

module.exports = CaseCollection;