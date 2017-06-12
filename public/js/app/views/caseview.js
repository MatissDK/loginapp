var Backbone = require('backbone');
var _ = require('underscore');

var CaseView = Backbone.View.extend({

    tagName: 'li',
    className: 'case',

    template: _.template($('#myTemplate').html()),

    render: function() {
        console.log('MODEL', this.model.toJSON());
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

module.exports = CaseView;