var Backbone = require('backbone');
var _ = require('underscore');
var CaseView = require('./caseview');
var Case = require('./../models/case');
var CaseCollection = require('./../collections/casecollection');

var CasesView =  Backbone.View.extend({
    initialize: function (opts) {
        this.listenTo(opts.collection, 'add', this.messageAdded)
    },

    messageAdded: function (message) {
        var view = new CaseView({model: message});
        view.render().$el.appendTo(this.$el);
    }
});

module.exports = CasesView;