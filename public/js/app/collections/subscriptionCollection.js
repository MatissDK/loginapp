var Backbone = require('backbone');
var Subscription = require('./../models/subscription');

var SubscriptionsCollection = Backbone.Collection.extend({
  model: Subscription,
  url: 'sub/getCase'
});

module.exports = SubscriptionsCollection;