var Backbone = require('backbone');

var Case = Backbone.Model.extend({
    defaults: {
        apsudzetais : "case1",
        laiks: 123
    }

});

module.exports = Case;