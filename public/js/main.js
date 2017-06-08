// var CaseView = require('./app/views/caseview');
var AddCasesView = require('./app/views/addcase');
var CasesView = require('./app/views/casesview');
var Case = require('./app/models/case');
var CaseCollection = require('./app/collections/casecollection');
// var $ = require('jquery');
// var _ = require('underscore');

// window._ = _;
// window.$ = $;

var oneCase = new Case({Title: 'LOL', Status: 'DONE'});
var twoCase = new Case({Title: 'LOL2', Status: 'DONE2'});

var mycases = new CaseCollection([oneCase,twoCase]);

// messages.fetch();

new AddCasesView({collection: mycases}).setElement('#add-message');
new CasesView({collection: mycases}).setElement('#todos');