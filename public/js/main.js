// var CaseView = require('./app/views/caseview');
// var CasesView = require('./app/views/casesview');
// var Case = require('./app/models/case');
// var CaseCollection = require('./app/collections/casecollection');
var Router = require('./app/router/routes');
// var Grid = require('./app/views/table');
// var $ = require('jquery');
// var _ = require('underscore');

new Router();
Backbone.history.start({pushState: true});