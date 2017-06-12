var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var CaseView = Backbone.View.extend({

    tagName: 'tr',
    //template: _.template($('#myTemplate').html()),

    render: function() {

        var template = _.template($('#myTemplate').html());
        //var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(template(this.model.toJSON()));

        // console.log('MODEL', this.model.toJSON());
        // this.$el.html(this.model.get('apsudzetais'));
        return this;
    }
});

module.exports = CaseView;