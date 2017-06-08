var Backbone = require('backbone');
var Case = require('./../models/case');

var AddCasesView = Backbone.View.extend({
    events: {
        'submit form' : 'addMessage'
    },

    initialize: function(opts) {
        console.log(opts);
        this.collection = opts.collection;
    },

    getAttributes: function() {
        return {
            'Title': this.$('#message').val()
        }
    },

    addMessage: function (ev) {
        ev.preventDefault();

        var title = this.getAttributes();
        console.log('Title', title);
        if(title.Title != '')
        {
            var mycase = new Case(this.getAttributes());

            this.collection.add(mycase);

            this.$('#message').val('');
        }

    }
});

module.exports = AddCasesView;