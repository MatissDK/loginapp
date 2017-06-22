var Backbone = require('backbone');
var _ = require('underscore');
var CaseView = require('./caseview');

var SearchView =  Backbone.View.extend({

    // tagName: 'table',
    // className: 'table table-striped',

    initialize:function(){
        this.collection.on('add', this.onOneAdd,this);
    },

    onOneAdd: function(item){
        var myCase = new CaseView({model:item});
        this.$('#cases').append(myCase.render().$el);
    },

    events: {
        'click #add' : 'onAdd',
        'keypress #newTodo' : 'onKeyPress'
    },

    onKeyPress: function(e){
        if(e.keyCode == 13){
            this.onAdd();
        }
    },

    onAdd: function(){
        var $textBox = this.$('#newTodo');
        if($textBox.val()){
            this.$('#cases').html('');
            this.collection.fetch({
                data: { name: $textBox.val()},
                type: 'POST'
            });
            $textBox.val("");
        }
    },

    render: function () {
        this.$el.append("<input type='post' class='form-control' type='text' id='newTodo' autofocus/>");
        this.$el.append("<button hidden id='add'>Search</button>");


        //this.$el.append("<table id='cases'></table>");
        this.$el.append('<div class="table-responsive"><table id="cases" class="table table-striped"></table></div>');

        //this.$el.append("<div id='test'></div>");

        // this.collection.each(function(item){
        //     var myView  = new CaseView({model:item});
        //     this.$el.append(myView.render().$el);
        // }, this);

        return this;
    }
});

module.exports = CasesView;