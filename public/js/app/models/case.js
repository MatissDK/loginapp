var Backbone = require('backbone');

var Case = Backbone.Model.extend({
    defaults: {
        Title : 'default',
        Status: 'done'
    }

});

module.exports = Case;