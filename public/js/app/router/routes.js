var Backbone = require('backbone');
var $ = require('jquery');
var CaseCollection = require('./../collections/casecollection');
var CasesView = require('./../views/casesview');
var Backgrid = require('backgrid');


var Router = Backbone.Router.extend({

    routes: {
        '' : 'home',
        'sub': 'sub',    // #help
        'users/login' : 'login'
        // "search/:query":        "search",  // #search/kiwis
        // "search/:query/p:page": "search"   // #search/kiwis/p7
    },

    sub: function() {
        console.log('SUB');

        if(!this.caseListView)
        {
            var myCases = new CaseCollection();
            this.caseListView = new CasesView({collection: myCases});
            $('#container').append(this.caseListView.render().$el);

            // var columns = [{
            //     name: "id", // The key of the model attribute
            //     label: "ID", // The name to display in the header
            //     editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
            //     // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            //     cell: Backgrid.IntegerCell.extend({
            //         orderSeparator: ''
            //     })
            // }, {
            //     name: "apsudzetais",
            //     label: "Apsudzetais",
            //     // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
            //     cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
            // }, {
            //     name: "laiks",
            //     label: "Laiks",
            //     cell: "string" // An integer cell is a number cell that displays humanized integers
            // }];
            //
            // // Initialize a new Grid instance
            // var grid = new Backgrid.Grid({
            //     columns: columns,
            //     collection: CaseCollection
            // });

            // // Render the grid and attach the root to your HTML document
            // $("#test").append(grid.render().el);
            //
            // // Fetch some countries from the url
            // myCases.fetch({
            //     data: { name: 'Janis'},
            //     type: 'POST'
            // });
            //territories.fetch({reset: true});


         }
        // else
        // {
        //     //this.caseListView.render();
        // }
    },

    home: function () {
        console.log('HOME');
        var Territory = Backbone.Model.extend({});

        var Territories = Backbone.Collection.extend({
            model: Territory,
            url: "http://backgridjs.com/examples/territories.json"
        });

        var territories = new Territories();

        var columns = [{
            name: "id", // The key of the model attribute
            label: "ID", // The name to display in the header
            editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
            // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
            cell: Backgrid.IntegerCell.extend({
                orderSeparator: ''
            })
        }, {
            name: "name",
            label: "Name",
            // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
            cell: "string" // This is converted to "StringCell" and a corresponding class in the Backgrid package namespace is looked up
        }, {
            name: "pop",
            label: "Population",
            cell: "integer" // An integer cell is a number cell that displays humanized integers
        }, {
            name: "percentage",
            label: "% of World Population",
            cell: "number" // A cell type for floating point value, defaults to have a precision 2 decimal numbers
        }, {
            name: "date",
            label: "Date",
            cell: "date"
        }, {
            name: "url",
            label: "URL",
            cell: "uri" // Renders the value in an HTML anchor element
        }];

        // Initialize a new Grid instance
        var grid = new Backgrid.Grid({
            columns: columns,
            collection: territories
        });

        // Render the grid and attach the root to your HTML document
        $("#grid").append(grid.render().el);

        // Fetch some countries from the url
        territories.fetch({reset: true});
    },
    login: function () {
        console.log('LOGIN');
    }

});

module.exports = Router;