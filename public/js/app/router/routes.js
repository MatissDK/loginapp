var Backbone = require('backbone');
var Case = require('./../models/case');
var CaseCollection = require('./../collections/casecollection');
var CasesView = require('./../views/casesview');
//var Grid = require('./../views/table');

var Router = Backbone.Router.extend({

    routes: {
        '' : 'home',
        'sub': 'sub',    // #help
        'users/login' : 'login'
        // "search/:query":        "search",  // #search/kiwis
        // "search/:query/p:page": "search"   // #search/kiwis/p7
    },

    sub: function() {

        if(!this.caseListView)
        {
            var myCases = new CaseCollection();
            myCases.fetch();

            this.caseListView = new CasesView({collection: myCases});
            $('#container').append(this.caseListView.render().$el);

        }
        else
        {
            this.caseListView.render();
        }
    },

    home: function () {
        console.log('HOME');
    },
    login: function () {
        console.log('LOGIN');
    }


});

module.exports = Router;