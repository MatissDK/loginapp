var Backbone = require('backbone');

var Subscription = Backbone.Model.extend({
  defaults: {
    apsudzetais : "case1",
    laiks: 123
  }

});

module.exports = Subscription;