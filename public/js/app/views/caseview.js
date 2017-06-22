var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var CaseView = Backbone.View.extend({
    tagName: 'tr',

    render: function() {
        var template = _.template($('#myTemplate').html());
        console.log(this.model.toJSON());
        this.$el.html(template(this.model.toJSON()));
        return this;
    }
});

module.exports = CaseView;