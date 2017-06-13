var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('./app/router/routes');

// var CaseView = require('./app/views/caseview');
// var CasesView = require('./app/views/casesview');
// var Case = require('./app/models/case');
// var CaseCollection = require('./app/collections/casecollection');
// var Grid = require('./app/views/table');


$(function() {
    new Router();
    Backbone.history.start({pushState: true});
});
