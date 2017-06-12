var Backbone = require('backbone');
var History = require('./../models/history');

var HistoryCollection = Backbone.Collection.extend({
  model: History,
  url: 'sub/getCase'
});

module.exports = HistoryCollection;