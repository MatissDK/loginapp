var Backbone = require('backbone');
var _ = require('underscore');
var CaseView = require('./caseview');
var Case = require('./../models/case');
var CaseCollection = require('./../collections/casecollection');

var CasesView =  Backbone.View.extend({

    // tagName: 'ul',
    // id: 'cases',

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
             //var newCase = new Case({apsudzetais: $textBox.val(), laiks:555});
            this.collection.fetch({
                data: { name: $textBox.val()},
                type: 'POST'
            });

            $textBox.val("");
        }
    },

    render: function () {
        this.$el.append("<input type='post' type='text' id='newTodo' autofocus/>");
        this.$el.append("<button id='add'>Add</button>");

        this.$el.append("<ul id='cases'></ul>");

        // this.collection.each(function(item){
        //     var myView  = new CaseView({model:item});
        //     this.$el.append(myView.render().$el);
        // }, this);
        return this;
    }


});

module.exports = CasesView;